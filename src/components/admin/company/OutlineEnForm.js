import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectOutline, insertOutline, updateOutline, deleteOutlineIds } from 'store/outlineEnReducer';
import { useEffect } from 'react';

const AddYearBox = ({
  onDeleteYearBox,
  onAddMonthBox,
  onDeleteMonthBox,
  onCreate,
  onEdit,
  onChange,
  onChangeYear,
  yearRef,
  monthRef,
  dayRef,
  contentRef,
  modBtnRef,
  yearObj,
  inputs,
}) => {
  return (
    <>
      {Object.keys(yearObj)
        .reverse()
        .map((year, yidx) => (
          <li key={year} data-yindex={year}>
            <div className="year-hd">
              <NavLink to="" onClick={(e) => onDeleteYearBox(e, year)}>
                <button className="delete">
                  <img src="/img/admin/year-close.png" alt="삭제" />
                </button>
              </NavLink>
              <input
                type="text"
                placeholder="yyyy"
                maxLength="4"
                name={'companyYear' + yidx}
                value={year.indexOf('new_') > -1 ? inputs['companyYear' + yidx] : year}
                ref={(e) => {
                  yearRef.current[year] = e;
                }}
                onChange={(e) => onChangeYear(e)}
                disabled={year.indexOf('new_') > -1 ? false : true}
              />
            </div>
            <ul className="year-bd">
              {yearObj[year].map((item, midx) => (
                <li className="active" key={year + '_' + midx} data-mindex={year + '_' + midx}>
                  <div className="input-wp">
                    <input
                      type="text"
                      placeholder="mm"
                      maxLength="2"
                      name="companyMonth"
                      value={item.companyMonth}
                      ref={(e) => {
                        monthRef.current[year + '_' + midx] = e;
                      }}
                      onChange={(e) => onChange(e, year, midx)}
                      disabled={item.isInserted ? true : false}
                    />
                    <input
                      type="text"
                      placeholder="dd"
                      maxLength="2"
                      name="companyDay"
                      value={item.companyDay}
                      ref={(e) => {
                        dayRef.current[year + '_' + midx] = e;
                      }}
                      onChange={(e) => onChange(e, year, midx)}
                      disabled={item.isInserted ? true : false}
                    />
                    <input
                      type="text"
                      placeholder="내용을 입력해주세요."
                      name="companyContents"
                      value={item.companyContents}
                      ref={(e) => {
                        contentRef.current[year + '_' + midx] = e;
                      }}
                      onChange={(e) => onChange(e, year, midx)}
                      disabled={item.isInserted ? true : false}
                    />
                  </div>
                  <div className="btn-wp">
                    {item.isInserted ? (
                      <button
                        className="white-btn"
                        onClick={(e) => onEdit(e, year, midx, item.companyId)}
                        ref={(e) => {
                          modBtnRef.current[year + '_' + midx] = e;
                        }}
                      >
                        수정
                      </button>
                    ) : (
                      <button className="gray-btn" onClick={(e) => onCreate(e, year, midx)}>
                        등록
                      </button>
                    )}
                    <button className="red-btn" onClick={(e) => onDeleteMonthBox(e, year, midx)}>
                      삭제
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <button className="add-btn" onClick={(e) => onAddMonthBox(e, year)}>
              + 내용추가
            </button>
          </li>
        ))}
    </>
  );
};

const OutlineEnForm = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [yearObj, setYearObj] = useState({});
  const [inputs, setInputs] = useState({});
  const yearRef = useRef([]);
  const monthRef = useRef({});
  const dayRef = useRef({});
  const contentRef = useRef({});
  const modBtnRef = useRef([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const outlineList = useSelector((state) => state.outlineEnReducer.data);
  // const totalCount = useSelector((state) => state.boardReducer.totalCount);

  useEffect(() => {
    dispatch(selectOutline());
  }, [dispatch]);

  useEffect(() => {
    const onInitBox = () => {
      let obj = {};
      outlineList.forEach((item, idx) => {
        let monthData = {
          companyId: item.companyId,
          companyYear: item.companyYear,
          companyMonth: item.companyMonth,
          companyDay: item.companyDay,
          companyContents: item.companyContents,
          isInserted: true,
        };

        if (!Object.keys(obj).includes(item.companyYear)) {
          obj[item.companyYear] = [monthData];
        } else {
          obj[item.companyYear].push(monthData);
        }
        setYearObj(obj);
      });

      setTotalCount(outlineList.length);
    };

    onInitBox();
  }, [outlineList]);

  const onChangeYear = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onChange = (e, year, midx) => {
    const { value, name } = e.target;
    let yObj = { ...yearObj };
    let mObj = yObj[year][midx];
    yObj[year][midx] = { ...mObj, companyYear: year, [name]: value };

    setYearObj(yObj);
  };

  const onCreate = (e, year, midx) => {
    e.preventDefault();

    const companyYear = yearRef.current[year].value;
    const companyMonth = monthRef.current[year + '_' + midx].value;
    const companyDay = dayRef.current[year + '_' + midx].value;
    const companyContents = contentRef.current[year + '_' + midx].value;

    if (companyYear === '') {
      alert('연도를 입력하세요');
      yearRef.current[year].focus();
      return;
    }
    if (companyMonth === '') {
      alert('월을 입력하세요');
      monthRef.current[year + '_' + midx].focus();
      return;
    }
    if (companyDay === '') {
      alert('일을 입력하세요');
      dayRef.current[year + '_' + midx].focus();
      return;
    }
    if (companyContents === '') {
      alert('내용을 입력하세요');
      contentRef.current[year + '_' + midx].focus();
      return;
    }
    if (window.confirm('등록 하시겠습니까?')) {
      const newList = { companyYear: companyYear, companyMonth: companyMonth, companyDay: companyDay, companyContents: companyContents };
      dispatch(insertOutline(newList)).then(() => {
        dispatch(selectOutline());
      });
    }
  };

  const onEdit = async (e, year, midx, companyId) => {
    e.preventDefault();

    if (modBtnRef.current[year + '_' + midx].className === 'white-btn') {
      monthRef.current[year + '_' + midx].disabled = false;
      dayRef.current[year + '_' + midx].disabled = false;
      contentRef.current[year + '_' + midx].disabled = false;
      modBtnRef.current[year + '_' + midx].className = 'gray-btn';
      return;
    }

    const companyYear = yearRef.current[year].value;
    const companyMonth = monthRef.current[year + '_' + midx].value;
    const companyDay = dayRef.current[year + '_' + midx].value;
    const companyContents = contentRef.current[year + '_' + midx].value;

    if (companyYear === '') {
      alert('연도를 입력하세요');
      yearRef.current[year].focus();
      return;
    }
    if (companyMonth === '') {
      alert('월을 입력하세요');
      monthRef.current[year + '_' + midx].focus();
      return;
    }
    if (companyDay === '') {
      alert('일을 입력하세요');
      dayRef.current[year + '_' + midx].focus();
      return;
    }
    if (companyContents === '') {
      alert('내용을 입력하세요');
      contentRef.current[year + '_' + midx].focus();
      return;
    }
    if (window.confirm('수정 하시겠습니까?')) {
      const newList = {
        companyId: companyId,
        companyYear: companyYear,
        companyMonth: companyMonth,
        companyDay: companyDay,
        companyContents: companyContents,
      };
      await dispatch(updateOutline(newList));
      monthRef.current[year + '_' + midx].disabled = true;
      dayRef.current[year + '_' + midx].disabled = true;
      contentRef.current[year + '_' + midx].disabled = true;
      modBtnRef.current[year + '_' + midx].className = 'white-btn';
      return navigate('/admin/company/outlineEn');
    }
  };

  const onAddYearBox = () => {
    let yObj = { ...yearObj };
    let newKey = Object.keys(yObj)
      .filter((item) => item.indexOf('new_') > -1)
      .sort();
    let maxNewKeyStr = newKey.slice(-1)[0] ? newKey.slice(-1)[0] : 'new_0';
    let newKeyNo = Number(maxNewKeyStr.substring(4));
    newKeyNo += 1;
    let addNewKeyStr = 'new_' + newKeyNo;
    yObj[addNewKeyStr] = [
      {
        companyYear: '',
        companyMonth: '',
        companyDay: '',
        companyContents: '',
      },
    ];

    setYearObj(yObj);
    setInputs({});
    // setTotalCount(Object.keys(yObj).length);
  };

  const onDeleteYearBox = (e, year) => {
    e.preventDefault();
    if (window.confirm('삭제 하시겠습니까?')) {
      let checkItems = [];
      let yObj = { ...yearObj };
      yObj[year].forEach((item) => {
        checkItems.push(item.companyId);
      });

      if (checkItems[0]) {
        //DB에 저장된 데이터 삭제
        const newList = { ids: checkItems };

        dispatch(deleteOutlineIds(newList)).then(() => {
          dispatch(selectOutline());
        });
      } else {
        //DB에 저장 안된 상태에서는 화면에서 행만 삭제
        delete yObj[year];
        setYearObj(yObj);
      }
    }
  };

  const onAddMonthBox = (e, year) => {
    e.preventDefault();
    let yObj = { ...yearObj };

    let monthData = {
      companyYear: '',
      companyMonth: '',
      companyDay: '',
      companyContents: '',
    };

    yObj[year].push(monthData);

    setYearObj(yObj);
  };

  const onDeleteMonthBox = (e, year, midx) => {
    e.preventDefault();
    let yObj = { ...yearObj };

    if (window.confirm('삭제 하시겠습니까?')) {
      if (Object.keys(yObj[year]).length === 1) {
        return;
      }

      let checkItems = [yObj[year][midx].companyId];

      if (checkItems[0]) {
        //DB에 저장된 데이터 삭제
        const newList = { ids: checkItems };

        dispatch(deleteOutlineIds(newList)).then(() => {
          dispatch(selectOutline());
        });
      } else {
        //DB에 저장 안된 상태에서는 화면에서 행만 삭제
        yObj[year] = yObj[year].filter((i, idx) => idx !== midx);
        setYearObj(yObj);
      }
    }
  };

  return (
    <div className="a-content">
      <ul className="sub-tab">
        <li>
          <Link to="/admin/company/outline">국문</Link>
        </li>
        <li className="active">
          <Link to="/admin/company/outlineEn">영문</Link>
        </li>
      </ul>
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
              onEdit={onEdit}
              onChange={onChange}
              onChangeYear={onChangeYear}
              yearRef={yearRef}
              monthRef={monthRef}
              dayRef={dayRef}
              contentRef={contentRef}
              modBtnRef={modBtnRef}
              yearObj={yearObj}
              inputs={inputs}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OutlineEnForm;
