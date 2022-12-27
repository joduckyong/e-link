import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="lnb">
      <div className="in">
        <span className="admin-tit">Admin</span>
        <h1>
          <img src="/img/common/logo.svg" alt="" />
        </h1>
        <ul className="menu-list">
          <li className="on">
            <NavLink to="/admin/main/popup">메인페이지</NavLink>
            <ul>
              <li className="on">
                <NavLink to="/admin/main/popup" className="on">
                  팝업 관리
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="on">
            <NavLink to="">투자정보</NavLink>
            <ul>
              <li>
                <NavLink to="/admin/investInfo/officialNotice">공시정보</NavLink>
              </li>
              <li>
                <NavLink to="/admin/investInfo/announce">공고</NavLink>
              </li>
            </ul>
          </li>
          <li className="on">
            <NavLink to="">홍보센터</NavLink>
            <ul>
              <li>
                <NavLink to="/admin/publicRelations/pressRelease">보도자료</NavLink>
              </li>
              <li>
                <NavLink to="/admin/publicRelations/media">미디어</NavLink>
              </li>
            </ul>
          </li>
          <li className="on">
            <NavLink to="">채용정보</NavLink>
            <ul>
              <li>
                <NavLink to="/admin/employmentInfo/jobVacancy">채용공고 관리</NavLink>
              </li>
            </ul>
          </li>
          <li className="on">
            <NavLink to="">고객센터</NavLink>
            <ul>
              <li>
                <NavLink to="/admin/customerService/contactUs">Contact Us</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="user-area">
        <div className="in">
          <p>안녕하세요.</p>
          <p>
            <b>LS-E Link</b>님<span>(admin)</span>
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
