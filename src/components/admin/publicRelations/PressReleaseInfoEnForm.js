import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo } from 'store/boardEnReducer';
import { downloadFile } from 'common/download';

const PressReleaseInfoEnForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const boardTitle = useSelector((state) => state.boardEnReducer.dataInfo.boardTitle);
  const boardContents = useSelector((state) => state.boardEnReducer.dataInfo.boardContents);
  const fileList = useSelector((state) => state.boardEnReducer.files);
  const attachList = fileList.filter((file) => file.fileType !== '1'); //썸네일 제외

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
      <h2>보도자료 관리</h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <Link to="/admin/publicRelations/pressReleaseEn">
            <button className="btn btn-white btn-120">목록</button>
          </Link>
        </div>
        <div className="view-detail bg-white">
          <ul>
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
      </div>
    </div>
  );
};

export default PressReleaseInfoEnForm;
