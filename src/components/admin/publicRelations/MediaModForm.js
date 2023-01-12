import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo, updateBoard } from 'store/boardReducer';
import { serverUrl } from 'store/serverUrl';
import { getCookieToken } from 'storage/Cookie';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const MediaModForm = () => {
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContents, setBoardContents] = useState('');
  const [url, setUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [storedFileName, setStoredFileName] = useState('');
  const [storedFileArr, setStoredFileArr] = useState([]);

  console.log(storedFileName)

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const boardInfo = useSelector((state) => state.boardReducer.dataInfo);
  const fileList = useSelector((state) => state.boardReducer.files);

  const fileRef = useRef();

  useEffect(() => {
    dispatch(selectBoardInfo(id));
  }, [dispatch, id]);

  useEffect(() => {
    setBoardTitle(boardInfo.boardTitle);
    setBoardContents(boardInfo.boardContents);
    setUrl(boardInfo.url ? boardInfo.url : '');
  }, [boardInfo]);

  useEffect(() => {
    if (fileList.length === 0) {
      setFileName('');
      setStoredFileName('');
    }
    for (let file of fileList) {
      setFileName(file.fileOriginNm);
      setStoredFileName(file.fileNm);
    }
  }, [fileList]);

  const onEdit = async (e) => {
    e.preventDefault();

    const fileObj = fileRef.current.constructor.name === 'File' && fileRef.current;

    if (boardTitle === '') {
      alert('제목을 입력하세요');
      return;
    }
    if (boardContents === '') {
      alert('내용을 입력하세요');
      return;
    }
    if (window.confirm('수정 하시겠습니까?')) {
      const newList = { boardId: id, boardTitle: boardTitle, boardContents: boardContents, url: url, ids: storedFileArr, file: fileObj };
      await dispatch(updateBoard(newList));
      return navigate('/admin/publicRelations/media');
    }
  };

  const onUploadFile = useCallback(
    (e) => {
      if (!e.target.files) {
        return;
      }
      setFileName(e.target.files[0].name);
      fileRef.current = e.target.files[0];
      if (!storedFileArr.includes(storedFileName)) {
        setStoredFileArr([...storedFileArr, storedFileName]);
      }
    },
    [storedFileArr, storedFileName],
  );

  const onDeleteFile = useCallback(() => {
    setFileName('');
    fileRef.current = '';
    if(!storedFileArr.includes(storedFileName)){
        setStoredFileArr([...storedFileArr, storedFileName]);
    }
}, [storedFileArr, storedFileName]);

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
      <h2>미디어 수정</h2>
      <div className="ban-list bg-white">
        <div className="btn-area position">
          <Link to="/admin/publicRelations/media">
            <button className="btn btn-white btn-120">취소</button>
          </Link>
          <button className="btn btn-blue btn-120" onClick={onEdit}>
            수정
          </button>
        </div>
        <div className="edit">
          <div className="ed-tit">
            <div className="s-tit">제목</div>
            <input
              type="text"
              name="boardTitle"
              placeholder="제목을 입력해주세요."
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
                data={boardContents ? boardContents : ''}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setBoardContents(data);
                }}
            />
          </div>
          <div className="ed-file">
            <div className="s-tit">첨부파일</div>
            <div className="file-area">
              <div className="input-box">
                <label htmlFor="e-choice02" className="file-choice">
                  <input type="file" id="e-choice02" className="file" ref={fileRef} onChange={onUploadFile} />+ 파일선택
                </label>
                <span className="upload-name">{fileName ? fileName : '선택된 파일 없음'}
                    {fileName &&
                        <NavLink to="" onClick={onDeleteFile}> <img src="/img/admin/ico-x.svg" alt="" /></NavLink>
                    }
                </span>
              </div>
            </div>
          </div>
          <div className="ed-youtube">
            <div className="s-tit">유튜브 링크</div>
            <input type="text" name="url" onChange={(e) => setUrl(e.target.value)} value={url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaModForm;
