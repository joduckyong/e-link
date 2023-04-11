import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectOutline, insertOutline } from 'store/outlineReducer';
import { useEffect } from 'react';

const AddYearBox = ({ 
    onDeleteYearBox
    , onAddMonthBox
    , onDeleteMonthBox
    , onCreate
    , onChange
    , onChangeYear
    , yearRef
    , monthRef
    , dayRef
    , contentRef
    , yearObj
    , inputs
  }) => {
  return (
    <>
      {Object.keys(yearObj).reverse().map((year, yidx) => (
        <li key={year} data-yindex={year}>
          <div className="year-hd">
            <NavLink to="" onClick={(e) => onDeleteYearBox(e, year)}>
              <button className="delete">
                <img src="/img/admin/year-close.png" alt="삭제" />
              </button>
            </NavLink>
            <input type="text" placeholder="yyyy" maxLength="4" name={"companyYear"+yidx}  value={year.indexOf('new_') > -1 ? inputs["companyYear"+yidx] : year} ref={(e) => {yearRef.current[year] = e}} onChange={(e) => onChangeYear(e)} disabled={year.indexOf('new_') > -1 ? false : true}/>
          </div>
          <ul className="year-bd">
            {yearObj[year].map((item, midx) => (
              <li className="active" key={year+'_'+midx} data-mindex={year+'_'+midx}>
                <div className="input-wp">
                  <input type="text" placeholder="mm" maxLength="2" name="companyMonth" value={item.companyMonth} ref={(e) => {monthRef.current[year+'_'+midx] = e}} onChange={(e) => onChange(e, year, midx)} disabled={item.companyMonth ? true : false} />
                  <input type="text" placeholder="dd" maxLength="2" name="companyDay" value={item.companyDay} ref={(e) => {dayRef.current[year+'_'+midx] = e}} onChange={(e) => onChange(e, year, midx)} disabled={item.companyDay ? true : false} />
                  <input type="text" placeholder="내용을 입력해주세요." name="companyContents" value={item.companyContents} ref={(e) => {contentRef.current[year+'_'+midx] = e}} onChange={(e) => onChange(e, year, midx)} disabled={item.companyContents ? true : false} />
                </div>
                <div className="btn-wp">
                {item.companyMonth ? (
                  <button className="white-btn" onClick={(e) => onCreate(e, year, midx)}>수정</button>
                ):
                (
                  <button className="gray-btn" onClick={(e) => onCreate(e, year, midx)}>등록</button>
                )
                }
                  <button className="red-btn" onClick={(e) => onDeleteMonthBox(e, year, midx)}>삭제</button>
                </div>
              </li>
            ))}
          </ul>
          
          <button className="add-btn" onClick={(e) => onAddMonthBox(e, year)}>+ 내용추가</button>
        </li>
      ))}
    </>
  );
};

const OutlineForm = () => {
  const [totalCount, setTotalCount] = useState(1);
  const [yearObj, setYearObj] = useState({});
  const [inputs, setInputs] = useState({});
  const yearRef = useRef([]);
  const monthRef = useRef({});
  const dayRef = useRef({});
  const contentRef = useRef({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const outlineList = useSelector((state) => state.outlineReducer.data);

  useEffect(() => {
    dispatch(selectOutline());
  }, dispatch);

  useEffect(() => {
    const onInitBox = () => {
      let yearCountArr = [];
      let yearCount = yearCountArr.slice(-1)[0] ? yearCountArr.slice(-1)[0] : 0;

      let obj = {};
      outlineList.forEach((item, idx) => {
        // if(!Object.keys(obj).includes(item.companyYear)){
        //   yearCountArr.push(yearCount);
        //   yearCount += 1;
        //   obj[item.companyYear] = [];
        // }

        let monthData = {
          companyYear: item.companyYear
          , companyMonth: item.companyMonth
          , companyDay: item.companyDay
          , companyContents: item.companyContents
        }

        if(!Object.keys(obj).includes(item.companyYear)){
          obj[item.companyYear] = [monthData];
        }else{
          obj[item.companyYear].push(monthData);
        }

        // setYearList(object.keys(obj).reverse());
        // setMonthList(object.keys(obj).reverse());
        setYearObj(obj);


      //   let monthForYearCountArr = obj[item.companyYear];
      //   let monthCount = monthForYearCountArr.slice(-1)[0] ? monthForYearCountArr.slice(-1)[0] : 0;
      //   monthForYearCountArr.push(monthForYearCountArr.length);
      //   obj[item.companyYear] = monthForYearCountArr;
      });

      // let monthCountArr = [];
      // Object.keys(obj).forEach((item) => {
      //   monthCountArr.push(obj[item]);
      // });

      // setYearCountList(yearCountArr);
      // setMonthCountList(monthCountArr);
      // setTotalCount(Object.keys(obj).length);

    }

    onInitBox();
    
  }, [outlineList]);

  const onChangeYear = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, 
      [name]: value
    })
  }

  const onChange = (e, year, midx) => {

    const { value, name } = e.target;
    let yObj = {...yearObj};
    let mObj = yObj[year][midx];
    yObj[year][midx] = {...mObj, companyYear: year, [name]: value};
    
    setYearObj(yObj)

  };

  const onCreate = async (e, year, midx) => {
    e.preventDefault();

    const companyYear = yearRef.current[year].value;
    const companyMonth = monthRef.current[year+'_'+midx].value;
    const companyDay = dayRef.current[year+'_'+midx].value;
    const companyContents = contentRef.current[year+'_'+midx].value;

    if (companyYear === '') {
      alert('연도를 입력하세요');
      yearRef.current[year].focus();
      return;
    }
    if (companyMonth === '') {
      alert('월을 입력하세요');
      monthRef.current[year+'_'+midx].focus();
      return;
    }
    if (companyDay === '') {
      alert('일을 입력하세요');
      dayRef.current[year+'_'+midx].focus();
      return;
    }
    if (companyContents === '') {
      alert('내용을 입력하세요');
      contentRef.current[year+'_'+midx].focus();
      return;
    }
    if (window.confirm('등록 하시겠습니까?')) {
      const newList = { companyYear: companyYear, companyMonth: companyMonth, companyDay: companyDay, companyContents: companyContents };
      await dispatch(insertOutline(newList));
      return navigate('/admin/company/outline');
    }
  }
  
  const onAddYearBox = () => {
    let yObj = {...yearObj};
    let newKey = Object.keys(yObj).filter((item) => item.indexOf('new_') > -1).sort();
    let maxNewKeyStr = newKey.slice(-1)[0] ? newKey.slice(-1)[0] : 'new_0';
    let newKeyNo = Number(maxNewKeyStr.substring(4));
    newKeyNo += 1;
    let addNewKeyStr = 'new_'+newKeyNo;
    yObj[addNewKeyStr] = [{
      companyYear: ''
      , companyMonth: ''
      , companyDay: ''
      , companyContents: ''
    }];

    setYearObj(yObj);
    setInputs({});
    setTotalCount(Object.keys(yObj).length);

    // let yearCountArr = [...yearCountList];
    // let monthCountArr = [...monthCountList];
    // let yearCount = yearCountArr.slice(-1)[0] ? yearCountArr.slice(-1)[0] : 0;
    // yearCount += 1;
    // yearCountArr.push(yearCount);
    // monthCountArr.push([0]);
    // setYearCountList(yearCountArr);
    // setMonthCountList(monthCountArr);
    // setTotalCount(totalCount + 1);
  };

  const onDeleteYearBox = (e, year) => {
    e.preventDefault();
    let yObj = {...yearObj};
    delete yObj[year];
    setYearObj(yObj);
    setTotalCount(Object.keys(yObj).length);
    // let countArr = yearCountList.filter((i) => i !== index);
    // let monthCountArr = monthCountList.filter((_, idx) => idx !== index);
    // setYearCountList(countArr);
    // setMonthCountList(monthCountArr);
    // setTotalCount(totalCount - 1);
  };

  const onAddMonthBox = (e, year) => {
    e.preventDefault();
    let yObj = {...yearObj};

    let monthData = {
      companyYear: ''
      , companyMonth: ''
      , companyDay: ''
      , companyContents: ''
    }

    // console.log(yObj);
    yObj[year].push(monthData);

    setYearObj(yObj);

   
    // let monthCountArr = [...monthCountList];
    // let monthForYearCountArr = monthCountArr[index];
    // let monthCount = monthForYearCountArr.slice(-1)[0] ? monthForYearCountArr.slice(-1)[0] : 0;
    // monthCount += 1;
    // monthForYearCountArr.push(monthCount);
    // monthCountArr[index] = monthForYearCountArr;
    // setMonthCountList(monthCountArr);
  }

  const onDeleteMonthBox = (e, year, midx) => {
    e.preventDefault();
    let yObj = {...yearObj};

    if(Object.keys(yObj[year]).length === 1){
      return;
    }

    yObj[year] = yObj[year].filter((i, idx) => idx !== midx);

    setYearObj(yObj);


    // let monthCountArr = [...monthCountList];
    // let monthForYearCountArr = monthCountArr[yidx].filter((i) => i !== mindex);
    // if(monthForYearCountArr.length === 0){
    //   return;
    // }
    // monthCountArr[yidx] = monthForYearCountArr;
    // setMonthCountList(monthCountArr);
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
              onDeleteYearBox={onDeleteYearBox}
              onAddMonthBox={onAddMonthBox}
              onDeleteMonthBox={onDeleteMonthBox}
              onCreate={onCreate}
              onChange={onChange}
              onChangeYear={onChangeYear}
              yearRef={yearRef}
              monthRef={monthRef}
              dayRef={dayRef}
              contentRef={contentRef}
              yearObj={yearObj}
              inputs={inputs}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OutlineForm;
