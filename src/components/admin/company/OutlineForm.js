import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AddYearBox = ({ 
    yearCountList
    , monthCountList
    , onDeleteYearBox
    , onAddMonthBox
    , onDeleteMonthBox
    , onCreate
    , yearRef
    , monthRef
    , dayRef
    , contentRef
  }) => {
  return (
    <>
      {yearCountList.map((yindex, yidx) => (
        <li key={yindex} data-yindex={yindex}>
          <div className="year-hd">
            <NavLink to="" onClick={(e) => onDeleteYearBox(e, yindex)}>
              <button className="delete">
                <img src="/img/admin/year-close.png" alt="삭제" />
              </button>
            </NavLink>
            <input type="text" placeholder="yyyy" maxLength="4" ref={(e) => {yearRef.current[yidx] = e}} />
          </div>
          <ul className="year-bd">
            {monthCountList[yidx].map((mindex, midx) => (
              <li className="active" key={mindex} data-mindex={mindex}>
                <div className="input-wp">
                  <input type="text" placeholder="mm" maxLength="2" ref={(e) => {monthRef.current[yidx+'_'+midx] = e}} />
                  <input type="text" placeholder="dd" maxLength="2" ref={(e) => {dayRef.current[yidx+'_'+midx] = e}} />
                  <input type="text" placeholder="내용을 입력해주세요." ref={(e) => {contentRef.current[yidx+'_'+midx] = e}} />
                </div>
                <div className="btn-wp">
                  <button className="gray-btn" onClick={onCreate}>등록</button>
                  <button className="red-btn" onClick={(e) => onDeleteMonthBox(e, yidx, mindex)}>삭제</button>
                </div>
              </li>
            ))}
          </ul>
          
          <button className="add-btn" onClick={(e) => onAddMonthBox(e, yidx)}>+ 내용추가</button>
        </li>
      ))}
    </>
  );
};

const OutlineForm = () => {
  const [totalCount, setTotalCount] = useState(1);
  const [yearCountList, setYearCountList] = useState([0]);
  const [monthCountList, setMonthCountList] = useState([[0]]);
  const yearRef = useRef([]);
  const monthRef = useRef({});
  const dayRef = useRef({});
  const contentRef = useRef({});

  const onCreate = () => {

  }
  
  const onAddYearBox = () => {
    let yearCountArr = [...yearCountList];
    let monthCountArr = [...monthCountList];
    let yearCount = yearCountArr.slice(-1)[0] ? yearCountArr.slice(-1)[0] : 0;
    yearCount += 1;
    yearCountArr.push(yearCount);
    monthCountArr.push([0]);
    setYearCountList(yearCountArr);
    setMonthCountList(monthCountArr);
    setTotalCount(totalCount + 1);
  };

  const onDeleteYearBox = (e, index) => {
    e.preventDefault();
    let countArr = yearCountList.filter((i) => i !== index);
    let monthCountArr = monthCountList.filter((_, idx) => idx !== index);
    setYearCountList(countArr);
    setMonthCountList(monthCountArr);
    setTotalCount(totalCount - 1);
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
    if(monthForYearCountArr.length === 0){
      return;
    }
    monthCountArr[yidx] = monthForYearCountArr;
    setMonthCountList(monthCountArr);
  };

  return (
    <div className="a-content">
      <h2>
        연혁<span>총 {totalCount}건</span>
      </h2>
      <div className="ban-list p0">
        <div className="btn-area position">
          <NavLink to="" className="btn-add" onClick={onAddYearBox}>
            <button className="btn btn-blue btn-120">연도생성</button>
          </NavLink>
        </div>
        <div className="table-wrap">
          <ul className="year-wp">
            <AddYearBox
              yearCountList={yearCountList}
              monthCountList={monthCountList}
              onDeleteYearBox={onDeleteYearBox}
              onAddMonthBox={onAddMonthBox}
              onDeleteMonthBox={onDeleteMonthBox}
              onCreate={onCreate}
              yearRef={yearRef}
              monthRef={monthRef}
              dayRef={dayRef}
              contentRef={contentRef}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OutlineForm;
