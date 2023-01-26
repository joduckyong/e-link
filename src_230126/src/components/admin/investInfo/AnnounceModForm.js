import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo, updateBoard } from 'store/boardReducer';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddFileBox = ({ fileName, filesRef, onUploadFile, fileCountList }) => {
  return (
    <>
      {fileCountList.map((list, index) => (
        <div className="input-box" key={index}>
          <label htmlFor={'e-choice01_' + index} className="file-choice">
            <input type="file" id={'e-choice01_' + index} className="file" data-index={index} ref={filesRef[index]} onChange={onUploadFile} />+
            파일선택
          </label>
          <span className="upload-name">{fileName[index] ? fileName[index] : '선택된 파일 없음'}</span>
        </div>
      ))}
    </>
  );
};

const AnnounceModForm = () => {
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContents, setBoardContents] = useState('');
  const [fileName, setFileName] = useState({});
  const [fileCountList, setFileCountList] = useState([0]);
  const [storedFileName, setStoredFileName] = useState({});
  const [storedFileArr, setStoredFileArr] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boardInfo = useSelector((state) => state.boardReducer.dataInfo);
  const attachList = useSelector((state) => state.boardReducer.files);
  const filesRef = useRef([]);

  useEffect(() => {
    dispatch(selectBoardInfo(id));
  }, [dispatch, id]);

  //값 셋팅
  useEffect(() => {
    setBoardTitle(boardInfo.boardTitle);
    setBoardContents(boardInfo.boardContents);
  }, [boardInfo]);

  useEffect(() => {
    const onInitFileBox = (e) => {
      let countArr = [];
      let fileObj = {};
      let storedFiles = {};
      for (let i = 0; i < attachList.length; i++) {
        countArr.push(i);
        fileObj[i] = attachList[i].fileOriginNm;
        storedFiles[i] = attachList[i].fileNm;
      }
      setFileName(fileObj);
      setFileCountList(countArr);
      setStoredFileName(storedFiles);
    };

    onInitFileBox();
  }, [attachList]);

  //수정
  const onEdit = async (e) => {
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
    if (window.confirm('수정 하시겠습니까?')) {
      const newList = {
        boardId: id,
        boardTitle: boardTitle,
        boardContents: boardContents,
        ids: storedFileArr,
        files: files,
      };
      await dispatch(updateBoard(newList));
      return navigate('/admin/investInfo/announce');
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
      if (!storedFileArr.includes(storedFileName[index])) {
        setStoredFileArr([...storedFileArr, storedFileName[index]]);
      }
    },
    [fileName, storedFileArr, storedFileName],
  );

  const onAddFileBox = () => {
    let countArr = [...fileCountList];
    let count = countArr.slice(-1)[0];
    count += 1;
    countArr.push(count);
    setFileCountList(countArr);
  };

  return (
    <div className="a-content">
      <h2>공고수정</h2>
      <div className="ban-list bg-white">
        <div className="btn-area position">
          <NavLink to="/admin/investInfo/announce">
            <button className="btn btn-white btn-120">취소</button>
          </NavLink>
          <button className="btn btn-blue btn-120" onClick={onEdit}>
            수정
          </button>
        </div>
        <div className="edit">
          <div className="ed-tit">
            <div className="s-tit">제목</div>
            <input type="text" placeholder="제목을 입력해주세요." onChange={(e) => setBoardTitle(e.target.value)} value={boardTitle} />
          </div>
          <div className="ed-area">
            <CKEditor
              editor={ClassicEditor}
              data={boardContents}
              onChange={(event, editor) => {
                const data = editor.getData();
                setBoardContents(data);
              }}
            />
          </div>
          <div className="ed-file">
            <div className="s-tit">첨부파일</div>
            <div className="file-area">
              <AddFileBox fileName={fileName} filesRef={filesRef} onUploadFile={onUploadFile} fileCountList={fileCountList} />
              <NavLink to="" className="btn-add" onClick={onAddFileBox}>
                <img src="/img/admin/ico-plus.svg" alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnounceModForm;
