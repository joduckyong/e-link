import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { insertBoard } from 'store/boardReducer';

const AnnounceAddForm = () => {
  const navigate = useNavigate();
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContents, setBoardContents] = useState('');

  const dispatch = useDispatch();

  const onCreate = (e) => {
    e.preventDefault();

    if (boardTitle === '') {
      alert('제목을 입력하세요');
      return;
    }
    if (boardContents === '') {
      alert('내용을 입력하세요');
      return;
    }
    if (window.confirm('등록 하시겠습니까?')) {
      const newList = { boardId: 'ANN', boardTitle: boardTitle, boardContents: boardContents };
      dispatch(insertBoard(newList));
      // alert('등록 되었습니다.');
      navigate('/admin/investInfo/announce');
    }
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
                  <input type="file" id="e-choice01" className="file" />+ 파일선택
                </label>
                <span className="upload-name">선택된 파일 없음</span>
              </div>
            </div>
            <NavLink to="" className="btn-add">
              <img src="/img/admin/ico-plus.svg" alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnounceAddForm;
