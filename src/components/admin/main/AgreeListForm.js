import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard, deleteBoardIds } from 'store/boardReducer';
import Pagination from 'react-js-pagination';

const AgreeListForm = () => {
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.boardReducer);
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  // 페이징 값
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newList = { boardId: 'AGR', pageIndex: page };
    dispatch(selectBoard(newList));
  }, [dispatch, page]);

  // 삭제
  const onRemove = (e) => {
    e.preventDefault();

    if (checkItems.length === 0) {
      alert('항목을 선택하세요');
      return;
    }

    if (window.confirm('삭제 하시겠습니까?')) {
      const newList = { ids: checkItems };
      dispatch(deleteBoardIds(newList)).then(() => {
        const newList = { boardId: 'AGR', pageIndex: page };
        dispatch(selectBoard(newList));
      });
    }
  };

  // 페이징
  const pageClick = (page) => {
    setPage(page);
  };

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      boardList.data.forEach((el) => idArray.push(el.boardId));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

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
    <div className="a-content a01">
      <h2>
        약관동의 관리<span>총 {boardList.totalCount}건</span>
      </h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <button className="btn btn-red btn-120" onClick={onRemove}>
            선택삭제
          </button>
          <Link to="/admin/main/agreeAdd">
            <button className="btn btn-blue btn-120">추가</button>
          </Link>
        </div>
        <div className="table-wrap">
          <table>
            <colgroup>
              <col width="10%" />
              <col width="10%" />
              <col width="45%" />
              <col width="25%" />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <label htmlFor="allchk">
                    <input
                      type="checkbox"
                      id="allchk"
                      onChange={(e) => handleAllCheck(e.target.checked)}
                      checked={checkItems.length === boardList.data.length ? true : false}
                    />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <th>번호</th>
                <th>제목</th>
                <th>필수 / 선택</th>
                <th>관리</th>
              </tr>
            </thead>
            {boardList.data?.map((list, index) => (
              <tbody key={index}>
                <tr>
                  <th>
                    <label htmlFor={`p01-${index}`}>
                      <input
                        type="checkbox"
                        id={`p01-${index}`}
                        onChange={(e) => handleSingleCheck(e.target.checked, list.boardId)}
                        checked={checkItems.includes(list.boardId) ? true : false}
                      />
                      <span className="chkimg"></span>
                    </label>
                  </th>
                  <td>{boardList.totalCount - (list.rnum - 1)}</td>
                  <td>
                    <Link to={`/admin/main/agreeInfo/${list.boardId}`}>
                      <span className="pop-name">{list.boardTitle}</span>
                    </Link>
                  </td>
                  <td>
                    <span>{getboardType(list.boardType)}</span>
                  </td>
                  <td>
                    <Link to={`/admin/main/agreeMod/${list.boardId}`}>
                      <button className="btn">수정</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="paging">
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={boardList.totalCount ?? 0}
            pageRangeDisplayed={10}
            prevPageText={'‹'}
            nextPageText={'›'}
            onChange={pageClick}
          />
        </div>
      </div>
    </div>
  );
};

export default AgreeListForm;
