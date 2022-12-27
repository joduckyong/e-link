import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard, insertBoard, updateBoard, deleteBoardIds } from 'store/boardReducer';
import Pagination from 'react-js-pagination';

const OfficialNoticeListForm = () => {
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.boardReducer);
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [boardId, setboardId] = useState('');
  const [boardTitle, setBoardTitle] = useState('');
  const [url, setUrl] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newList = { boardId: 'OFF', pageIndex: page, searchKeyword: null };
    dispatch(selectBoard(newList));
  }, [dispatch, page]);

  const onRemove = (e) => {
    e.preventDefault();
    if (checkItems.length === 0) {
      alert('항목을 선택하세요');
      return;
    }

    if (window.confirm('삭제 하시겠습니까?')) {
      const newList = { ids: checkItems };
      dispatch(deleteBoardIds(newList)).then(() => {
        const newList = { boardId: 'OFF', pageIndex: page, searchKeyword: null };
        dispatch(selectBoard(newList));
      });
    }
  };

  const setBoardData = (id, title, url) => {
    setboardId(id);
    setBoardTitle(title);
    setUrl(url);
  };

  const onEdit = (e) => {
    e.preventDefault();

    if (boardTitle === '') {
      alert('제목을 입력하세요');
      return;
    }
    if (url === '') {
      alert('Dart URL을 입력하세요');
      return;
    }
    if (window.confirm('수정 하시겠습니까?')) {
      const newList = { boardId: boardId, boardTitle: boardTitle, url: url };
      dispatch(updateBoard(newList)).then(() => {
        const newList = { boardId: 'OFF', pageIndex: 1, searchKeyword: null };
        dispatch(selectBoard(newList));
      });
    }
  };

  const onCreate = (e) => {
    e.preventDefault();

    if (boardTitle === '') {
      alert('제목을 입력하세요');
      return;
    }
    if (url === '') {
      alert('Dart URL을 입력하세요');
      return;
    }
    if (window.confirm('등록 하시겠습니까?')) {
      const newList = { boardId: 'OFF', boardTitle: boardTitle, url: url };
      dispatch(insertBoard(newList)).then(() => {
        const newList = { boardId: 'OFF', pageIndex: page, searchKeyword: null };
        dispatch(selectBoard(newList));
      });
    }
  };

  const pageClick = (page) => {
    setPage(page);
    onSearch(page);
  };

  const onSearch = (page) => {
    const newList = { boardId: 'OFF', pageIndex: page, searchKeyword: null };
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
        공시정보<span>총 {totalCount}건</span>
      </h2>
      <div className="ban-register p0">
        <h3>전자공고 등록</h3>
        <div className="btn-area">
          <button className="btn btn-blue btn-120" onClick={onCreate}>
            등록
          </button>
          <button className="btn btn-blue btn-120" onClick={onEdit}>
            수정
          </button>
        </div>
        <div className="ban-input">
          <div className="ban-tit">
            <div className="s-tit">제목</div>
            <input type="text" onChange={(e) => setBoardTitle(e.target.value)} value={boardTitle} placeholder="제목을 입력해주세요." />
          </div>
          <div className="ban-url">
            <div className="s-tit">Dart URL(링크)</div>
            <input type="text" onChange={(e) => setUrl(e.target.value)} value={url} placeholder="http://" />
          </div>
        </div>
      </div>
      <div className="ban-list p0">
        <h3 className="mt70">전체 공시정보 리스트</h3>
        <div className="btn-area">
          <button className="btn btn-red btn-120" onClick={onRemove}>
            선택삭제
          </button>
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
                    <input
                      type="checkbox"
                      id="allchk"
                      onChange={(e) => handleAllCheck(e.target.checked)}
                      checked={checkItems.length === boardList.length ? true : false}
                    />
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
              {/*
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
              */}
              {boardList.map((list, index) => (
                <tr className="readonly" key={index}>
                  <th>
                    <label htmlFor={`e01-${index}`}>
                      <input
                        type="checkbox"
                        id={`e01-${index}`}
                        onChange={(e) => handleSingleCheck(e.target.checked, list.boardId)}
                        checked={checkItems.includes(list.boardId) ? true : false}
                      />
                      <span className="chkimg"></span>
                    </label>
                  </th>
                  <td>{list.rnum}</td>
                  <td>{list.boardTitle}</td>
                  <td>{list.url}</td>
                  <td>{list.createdDatetime}</td>
                  <td>
                    <button className="btn btn-white" onClick={() => setBoardData(list.boardId, list.boardTitle, list.url)}>
                      수정
                    </button>
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

export default OfficialNoticeListForm;
