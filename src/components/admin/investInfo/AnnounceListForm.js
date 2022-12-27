import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard } from 'store/boardReducer';
import Pagination from 'react-js-pagination';

const AnnounceListForm = () => {
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.boardReducer);
  const [searchKeyword, setSearchKeyword] = useState(null);
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const newList = { boardId: 'ANN', pageIndex: page, searchKeyword: null };
    dispatch(selectBoard(newList));
    console.log('searchKeyword : ' + searchKeyword);
  }, []);

  const pageClick = (page) => {
    setPage(page);
    onSearch(page);
  };

  const onSearch = (page) => {
    const newList = { boardId: 'ANN', pageIndex: page, searchKeyword: searchKeyword };
    dispatch(selectBoard(newList));
  };

  useEffect(() => {
    boardList.forEach((list, index) => {
      if (index === 0) {
        setTotalCount(list.totalCount);
      }
    });
  }, [boardList]);

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(0);
    }
  };

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      boardList.forEach((el) => idArray.push(el.boardId));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  return (
    <div className="a-content">
      <h2>
        공고관리<span>총 {totalCount}건</span>
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
          <button className="btn btn-red btn-120">선택삭제</button>
          <Link to="/admin/investInfo/announceAdd">
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
                  <label htmlFor="select-all">
                    <input
                      type="checkbox"
                      name="select-all"
                      onChange={(e) => handleAllCheck(e.target.checked)}
                      // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                      checked={checkItems.length === boardList.length ? true : false}
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
              {boardList.map((list, index) => (
                <tr key={index}>
                  <th>
                    <label htmlFor={`select-${list.boardId}`}>
                      <input
                        type="checkbox"
                        name={`select-${list.boardId}`}
                        onChange={(e) => handleSingleCheck(e.target.checked, list.boardId)}
                        // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                        checked={checkItems.includes(list.boardId) ? true : false}
                      />
                      <span className="chkimg"></span>
                    </label>
                  </th>
                  <td>{list.rnum}</td>
                  <td className="tal pl40">
                    <Link to={`/admin/investInfo/announceInfo/${list.boardId}`}>{list.boardTitle}</Link>
                  </td>
                  <td>{list.createdDatetime}</td>
                  <td>
                    <Link to={`/admin/investInfo/announceMod/${list.boardId}`}>
                      <button className="btn btn-white btn-70">수정</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="paging">
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={totalCount}
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

export default AnnounceListForm;
