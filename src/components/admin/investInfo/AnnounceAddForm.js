import React, { useState, useRef, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertBoard } from 'store/boardReducer';

const AnnounceAddForm = () => {
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContents, setBoardContents] = useState('');
  let [fileName, setFileName] = useState([]);

  let nextID = useRef(1);
  let [inputItems, setInputItems] = useState([]);
  let fileRef = useRef([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //등록
  const onCreate = async (e) => {
    e.preventDefault();

    // const fileObj = fileRef.current.constructor.name === 'File' && fileRef.current;

    if (boardTitle === '') {
      alert('제목을 입력하세요');
      return;
    }
    if (boardContents === '') {
      alert('내용을 입력하세요');
      return;
    }
    // if (window.confirm('등록 하시겠습니까?')) {
    //   const newList = { boardId: 'ANN', boardTitle: boardTitle, boardContents: boardContents, file: fileObj };
    //   await dispatch(insertBoard(newList));
    //   return navigate('/admin/investInfo/announce');
    // }
  };

  // 추가
  const addDown = () => {
    const input = {
      // 새로운 인풋객체를 하나 만들고,
      id: nextID.current, // id 값은 변수로 넣어주고,
    };

    setInputItems([...inputItems, input]); // 기존 값에 새로운 인풋객체를 추가해준다.
    nextID.current += 1; // id값은 1씩 늘려준다.
  };

  // 삭제
  const deleteDown = (index) => {
    // 인덱스 값을 받아서
    setInputItems(inputItems.filter((item) => item.id !== index)); // 인덱스 값과 같지 않은 애들만 남겨둔다
  };

  const onUploadFile = (e, index) => {
    console.log('index=========' + e.target.files);
    if (!e.target.files) {
      return;
    }
    setFileName([e.target.files[index].name]);
    fileRef.current[index] = e.target.files[index];
  };

  return (
    <div className="a-content">
      <h2>공고등록</h2>
      <div className="ban-list bg-white">
        <div className="btn-area position">
          <NavLink to="/admin/investInfo/announce">
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
            <textarea
              name="boardContents"
              id=""
              cols="30"
              rows="10"
              placeholder="내용을 입력해주세요."
              onChange={(e) => setBoardContents(e.target.value)}
              value={boardContents}
            ></textarea>
          </div>

          <div className="ed-file">
            <div className="s-tit">첨부파일</div>
            <div className="file-area">
              <div className="input-box">
                <label htmlFor="e-choice01" className="file-choice">
                  <input type="file" id="e-choice01" className="file" ref={fileRef[0]} onChange={(e) => onUploadFile(e, 0)} />+ 파일선택
                </label>
                <span className="upload-name">{fileName[0]}</span>
              </div>
            </div>
            <NavLink to="" className="btn-add">
              <img src="/img/admin/ico-plus.svg" alt="" onClick={addDown} />
            </NavLink>
          </div>
          {inputItems.map((item, index) => (
            <div className="ed-file" key={index}>
              <div className="s-tit">첨부파일{item.id}</div>
              <div className="file-area">
                <div className="input-box">
                  <label htmlFor="e-choice01" className="file-choice">
                    <input type="file" id="e-choice01" className="file" ref={fileRef[item.id]} onChange={(e) => onUploadFile(e, item.id)} />+ 파일선택
                  </label>
                  <span className="upload-name">{fileName[item.id]}</span>
                </div>
              </div>
              <NavLink to="" className="btn-add">
                <img src="/img/admin/ico-x.svg" alt="" onClick={() => deleteDown(item.id)} />
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnounceAddForm;
