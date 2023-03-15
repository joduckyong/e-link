import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard, insertBoard, updateBoard, deleteBoardIds } from 'store/boardReducer';
import Pagination from 'react-js-pagination';

const OfficialNoticeListForm = () => {
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.boardReducer);
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  const [boardId, setboardId] = useState('');
  const [boardTitle, setBoardTitle] = useState('');
  const [url, setUrl] = useState('');

  const [boardTitle2, setBoardTitle2] = useState([]);
  const [url2, setUrl2] = useState([]);

  const [page, setPage] = useState(1);

  const [keyId, setKeyId] = useState('');

  useEffect(() => {
    const newList = { boardId: 'OFF', pageIndex: page, searchKeyword: null };
    dispatch(selectBoard(newList));
  }, [dispatch, page]);

  useEffect(() => {
    boardList.data?.forEach((list, index) => {
      console.log('index : ' + index);
      console.log('boardTitle : ' + list.boardTitle);

      //    setBoardTitle2[index](list.boardTitle);
      //      setUrl2[index](list.url);
    });
  }, [boardList]);

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

  //수정값 셋팅
  // const setBoardData = (id, title, url) => {
  //   setboardId(id);
  //   setBoardTitle(title);
  //   setUrl(url);
  // };

  //수정
  const onEdit = (e, index) => {
    e.preventDefault();

    console.log('boardTitle2 : ' + boardTitle2[index]);
    // if (boardTitle2 === '') {
    //   alert('제목을 입력하세요');
    //   return;
    // }
    // if (url2 === '') {
    //   alert('Dart URL을 입력하세요');
    //   return;
    // }
    // if (window.confirm('수정 하시겠습니까?')) {
    //   const newList = { boardId: boardId, boardTitle: boardTitle2, url: url2 };
    //   dispatch(updateBoard(newList)).then(() => {
    //     const newList = { boardId: 'OFF', pageIndex: 1, searchKeyword: null };
    //     dispatch(selectBoard(newList));

    //     setboardId('');
    //     // setBoardTitle2('');
    //     // setUrl2('');
    //   });
    // }
  };

  //등록
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

        setboardId('');
        setBoardTitle('');
        setUrl('');
      });
    }
  };

  //페이징
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

  return (
    <div className="a-content a02">
      <h2>
        공시정보<span>총 {boardList.totalCount}건</span>
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
                      checked={checkItems.length === boardList.data.length ? true : false}
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
              {/* <tr className="editwrite">
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
              </tr> */}

              {boardList.data?.map((list, index) => (
                <tr className={list.boardId === keyId ? 'editwrite' : 'readonly'} key={list.boardId}>
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
                  <td>{boardList.totalCount - (list.rnum - 1)}</td>
                  <td>
                    <input type="text" name="boardTitle2[]" onChange={(e) => setBoardTitle2(e.target.value)} value={boardTitle2[list.index]} />
                  </td>
                  <td>
                    <input type="text" name="url2[]" onChange={(e) => setUrl2(e.target.value)} value={url2[list.index]} />
                  </td>
                  <td>{list.createdDatetime}</td>
                  <td>
                    {list.boardId === keyId ? (
                      <>
                        <button className="btn btn-darkgray btn-70 btn-complete" onClick={(e) => onEdit(e, index)}>
                          수정완료
                        </button>
                        <button className="btn btn-white btn-70 btn-cancle" onClick={() => setKeyId(index)}>
                          취소
                        </button>
                      </>
                    ) : (
                      <button className="btn btn-white" onClick={() => setKeyId(list.boardId)}>
                        수정
                      </button>
                    )}
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

export default OfficialNoticeListForm;
