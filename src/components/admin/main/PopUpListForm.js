import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPopup, deletePopupIds } from 'store/popupReducer';
import Pagination from 'react-js-pagination';
import ViewImage from 'components/common/ViewImage';

const PopUpListForm = () => {
  const dispatch = useDispatch();
  const popupList = useSelector((state) => state.popupReducer);
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  // 페이징 값
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newList = { popupId: 'POP', pageIndex: page };
    dispatch(selectPopup(newList));
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
      dispatch(deletePopupIds(newList)).then(() => {
        const newList = { popupId: 'POP', pageIndex: page };
        dispatch(selectPopup(newList));
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
      popupList.data.forEach((el) => idArray.push(el.popupId));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };
  return (
    <div className="a-content a01">
      <h2>
        팝업 관리<span>총 {popupList.totalCount}건</span>
      </h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <button className="btn btn-red btn-120" onClick={onRemove}>
            선택삭제
          </button>
          <Link to="/admin/main/popupAdd">
            <button className="btn btn-blue btn-120">팝업생성</button>
          </Link>
        </div>
        <div className="table-wrap">
          <table>
            <colgroup>
              <col width="10%" />
              <col width="10%" />
              <col width="25%" />
              <col width="20%" />
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
                      checked={checkItems.length === popupList.data.length ? true : false}
                    />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <th>번호</th>
                <th>팝업제목</th>
                <th>미리보기</th>
                <th>게시기간</th>
                <th>관리</th>
              </tr>
            </thead>
            {popupList.data.map((list, index) => (
              <tbody key={index}>
                <tr>
                  <th>
                    <label htmlFor={`p01-${index}`}>
                      <input
                        type="checkbox"
                        id={`p01-${index}`}
                        onChange={(e) => handleSingleCheck(e.target.checked, list.popupId)}
                        checked={checkItems.includes(list.popupId) ? true : false}
                      />
                      <span className="chkimg"></span>
                    </label>
                  </th>
                  <td>{list.rnum}</td>
                  <td>
                    <Link to={`/admin/main/popupInfo/${list.popupId}`}>
                      <span className="pop-name">{list.popupTitle}</span>{' '}
                    </Link>
                  </td>
                  <td>
                    <div className="shape-90">
                      <ViewImage fileNm={list.thumbNm} width={90} height={95} />
                    </div>
                  </td>
                  <td>
                    <span className="pop-date">
                      {list.popupStartdate} ~ {list.popupEnddate}
                    </span>
                  </td>
                  <td>
                    <Link to={`/admin/main/popupMod/${list.popupId}`}>
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
            totalItemsCount={popupList.totalCount}
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

export default PopUpListForm;
