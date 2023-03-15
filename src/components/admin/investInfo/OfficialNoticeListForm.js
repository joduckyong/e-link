import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard, insertBoard, updateBoard, deleteBoardIds } from 'store/boardReducer';
import Pagination from 'react-js-pagination';

const OfficialNoticeListForm = () => {
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.boardReducer);
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  const [boardTitle, setBoardTitle] = useState('');
  const [url, setUrl] = useState('');
  const [page, setPage] = useState(1);
  const [keyId, setKeyId] = useState('');

  const [inputs1, setInputs1] = useState({
    boardTitle: [''],
  });
  const [inputs2, setInputs2] = useState({
    url: [''],
  });

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

  // 제목 input
  const onChange1 = (index, e) => {
    const values = [...inputs1.boardTitle];

    // console.log('values1 : ' + values);
    values[index] = e.target.value;
    setInputs1({ boardTitle: values });

    // console.log('inputs : ' + inputs1.boardTitle);
  };

  // 	Dart URL (링크)input
  const onChange2 = (index, e) => {
    const values = [...inputs2.url];

    // console.log('values2 : ' + values);
    values[index] = e.target.value;
    setInputs2({ url: values });

    // console.log('inputs : ' + inputs2.url);
  };

  //수정값 셋팅
  // const setBoardData = (id, title, url) => {
  //   setboardId(id);
  //   setBoardTitle(title);
  //   setUrl(url);
  // };

  //수정
  const onEdit = (e, index, boardId) => {
    e.preventDefault();
    // console.log('boardTitle : ' + inputs1.boardTitle[index]);
    // console.log('url : ' + inputs2.url[index]);
    // console.log('boardId : ' + boardId);

    if (inputs1.boardTitle[index] === '') {
      alert('제목을 입력하세요');
      return;
    }
    if (inputs2.url[index] === '') {
      alert('Dart URL을 입력하세요');
      return;
    }
    if (window.confirm('수정 하시겠습니까?')) {
      const newList = { boardId: boardId, boardTitle: inputs1.boardTitle[index], url: inputs2.url[index] };
      dispatch(updateBoard(newList)).then(() => {
        const newList = { boardId: 'OFF', pageIndex: 1, searchKeyword: null };
        dispatch(selectBoard(newList));

        setKeyId(0);
      });
    }
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

        setBoardTitle('');
        setUrl('');
        setKeyId(0);
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
          {/* <button className="btn btn-blue btn-120" onClick={onEdit}>
            수정
          </button> */}
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
              {boardList.data?.map((list, index) => (
                <tr className={list.boardId === keyId ? 'editwrite' : 'readonly'} key={index}>
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
                  <td>{list.boardId === keyId ? <input type="text" name="boardTitle" onChange={(e) => onChange1(index, e)} /> : list.boardTitle}</td>
                  <td>{list.boardId === keyId ? <input type="text" name="url" onChange={(e) => onChange2(index, e)} /> : list.url}</td>
                  <td>{list.createdDatetime}</td>
                  <td>
                    {list.boardId === keyId ? (
                      <>
                        <button className="btn btn-darkgray btn-70 btn-complete" onClick={(e) => onEdit(e, index, list.boardId)}>
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
