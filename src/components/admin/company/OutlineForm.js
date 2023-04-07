import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';

const AddYearBox = ({ yearCountList }) => {
  return (
    <>
      {yearCountList.map((index, idx) => (
        <li key={index}>
          <div class="year-hd">
            <button class="delete">
              <img src="/img/admin/year-close.png" alt="삭제" />
            </button>
            <input type="text" placeholder="yyyy" maxlength="4" />
          </div>
          <ul class="year-bd">
            <li class="active">
              <div class="input-wp">
                <input type="text" placeholder="mm" maxlength="2" />
                <input type="text" placeholder="dd" maxlength="2" />
                <input type="text" placeholder="내용을 입력해주세요." />
              </div>
              <div class="btn-wp">
                <button class="gray-btn">등록</button>
                <button class="red-btn">삭제</button>
              </div>
            </li>
          </ul>
          <button class="add-btn">+ 내용추가</button>
        </li>
      ))}
    </>
  );
};

const OutlineForm = () => {
  const totalCount = 0;
  const [page, setPage] = useState(1);
  const [yearCountList, setYearCountList] = useState([0]);

  const pageClick = (page) => {
    setPage(page);
  };

  const onAddYearBox = () => {
    let countArr = [...yearCountList];
    let count = countArr.slice(-1)[0] ? countArr.slice(-1)[0] : 0;
    count += 1;
    countArr.push(count);
    setYearCountList(countArr);
  };

  return (
    <div class="a-content">
      <h2>
        연혁<span>총 6건</span>
      </h2>
      <div class="ban-list p0">
        <div class="btn-area position">
          <NavLink to="" className="btn-add" onClick={onAddYearBox}>
            <button class="btn btn-blue btn-120">연도생성</button>
          </NavLink>
        </div>
        <div class="table-wrap">
          <ul class="year-wp">
            <AddYearBox
              yearCountList={yearCountList}
            />
          </ul>
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

export default OutlineForm;
