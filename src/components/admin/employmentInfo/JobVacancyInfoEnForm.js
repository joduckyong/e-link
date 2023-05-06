import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo } from 'store/boardEnReducer';
import { downloadFile } from 'common/download';

const JobVacancyInfoEnForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const boardTitle = useSelector((state) => state.boardEnReducer.dataInfo.boardTitle);
  const boardContents = useSelector((state) => state.boardEnReducer.dataInfo.boardContents);
  const boardType = useSelector((state) => state.boardEnReducer.dataInfo.boardType);
  const url = useSelector((state) => state.boardEnReducer.dataInfo.url);
  const boardStartDatetime = useSelector((state) => state.boardEnReducer.dataInfo.boardStartDatetime);
  const boardEndDatetime = useSelector((state) => state.boardEnReducer.dataInfo.boardEndDatetime);
  const attachList = useSelector((state) => state.boardEnReducer.files);

  useEffect(() => {
    dispatch(selectBoardInfo(id));
  }, [dispatch, id]);

  const getboardType = (type) => {
    let boardTypeName = '';
    if (type === '1') {
      boardTypeName = '신입';
    } else if (type === '2') {
      boardTypeName = '경력';
    } else if (type === '3') {
      boardTypeName = '인턴';
    }

    return boardTypeName;
  };

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
      <h2>채용공고 관리</h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <Link to="/admin/employmentInfo/jobVacancyEn">
            <button className="btn btn-white btn-120">목록</button>
          </Link>
        </div>
        <div className="view-detail bg-white">
          <ul>
            <li>
              <span className="tit">구분</span>
              <div className="text">{getboardType(boardType)}</div>
            </li>
            <li className="pop-show">
              <span className="tit">접수기간</span>
              <div className="text">
                <span>
                  <input type="text" value={boardStartDatetime} disabled />
                </span>
                -
                <span>
                  <input type="text" value={boardEndDatetime} disabled />
                </span>
              </div>
            </li>
            <li>
              <span className="tit">제목</span>
              <div className="text">{boardTitle}</div>
            </li>
            <li>
              <span className="tit">내용</span>
            </li>
            <li>
              <div dangerouslySetInnerHTML={{ __html: boardContents }}></div>
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
        <div className="view-detail bg-white mt10">
          <ul>
            <li>
              <span className="tit">지원서 링크</span>
              <div className="text">
                <span>{url}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobVacancyInfoEnForm;
