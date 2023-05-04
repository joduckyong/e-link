import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoard, deleteBoardIds } from 'store/boardReducer';
import Pagination from 'react-js-pagination';

const JobVacancyListEnForm = () => {
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.boardReducer.data);
  const totalCount = useSelector((state) => state.boardReducer.totalCount);
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [checkItems, setCheckItems] = useState([]);
  const [selectItem, setSelectItem] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newList = { boardId: 'JOB', pageIndex: page };
    dispatch(selectBoard(newList));
  }, [dispatch, page]);

  const pageClick = (page) => {
    setPage(page);
    onSearch(page);
  };

  const onSearch = (page) => {
    const newList = { boardId: 'JOB', pageIndex: page, searchKeyword: searchKeyword, searchCondition: selectItem };
    dispatch(selectBoard(newList));
  };

  const onRemove = (e) => {
    e.preventDefault();

    if (checkItems.length === 0) {
      alert('항목을 선택하세요');
      return;
    }

    if (window.confirm('삭제 하시겠습니까?')) {
      const newList = { ids: checkItems };

      dispatch(deleteBoardIds(newList)).then(() => {
        const newList = { boardId: 'JOB', pageIndex: page };
        dispatch(selectBoard(newList));
      });
    }
  };

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
      boardList.forEach((el) => idArray.push(el.boardId));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

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
          <Link to="/admin/employmentInfo/jobVacancy">국문</Link>
        </li>
        <li className="active">
          <Link to="/admin/employmentInfo/jobVacancyEn">영문</Link>
        </li>
      </ul>
      <h2>
        채용공고 관리<span>총 {totalCount}건</span>
      </h2>
      <div className="ban-list p0">
        <div className="search-box">
          <select name="searchCondition" onChange={(e) => setSelectItem(e.target.value)}>
            <option value="">전체</option>
            <option value="title">제목</option>
            <option value="content">내용</option>
          </select>
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
          <Link to="/admin/employmentInfo/jobVacancyAddEn">
            <button className="btn btn-blue btn-120">글쓰기</button>
          </Link>
        </div>
        <div className="table-wrap">
          <table>
            <colgroup>
              <col width="10%" />
              <col width="5%" />
              <col width="15%" />
              <col width="45%" />
              <col width="10%" />
              <col width="15%" />
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
                <th>구분</th>
                <th>제목</th>
                <th>작성일</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {boardList.map((list, index) => (
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
                  <td>{totalCount - (list.rnum - 1)}</td>
                  <td>{getboardType(list.boardType)}</td>
                  <td className="tal">
                    <Link to={`/admin/employmentInfo/jobVacancyInfoEn/${list.boardId}`}>
                      <span className="pop-name">{list.boardTitle}</span>
                    </Link>
                  </td>
                  <td>
                    <span className="pop-date">{list.createdDatetime}</span>
                  </td>
                  <td>
                    <Link to={`/admin/employmentInfo/jobVacancyModEn/${list.boardId}`}>
                      <button className="btn">수정</button>
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

export default JobVacancyListEnForm;
