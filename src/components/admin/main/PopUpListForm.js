import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPopup } from 'store/popupReducer';
import Pagination from 'react-js-pagination';

const PopUpListForm = () => {
  const dispatch = useDispatch();
  const popupList = useSelector((state) => state.popupReducer);
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newList = { popupId: 'POP', pageIndex: page };
    dispatch(selectPopup(newList));
  }, []);

  const pageClick = (page) => {
    setPage(page);
  };

  useEffect(() => {
    popupList.forEach((list, index) => {
      if (index === 0) {
        setTotalCount(list.totalCount);
      }
    });
  }, [popupList]);

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
      popupList.forEach((el) => idArray.push(el.popupId));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };
  return (
    <div className="a-content a01">
      <h2>
        팝업 관리<span>총 {totalCount}건</span>
      </h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <button className="btn btn-red btn-120">선택삭제</button>
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
                  <label htmlFor="select-all">
                    <input
                      type="checkbox"
                      name="select-all"
                      onChange={(e) => handleAllCheck(e.target.checked)}
                      // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                      checked={checkItems.length === popupList.length ? true : false}
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
            {popupList.map((list, index) => (
              <tbody key={index}>
                <tr>
                  <th>
                    <label htmlFor={`select-${list.popupId}`}>
                      <input
                        type="checkbox"
                        name={`select-${list.popupId}`}
                        onChange={(e) => handleSingleCheck(e.target.checked, list.boardId)}
                        // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                        checked={checkItems.includes(list.boardId) ? true : false}
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
                    <div className="shape-90"></div>
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

export default PopUpListForm;
