import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectManager, deleteManagerIds } from 'store/managerReducer';
import Pagination from 'react-js-pagination';

const MmgmtListForm = () => {
  const dispatch = useDispatch();
  const managerList = useSelector((state) => state.managerReducer.data);
  const totalCount = useSelector((state) => state.managerReducer.totalCount);
  const [checkItems, setCheckItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newList = { pageIndex: page };
    dispatch(selectManager(newList));
  }, [dispatch, page]);

  const pageClick = (page) => {
    setPage(page);
  };

  const onRemove = (e) => {
    e.preventDefault();

    if (checkItems.length === 0) {
      alert('항목을 선택하세요');
      return;
    }

    if (window.confirm('삭제 하시겠습니까?')) {
      const newList = { ids: checkItems };

      dispatch(deleteManagerIds(newList)).then(() => {
        const newList = { pageIndex: page };
        dispatch(selectManager(newList));
      });
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
      managerList.forEach((el) => idArray.push(el.adminNo));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  //권한 한글명
  const getKorRoleName = (main, prom, cont, mgm, inve, jobs, evst) => {
    let arr = [];
    if(main === 'Y'){
      arr.push('메인페이지')
    }
    
    if(prom === 'Y'){
      arr.push('홍보센터')
    }
    
    if(cont === 'Y'){
      arr.push('Contact Us')
    }
    
    if(mgm === 'Y'){
      arr.push('관리자권한')
    }
    
    if(inve === 'Y'){
      arr.push('투자정보')
    }
    
    if(jobs === 'Y'){
      arr.push('채용정보')
    }
    
    if(evst === 'Y'){
      arr.push('EV충전소')
    }

    return arr.join(', ');
    
  }

  return (
    <div className="a-content">
      <h2>
        전체 관리자 목록<span>총 {totalCount}건</span>
      </h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <button className="btn btn-red btn-120">선택삭제</button>
          <Link to="/admin/role/mgmtAdd">
            <button className="btn btn-blue btn-120">계정 생성</button>
          </Link>
          
        </div>
        <div className="table-wrap">
          <table>
            <colgroup>
              <col width="10%" />
              <col width="5%" />
              <col width="15%" />
              <col width="15%" />
              <col width="40%" />
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
                      checked={checkItems.length === managerList.length ? true : false}
                    />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <th>번호</th>
                <th>아이디</th>
                <th>이름</th>
                <th>권한</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
            {managerList.map((list, index) => (
              <tr key={index}>
                <th>
                <label htmlFor={`p01-${index}`}>
                  <input
                    type="checkbox"
                    id={`p01-${index}`}
                    onChange={(e) => handleSingleCheck(e.target.checked, list.adminNo)}
                    checked={checkItems.includes(list.adminNo) ? true : false}
                  />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <td>{totalCount - (list.rnum - 1)}</td>
                <td>{list.adminId}</td>
                <td>{list.adminNm}</td>
                <td>{getKorRoleName(list.roleMain, list.roleProm, list.roleCont, list.roleMgm, list.roleInve, list.roleJobs, list.roleEvst)}</td>
                <td>
                  <Link to={`/admin/role/mgmtMod/${list.adminNo}`}>
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

export default MmgmtListForm;
