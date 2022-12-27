import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo } from 'store/boardReducer';

const AnnounceInfoForm = () => {
  const [boardTitle, setBoardTitle] = useState('');
  const [boardContents, setBoardContents] = useState('');

  const { id } = useParams();
  const dispatch = useDispatch();
  const boardInfo = useSelector((state) => state.boardReducer);

  useEffect(() => {
    dispatch(selectBoardInfo(id));
  }, [dispatch, id]);

  useEffect(() => {
    boardInfo.forEach((info) => {
      setBoardTitle(info.boardTitle);
      setBoardContents(info.boardContents);
    });
  }, [boardInfo]);

  return (
    <div className="a-content">
      <h2>공고관리</h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <NavLink to="/admin/investInfo/announce">
            <button className="btn btn-white btn-120">목록</button>
          </NavLink>
        </div>
        <div className="view-detail bg-white">
          <ul>
            <li>
              <span className="tit">제목</span>
              <div className="text">{boardTitle}</div>
            </li>
            <li>
              <span className="tit">내용</span>
              <div className="text">{boardContents}</div>
            </li>
            <li>
              <span className="tit"></span>
              <div className="text"></div>
            </li>
          </ul>
        </div>
        <div className="view-detail bg-white mt10">
          <ul>
            <li>
              <span className="tit">첨부파일</span>
              <div className="text">
                <span>커넥터분리.pdf</span>
                <button className="btn-down">
                  <img src="/img/admin/ico-download.svg" alt="" />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnnounceInfoForm;
