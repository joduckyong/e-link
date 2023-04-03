import React, { useState } from 'react';
import Pagination from 'react-js-pagination';

const MmgmtListForm = () => {
  const totalCount = 0;
  const [page, setPage] = useState(1);

  const pageClick = (page) => {
    setPage(page);
  };

  return (
    <div className="a-content">
      <h2>
        전체 관리자 목록<span>총 5건</span>
      </h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <button className="btn btn-red btn-120">선택삭제</button>
          <button className="btn btn-blue btn-120" onclick="location.href='a06-1-edit.html';">
            계정 생성
          </button>
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
                  <label for="allchk">
                    <input type="checkbox" id="allchk" />
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
              <tr>
                <th>
                  <label for="p01">
                    <input type="checkbox" id="p01" />
                    <span className="chkimg"></span>
                  </label>
                </th>
                <td>1</td>
                <td>super_admin</td>
                <td>이지원</td>
                <td>메인페이지, 투자정보, 홍보센터, 관리자 권한</td>
                <td>
                  <button className="btn" onclick="location.href='a06-1-edit.html';">
                    수정
                  </button>
                </td>
              </tr>
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
