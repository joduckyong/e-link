import React, { useState, useRef, useCallback, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertBoard } from 'store/boardReducer';
import { getCookieToken } from 'storage/Cookie';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftjsToHtml from 'draftjs-to-html';

const AddFileBox = ({ fileName, filesRef, onUploadFile, onDeleteFile, fileCountList }) => {
  return (
    <>
      {fileCountList.map((index, idx) => (
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

const FinancialAddForm = (props) => {
  const [boardTitle, setBoardTitle] = useState('');
  const [fileName, setFileName] = useState({});
  const [fileCountList, setFileCountList] = useState([0]);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [boardContents, setBoardContents] = useState('');

  const handleEditorStateChange = async (state) => {
    await setEditorState(state);
    const html = draftjsToHtml(convertToRaw(editorState.getCurrentContent().getPlainText()));
    console.log(html);
    // setBoardContents(html);
  };

  const uploadImageCallBack = async (file) => {
    return new Promise((resolve, reject) => {
      const token = getCookieToken();

      const xhr = new XMLHttpRequest();
      xhr.open('POST', process.env.REACT_APP_API_URL + '/api/file/');
      xhr.setRequestHeader('Authorization', token);
      const data = new FormData();
      data.append('file', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        console.log('response : ' + response);
        const IMG_URL = `${process.env.REACT_APP_API_URL}/api/file/img/${response}`;
        console.log('IMG_URL : ' + IMG_URL);

        resolve({ data: { link: IMG_URL } });
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  };

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

    console.log('boardContents : ' + boardContents);
    // console.log('boardContents : ' + JSON.stringify(boardContents));
    // console.log('boardContents : ' + draftToHtml(JSON.stringify(boardContents)));
    // console.log('boardContents : ' + convertToRaw(JSON.stringify(boardContents)));
    // if (window.confirm('등록 하시겠습니까?')) {
    //   const newList = { boardId: 'FIN', boardTitle: boardTitle, boardContents: boardContents, files: files };
    //   await dispatch(insertBoard(newList));
    //   return navigate('/admin/investInfo/financial');
    // }
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
      let countArr = fileCountList.filter((i) => i !== index);
      setFileCountList(countArr);
    },
    [fileName],
  );

  const onAddFileBox = () => {
    let countArr = [...fileCountList];
    let count = countArr.slice(-1)[0] ? countArr.slice(-1)[0] : 0;
    count += 1;
    countArr.push(count);
    setFileCountList(countArr);
  };

  const wrapperStyle = {
    border: '1px solid #969696',
  };
  const editorStyle = {
    height: '400px',
    padding: '1rem',
  };

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
            <Editor
              placeholder="게시글을 작성해주세요"
              editorState={boardContents}
              onEditorStateChange={handleEditorStateChange}
              toolbar={{
                // fontFamily: {
                //   options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                //   className: undefined,
                //   component: undefined,
                //   dropdownClassName: undefined,
                //   title: '글꼴',
                // },
                image: {
                  uploadCallback: uploadImageCallBack,
                  alt: { present: true, mandatory: true },
                },
              }}
              localization={{ locale: 'ko' }}
              wrapperStyle={wrapperStyle}
              editorStyle={editorStyle}
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
