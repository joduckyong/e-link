import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard, deleteBoardIds } from 'store/boardReducer';
import Pagination from 'react-js-pagination';

const AnnounceListEnForm = () => {
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.boardReducer);
  // 검색키워드
  const [searchKeyword, setSearchKeyword] = useState(null);
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  // 페이징 값
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newList = { boardId: 'ANN', pageIndex: page, searchKeyword: null };
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
        const newList = { boardId: 'ANN', pageIndex: page, searchKeyword: null };
        dispatch(selectBoard(newList));
      });
    }
  };

  // 페이징
  const pageClick = (page) => {
    setPage(page);
  };

  // 검색
  const onSearch = (page) => {
    const newList = { boardId: 'ANN', pageIndex: page, searchKeyword: searchKeyword };
    dispatch(selectBoard(newList));
  };

  // 검색 엔터
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(0);
    }
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

  return (
    <div className="a-content">
      <ul className="sub-tab">
        <li>
          <Link to="/admin/investInfo/announce">국문</Link>
        </li>
        <li className="active">
          <Link to="/admin/investInfo/announceEn">영문</Link>
        </li>
      </ul>
      <h2>
        공고관리<span>총 {boardList.totalCount}건</span>
      </h2>
      <div className="ban-list p0">
        <div className="search-box">
          <div className="search-input">
            <input
              type="text"
              placeholder="검색어를 입력해주세요."
              name="boardTitle"
              onChange={(e) => setSearchKeyword(e.target.value)}
              value={searchKeyword || ''}
              onKeyPress={onKeyPress}
            />
            <button className="btn-primary" onClick={() => onSearch(0)}></button>
          </div>
        </div>
        <div className="btn-area position">
          <button className="btn btn-red btn-120" onClick={onRemove}>
            선택삭제
          </button>
          <Link to="/admin/investInfo/announceAddEn">
            <button className="btn btn-blue btn-120">글쓰기</button>
          </Link>
        </div>
        <div className="table-wrap">
          <table>
            <colgroup>
              <col width="10%" />
              <col width="6%" />
              <col width="50%" />
              <col width="14%" />
              <col width="20%" />
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
                <th>작성일</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {boardList.data?.map((list, index) => (
                <tr key={index}>
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
                  <td className="tal pl40">
                    <Link to={`/admin/investInfo/announceInfoEn/${list.boardId}`}>{list.boardTitle}</Link>
                  </td>
                  <td>{list.createdDatetime}</td>
                  <td>
                    <Link to={`/admin/investInfo/announceModEn/${list.boardId}`}>
                      <button className="btn btn-white btn-70">수정</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
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

export default AnnounceListEnForm;
