import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <ul className="menu">
          <li>
            <NavLink to="/company/lselink">회사소개</NavLink>
          </li>
          <li>
            <NavLink to="/business/e-link/evcharge">사업영역</NavLink>
          </li>
          <li>
            <NavLink to="/investment/credit">투자정보</NavLink>
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
        <address>서울특별시 용산구 한강대로 92, LS용산타워 17층 LS E-Link</address>
        <ul className="tel">
          <li>
            <span>TEL</span>1660-3175
          </li>
          <li>
            <span>FAX</span>0000-0000
          </li>
        </ul>
        <div className="bottom">
          <ul className="privacy">
            <li>
              <NavLink to="">
                <strong>개인정보처리방침</strong>
              </NavLink>
            </li>
            <li>
              <NavLink to="">이메일무단수집거부</NavLink>
            </li>
            <li>
              <NavLink to="">사이버신문고</NavLink>
            </li>
            <li>
              <NavLink to="">사이트맵</NavLink>
            </li>
          </ul>
          <NavLink to="" className="fm">
            FAMILY SITE
          </NavLink>
          <p className="copy">ⓒ LS E-Link. ALL RIGHT RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
