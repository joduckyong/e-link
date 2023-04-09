import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Pagination from 'react-js-pagination';

const AddYearBox = ({ yearCountList, monthCountList, onDeleteYearBox, onAddMonthBox, onDeleteMonthBox }) => {
  return (
    <>
      {yearCountList.map((yindex, yidx) => (
        <li key={yindex} data-yindex={yindex}>
          <div class="year-hd">
            <NavLink to="" onClick={(e) => onDeleteYearBox(e, yindex)}>
              <button class="delete">
                <img src="/img/admin/year-close.png" alt="삭제" />
              </button>
            </NavLink>
            <input type="text" placeholder="yyyy" maxlength="4" />
          </div>
          <ul class="year-bd">
            {monthCountList[yidx].map((mindex, midx) => (
              <li class="active" key={mindex} data-mindex={mindex}>
                <div class="input-wp">
                  <input type="text" placeholder="mm" maxlength="2" />
                  <input type="text" placeholder="dd" maxlength="2" />
                  <input type="text" placeholder="내용을 입력해주세요." />
                </div>
                <div class="btn-wp">
                  <button class="gray-btn">등록</button>
                  <button class="red-btn" onClick={(e) => onDeleteMonthBox(e, yidx, mindex)}>삭제</button>
                </div>
              </li>
            ))}
          </ul>
          
          <button class="add-btn" onClick={(e) => onAddMonthBox(e, yidx)}>+ 내용추가</button>
        </li>
      ))}
    </>
  );
};

const OutlineForm = () => {
  const totalCount = 0;
  const [page, setPage] = useState(1);
  const [yearCountList, setYearCountList] = useState([0]);
  const [monthCountList, setMonthCountList] = useState([[0]]);
  
  const pageClick = (page) => {
    setPage(page);
  };

  const onAddYearBox = () => {
    let yearCountArr = [...yearCountList];
    let monthCountArr = [...monthCountList];
    let yearCount = yearCountArr.slice(-1)[0] ? yearCountArr.slice(-1)[0] : 0;
    yearCount += 1;
    yearCountArr.push(yearCount);
    monthCountArr.push([0]);
    setYearCountList(yearCountArr);
    setMonthCountList(monthCountArr);
  };

  const onDeleteYearBox = (e, index) => {
    e.preventDefault();
    let countArr = yearCountList.filter((i) => i !== index);
    let monthCountArr = monthCountList.filter((_, idx) => idx !== index);
    setYearCountList(countArr);
    setMonthCountList(monthCountArr);
  };

  const onAddMonthBox = (e, index) => {
    e.preventDefault();
    let monthCountArr = [...monthCountList];
    let monthForYearCountArr = monthCountArr[index];
    let monthCount = monthForYearCountArr.slice(-1)[0] ? monthForYearCountArr.slice(-1)[0] : 0;
    monthCount += 1;
    monthForYearCountArr.push(monthCount);
    monthCountArr[index] = monthForYearCountArr;
    setMonthCountList(monthCountArr);
  }

  const onDeleteMonthBox = (e, yidx, mindex) => {
    e.preventDefault();
    let monthCountArr = [...monthCountList];
    let monthForYearCountArr = monthCountArr[yidx].filter((i) => i !== mindex);
    if(monthForYearCountArr.length == 0){
      return;
    }
    monthCountArr[yidx] = monthForYearCountArr;
    setMonthCountList(monthCountArr);
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
              monthCountList={monthCountList}
              onDeleteYearBox={onDeleteYearBox}
              onAddMonthBox={onAddMonthBox}
              onDeleteMonthBox={onDeleteMonthBox}
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
