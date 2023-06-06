import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientBoard } from 'store/boardEnReducer';
import AOS from 'aos';
import classnames from 'classnames';
import Pagination from 'react-js-pagination';

const AnnounceForm = () => {
  const now = new Date();
  let years = [];
  for (let y = now.getFullYear(); y >= 2022; y -= 1) {
    years.push(y);
  }

  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.boardEnReducer);
  const [searchKeyword, setSearchKeyword] = useState(now.getFullYear());
  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    const newList = { boardId: 'ANN', pageIndex: page, searchKeyword: searchKeyword, searchCondition: 'year' };
    dispatch(selectClientBoard(newList));
  }, [dispatch, page, searchKeyword]);

  // 페이징
  const pageClick = (page) => {
    setPage(page);
  };

  // 검색
  const handleSelect = (e) => {
    setSearchKeyword(e.target.value);
  };

  const onClickMenuLink = (menu) => {
    if (menu === '1') {
      setActiveMenu1(!activeMenu1);
      setActiveMenu2(false);
    } else if (menu === '2') {
      setActiveMenu1(false);
      setActiveMenu2(!activeMenu2);
    }
  };

  return (
    <div className="sub sub03">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            Announcement
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            <li>
              <NavLink to="/en">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                IR Center
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/en/company/lselink">
                    Company
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/e-link/evcharge">Business</NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/management" className="on">IR Center</NavLink>
                </li>
                <li>
                  <NavLink to="/en/pr/press-list">PR Center</NavLink>
                </li>
                <li>
                  <NavLink to="/en/recruit/people">Recruitment</NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus">Contact Us</NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                Announcement
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/investment/management">
                    Management Information
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/financial">Financial Information</NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/credit">Disclosure Information</NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/announce" className="on">Announcement</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="wrap">
          <div className="list-top">
            <p className="t-ver">
              Total <strong>{boardList.totalCount}</strong> / {page} Page
            </p>
            <select onChange={handleSelect} value={searchKeyword}>
              {years.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <ul className="con3-list-box">
            {boardList.data.map((list, index) => (
              <li key={index}>
                <NavLink to={`/en/investment/announce-view/${list.boardId}`}>
                  <div className="list-num">
                    <span>No.{boardList.totalCount - (list.rnum - 1)}</span>
                    {list.createdDatetime}
                  </div>
                  <div className="tit-wrap">{list.boardTitle}</div>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="paging">
            <Pagination
              activePage={page}
              itemsCountPerPage={10}
              totalItemsCount={boardList.totalCount}
              pageRangeDisplayed={10}
              prevPageText={'‹'}
              nextPageText={'›'}
              onChange={pageClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnounceForm;
