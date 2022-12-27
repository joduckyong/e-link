import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard, deleteBoardIds } from 'store/boardReducer';
import Pagination from 'react-js-pagination';

const OfficialNoticeListForm = () => {
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.boardReducer);
  const [searchKeyword, setSearchKeyword] = useState(null);
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const newList = { boardId: 'OFF', pageIndex: page, searchKeyword: null };
    dispatch(selectBoard(newList));
    console.log('searchKeyword : ' + searchKeyword);
  }, []);

  const onRemove = (e) => {
    e.preventDefault();

    if (checkItems.length === 0) {
      alert('항목을 선택하세요');
      return;
    }

    if (window.confirm('삭제 하시겠습니까?')) {
      const newList = { ids: checkItems };
      dispatch(deleteBoardIds(newList));
      document.location.href = '/admin/investInfo/officialNotice';
    }
  };

  const pageClick = (page) => {
    setPage(page);
    onSearch(page);
  };

  const onSearch = (page) => {
    const newList = { boardId: 'OFF', pageIndex: page, searchKeyword: searchKeyword };
    dispatch(selectBoard(newList));
  };

  useEffect(() => {
    boardList.forEach((list, index) => {
      if (index === 0) {
        setTotalCount(list.totalCount);
      }
    });
  }, [boardList]);

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
      boardList.forEach((el) => idArray.push(el.boardId));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  return (
    <div className="a-content a02">
      <h2>
        공시정보<span>총 21건</span>
      </h2>
      <div className="ban-register p0">
        <h3>전자공고 등록</h3>
        <div className="btn-area">
          <button className="btn btn-gray btn-120">등록</button>
        </div>
        <div className="ban-input">
          <div className="ban-tit">
            <div className="s-tit">제목</div>
            <input type="text" placeholder="제목을 입력해주세요." />
          </div>
          <div className="ban-url">
            <div className="s-tit">Dart URL(링크)</div>
            <input type="text" value="http://" />
          </div>
        </div>
      </div>
      <div className="ban-list p0">
        <h3 className="mt70">전체 공시정보 리스트</h3>
        <div className="btn-area">
          <button className="btn btn-red btn-120">선택삭제</button>
        </div>
        <div className="table-wrap">
          <table>
            <colgroup>
              <col width="7%" />
              <col width="7%" />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <label htmlFor="allchk">
                    <input type="checkbox" id="allchk" />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <th>번호</th>
                <th>제목</th>
                <th>Dart URL (링크)</th>
                <th>작성일</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr className="editwrite">
                <th>
                  <label htmlFor="e01">
                    <input type="checkbox" id="e01" />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <td>5</td>
                <td>
                  <input type="text" value="분기보고서 (2023.09)" />
                </td>
                <td>
                  <input type="text" value="https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20221114001528" />
                </td>
                <td>2023-11-14</td>
                <td>
                  <button className="btn btn-darkgray btn-70 btn-complete">수정완료</button>
                  <button className="btn btn-white btn-70 btn-cancle">취소</button>
                </td>
              </tr>
              <tr className="readonly">
                <th>
                  <label htmlFor="e01">
                    <input type="checkbox" id="e01" />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <td>4</td>
                <td>분기보고서 (2023.09)</td>
                <td>https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20221114001528</td>
                <td>2023-11-14</td>
                <td>
                  <button className="btn btn-white">수정</button>
                </td>
              </tr>
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

export default OfficialNoticeListForm;
