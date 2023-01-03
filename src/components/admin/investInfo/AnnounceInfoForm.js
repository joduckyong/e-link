import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo } from 'store/boardReducer';
import { downloadFile } from 'common/download';

const AnnounceInfoForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const boardInfo = useSelector((state) => state.boardReducer);
  const fileList = useSelector((state) => state.boardReducer.files);
  const attachList = fileList.filter((file) => file.fileType !== '1'); //썸네일 제외

  useEffect(() => {
    dispatch(selectBoardInfo(id));
  }, [dispatch, id]);

  return (
    <div className="a-content">
      <h2>공고상세</h2>
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
              <div className="text">{boardInfo.dataInfo.boardTitle}</div>
            </li>
            <li>
              <span className="tit">내용</span>
              <div className="text">{boardInfo.dataInfo.boardContents}</div>
            </li>
            <li>
              <span className="tit"></span>
              <div className="text"></div>
            </li>
          </ul>
        </div>
        {attachList.length > 0 && (
          <div className="view-detail bg-white mt10">
            <ul>
              {attachList.map((list, index) => (
                <li>
                  <span className="tit">첨부파일</span>
                  <div className="text">
                    <span>{list.fileOriginNm}</span>
                    <button className="btn-down" onClick={() => downloadFile(list.fileNm, list.fileOriginNm)}>
                      <img src="/img/admin/ico-download.svg" alt="" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnounceInfoForm;
