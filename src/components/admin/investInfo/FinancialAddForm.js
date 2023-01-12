import React, { useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertBoard } from 'store/boardReducer';
import { serverUrl } from 'store/serverUrl';
import { getCookieToken } from 'storage/Cookie';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddFileBox = ({ fileName, filesRef, onUploadFile, onDeleteFile, fileCountList }) => {
  return (
    <>
      {fileCountList.map((list, index) => (
        <div className="input-box" key={index}>
          <label htmlFor={'e-choice01_' + index} className="file-choice">
            <input type="file" id={'e-choice01_' + index} className="file" data-index={index} ref={filesRef[index]} onChange={onUploadFile} />+
            파일선택
          </label>
          <span className="upload-name">
            {fileName[index] ? fileName[index] : '선택된 파일 없음'}
            {fileName[index] && (
              <NavLink to="" onClick={(e) => onDeleteFile(e, index)}>
                {' '}
                <img src="/img/admin/ico-x.svg" alt="" />
              </NavLink>
            )}
          </span>
        </div>
      ))}
    </>
  );
};

const FinancialAddForm = () => {
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContents, setBoardContents] = useState('');
  const [fileName, setFileName] = useState({});
  const [fileCountList, setFileCountList] = useState([0]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filesRef = useRef([]);

  //등록
  const onCreate = async (e) => {
    e.preventDefault();

    const files = filesRef.current.map((fileRef) => {
      return fileRef.constructor.name === 'File' && fileRef;
    });

    if (boardTitle === '') {
      alert('제목을 입력하세요');
      return;
    }
    if (boardContents === '') {
      alert('내용을 입력하세요');
      return;
    }
    if (window.confirm('등록 하시겠습니까?')) {
      const newList = { boardId: 'FIN', boardTitle: boardTitle, boardContents: boardContents, files: files };
      await dispatch(insertBoard(newList));
      return navigate('/admin/investInfo/financial');
    }
  };

  const onUploadFile = useCallback(
    (e) => {
      if (!e.target.files) {
        return;
      }
      const index = e.target.dataset.index;
      setFileName({ ...fileName, [index]: e.target.files[0].name });
      filesRef.current[index] = e.target.files[0];
    },
    [fileName],
  );

  const onDeleteFile = useCallback(
    (e, index) => {
      e.preventDefault();
      setFileName({ ...fileName, [index]: '' });
      filesRef.current[index] = '';
    },
    [fileName],
  );

  const onAddFileBox = () => {
    let countArr = [...fileCountList];
    let count = countArr.slice(-1)[0];
    count += 1;
    countArr.push(count);
    setFileCountList(countArr);
  };

  const [flag, setFlag] = useState(false);
  const customUploadAdapter = (loader) => {
    return {
      upload() {
        return new Promise((resolve, reject) => {
          const token = getCookieToken();
          const config = {
            headers: {
              Authorization: token,
            },
          };
          const data = new FormData();
          loader.file.then((file) => {
            // data.append('name', file.name);
            data.append('file', file);
            axios
              .post(serverUrl + '/api/file/', data, config)
              .then((res) => {
                if (!flag) {
                  setFlag(true);
                }
                resolve({
                  default: `${serverUrl}/api/file/img/${res.data}`,
                });
              })
              .catch((err) => reject(err));
          });
        });
      },
    };
  };

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    };
  }

  return (
    <div className="a-content">
      <h2>재무등록</h2>
      <div className="ban-list bg-white">
        <div className="btn-area position">
          <NavLink to="/admin/investInfo/financial">
            <button className="btn btn-white btn-120">취소</button>
          </NavLink>
          <button className="btn btn-blue btn-120" onClick={onCreate}>
            등록
          </button>
        </div>
        <div className="edit">
          <div className="ed-tit">
            <div className="s-tit">제목</div>
            <input
              type="text"
              placeholder="제목을 입력해주세요."
              name="boardTitle"
              onChange={(e) => setBoardTitle(e.target.value)}
              value={boardTitle}
            />
          </div>
          <div className="ed-area">
            <CKEditor
              editor={ClassicEditor}
              config={{
                extraPlugins: [uploadPlugin],
              }}
              data=""
              onChange={(event, editor) => {
                const data = editor.getData();
                setBoardContents(data);
              }}
            />
          </div>

          <div className="ed-file">
            <div className="s-tit">첨부파일</div>
            <div className="file-area">
              <AddFileBox
                fileName={fileName}
                filesRef={filesRef}
                onUploadFile={onUploadFile}
                onDeleteFile={onDeleteFile}
                fileCountList={fileCountList}
              />
            </div>
            <NavLink to="" className="btn-add" onClick={onAddFileBox}>
              <img src="/img/admin/ico-plus.svg" alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialAddForm;
