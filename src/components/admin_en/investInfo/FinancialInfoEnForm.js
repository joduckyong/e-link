import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo } from 'store/boardEnReducer';
import { downloadFile } from 'common/download';

const FinancialInfoEnForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const boardInfo = useSelector((state) => state.boardEnReducer.dataInfo);
  const attachList = useSelector((state) => state.boardEnReducer.files);

  useEffect(() => {
    dispatch(selectBoardInfo(id));
  }, [dispatch, id]);

  return (
    <div className="a-content">
      <ul className="sub-tab">
        <li>
          <Link to="">국문</Link>
        </li>
        <li className="active">
          <Link to="">영문</Link>
        </li>
      </ul>
      <h2>재무관리</h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <NavLink to="/admin/investInfo/financialEn">
            <button className="btn btn-white btn-120">목록</button>
          </NavLink>
        </div>
        <div className="view-detail bg-white">
          <ul>
            <li>
              <span className="tit">제목</span>
              <div className="text">{boardInfo.boardTitle}</div>
            </li>
            <li>
              <span className="tit">내용</span>
            </li>
            <li>
              <div dangerouslySetInnerHTML={{ __html: boardInfo.boardContents }}></div>
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
                <li key={index}>
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

export default FinancialInfoEnForm;
