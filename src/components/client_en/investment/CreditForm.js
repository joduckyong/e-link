import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientBoard } from 'store/boardEnReducer';
import AOS from 'aos';
import classnames from 'classnames';
import Pagination from 'react-js-pagination';

const CreditForm = () => {
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
    const newList = { boardId: 'OFF', pageIndex: page, searchKeyword: searchKeyword, searchCondition: 'year' };
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

  const dartPopup = (url) => {
    window.open(url, 'width=430,height=500,location=no,status=no,scrollbars=yes', '_blank');
  };

  return (
    <div className="sub sub03">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            공시정보
          </h2>
          <p data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            정보제공 : 금융감독원 DART
          </p>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            <li>
              <NavLink to="/">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                투자정보
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/company/lselink">회사소개</NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/evcharge">사업영역</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/management" className="on">
                    투자정보
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pr/press-list">홍보센터</NavLink>
                </li>
                <li>
                  <NavLink to="/recruit/people">채용정보</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="">EV 충전소</NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                공시정보
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/investment/management">경영정보</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/financial">재무정보</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/credit" className="on">
                    공시정보
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/investment/announce">공고</NavLink>
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
                <NavLink onClick={() => dartPopup(list.url)}>
                  <div className="list-num">
                    <span>No.{boardList.totalCount - (list.rnum - 1)}</span>
                    {list.createdDatetime}
                  </div>
                  <div className="tit-wrap">
                    <div className="tit-wrap">{list.boardTitle}</div>
                  </div>
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

export default CreditForm;
