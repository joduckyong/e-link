import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo, updateBoard } from 'store/boardReducer';

const AnnounceModForm = () => {
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContents, setBoardContents] = useState('');

  const { id } = useParams();
  const dispatch = useDispatch();
  const boardInfo = useSelector((state) => state.boardReducer);

  useEffect(() => {
    dispatch(selectBoardInfo(id));
  }, [dispatch, id]);

  //값 셋팅
  useEffect(() => {
    setBoardTitle(boardInfo.dataInfo.boardTitle);
    setBoardContents(boardInfo.dataInfo.boardContents);
  }, [boardInfo]);

  //수정
  const onEdit = (e) => {
    e.preventDefault();

    if (boardTitle === '') {
      alert('제목을 입력하세요');
      return;
    }
    if (boardContents === '') {
      alert('내용을 입력하세요');
      return;
    }
    if (window.confirm('수정 하시겠습니까?')) {
      const newList = { boardId: id, boardTitle: boardTitle, boardContents: boardContents };
      dispatch(updateBoard(newList));
      document.location.href = '/admin/investInfo/announce';
    }
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
            <textarea
              name="boardContents"
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

export default AnnounceModForm;
