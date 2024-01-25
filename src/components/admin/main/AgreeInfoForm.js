import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardInfo } from 'store/boardReducer';

const AgreeInfoForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const boardTitle = useSelector((state) => state.boardReducer.dataInfo.boardTitle);
  const boardContents = useSelector((state) => state.boardReducer.dataInfo.boardContents);
  const boardType = useSelector((state) => state.boardReducer.dataInfo.boardType);

  useEffect(() => {
    dispatch(selectBoardInfo(id));
  }, [dispatch, id]);

  const getboardType = (type) => {
    let boardTypeName = '';
    if (type === '1') {
      boardTypeName = '필수';
    } else if (type === '2') {
      boardTypeName = '선택';
    }

    return boardTypeName;
  };

  return (
    <div className="a-content">
      <h2>약관동의 관리</h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <Link to="/admin/main/agree">
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
              <span className="tit">구분</span>
              <div className="text">{getboardType(boardType)}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AgreeInfoForm;
