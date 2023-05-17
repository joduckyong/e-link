import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const handleOnClick = useCallback((e, nm) => {
    localStorage.setItem('menuNm', nm);
  }, []);

  return (
    <div className="lnb">
      <div className="in">
        <span className="admin-tit">Admin</span>
        <h1>
          <img src="/img/common/logo.svg" alt="" />
        </h1>
        <ul className="menu-list">
          <li className={(localStorage.getItem('menuNm') === 'POP' || localStorage.getItem('menuNm') === null) && 'on'}>
            <NavLink to="/admin/main/popup" onClick={(e) => handleOnClick(e, 'POP')}>
              메인페이지
            </NavLink>
            <ul>
              <li className={(localStorage.getItem('menuNm') === 'POP' || localStorage.getItem('menuNm') === null) && 'on'}>
                <NavLink to="/admin/main/popup" onClick={(e) => handleOnClick(e, 'POP')}>
                  팝업 관리
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={localStorage.getItem('menuNm') === 'COM' && 'on'}>
            <NavLink to="/admin/company/outline" onClick={(e) => handleOnClick(e, 'COM')}>
              회사소개
            </NavLink>
            <ul>
              <li className={localStorage.getItem('menuNm') === 'COM' && 'on'}>
                <NavLink to="/admin/company/outline" onClick={(e) => handleOnClick(e, 'COM')}>
                  연혁
                </NavLink>
              </li>
            </ul>
          </li>
          <li
            className={
              (localStorage.getItem('menuNm') === 'FIN' || localStorage.getItem('menuNm') === 'OFF' || localStorage.getItem('menuNm') === 'ANN') &&
              'on'
            }
          >
            <NavLink to="/admin/investInfo/financial" onClick={(e) => handleOnClick(e, 'FIN')}>
              투자정보
            </NavLink>
            <ul>
              <li className={localStorage.getItem('menuNm') === 'FIN' && 'on'}>
                <NavLink to="/admin/investInfo/financial" onClick={(e) => handleOnClick(e, 'FIN')}>
                  재무정보
                </NavLink>
              </li>
              <li className={localStorage.getItem('menuNm') === 'OFF' && 'on'}>
                <NavLink to="/admin/investInfo/officialNotice" onClick={(e) => handleOnClick(e, 'OFF')}>
                  공시정보
                </NavLink>
              </li>
              <li className={localStorage.getItem('menuNm') === 'ANN' && 'on'}>
                <NavLink to="/admin/investInfo/announce" onClick={(e) => handleOnClick(e, 'ANN')}>
                  공고
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={(localStorage.getItem('menuNm') === 'PRE' || localStorage.getItem('menuNm') === 'MED') && 'on'}>
            <NavLink to="/admin/publicRelations/pressRelease" onClick={(e) => handleOnClick(e, 'PRE')}>
              홍보센터
            </NavLink>
            <ul>
              <li className={localStorage.getItem('menuNm') === 'PRE' && 'on'}>
                <NavLink to="/admin/publicRelations/pressRelease" onClick={(e) => handleOnClick(e, 'PRE')}>
                  보도자료
                </NavLink>
              </li>
              <li className={localStorage.getItem('menuNm') === 'MED' && 'on'}>
                <NavLink to="/admin/publicRelations/media" onClick={(e) => handleOnClick(e, 'MED')}>
                  미디어
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={localStorage.getItem('menuNm') === 'JOB' && 'on'}>
            <NavLink to="/admin/employmentInfo/jobVacancy" onClick={(e) => handleOnClick(e, 'JOB')}>
              채용정보
            </NavLink>
            <ul>
              <li className={localStorage.getItem('menuNm') === 'JOB' && 'on'}>
                <NavLink to="/admin/employmentInfo/jobVacancy" onClick={(e) => handleOnClick(e, 'JOB')}>
                  채용공고 관리
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={localStorage.getItem('menuNm') === 'CON' && 'on'}>
            <NavLink to="/admin/customerService/contactUs" onClick={(e) => handleOnClick(e, 'CON')}>
              고객센터
            </NavLink>
            <ul>
              <li className={localStorage.getItem('menuNm') === 'CON' && 'on'}>
                <NavLink to="/admin/customerService/contactUs" onClick={(e) => handleOnClick(e, 'CON')}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={localStorage.getItem('menuNm') === 'MGM' && 'on'}>
            <NavLink to="/admin/role/mgmt" onClick={(e) => handleOnClick(e, 'MGM')}>
              관리자권한
            </NavLink>
            <ul>
              <li className={localStorage.getItem('menuNm') === 'MGM' && 'on'}>
                <NavLink to="/admin/role/mgmt" onClick={(e) => handleOnClick(e, 'MGM')}>
                  전체 관리자 목록
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="user-area">
        <div className="in">
          <p>안녕하세요.</p>
          <p>
            <b>{localStorage.getItem('tadminNm')}</b>님<span>({localStorage.getItem('tadminId')})</span>
          </p>
          <ul>
            <li>
              <NavLink to="/admin/logout">
                <img src="/img/admin/ico-logout.png" alt="" />
                로그아웃
              </NavLink>
            </li>
            <li>
              <NavLink to="/" target="_blank">
                <img src="/img/admin/ico-home.png" alt="" />
                홈페이지 바로가기
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
