import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [familyActive, setFamilyActive] = useState(false);

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
          <div className={familyActive ? 'fm on' : 'fm'} onClick={() => setFamilyActive(!familyActive)}>
            <NavLink to="">FAMILY SITE</NavLink>
            <ul className="family-link">
              <li>
                <NavLink to="https://www.lsholdings.com/" target="_blank">
                  LS그룹
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.e1.co.kr/" target="_blank">
                  주식회사 E1
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.lselectric.co.kr/" target="_blank">
                  LS ELECTRIC
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.lscns.co.kr/kr/main.asp" target="_blank">
                  LS전선(주)
                </NavLink>
              </li>
              <li>
                <NavLink to="http://www.lsmtron.co.kr/page/lsmtronMain.asp?naviId=s01" target="_blank">
                  LS엠트론(주)
                </NavLink>
              </li>
              <li>
                <NavLink to="http://www.lsmnm.com/mnm/index.aspx" target="_blank">
                  LS MnM
                </NavLink>
              </li>
              <li>
                <NavLink to="https://gaoncable.com/" target="_blank">
                  가온전선(주)
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.yescoholdings.com/main" target="_blank">
                  (주)예스코
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.lsnetworks.co.kr/" target="_blank">
                  LS네트웍스
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.lsglobalinc.com" target="_blank">
                  LS글로벌
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.ls-ind.co.kr" target="_blank">
                  LS I&D
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.lsmetal.biz/" target="_blank">
                  LS Metal
                </NavLink>
              </li>
              <li>
                <NavLink to="https://lsautomotive.com/" target="_blank">
                  LS 오토모티브
                </NavLink>
              </li>
            </ul>
          </div>
          <p className="copy">COPYRIGHT ⓒ LS E-Link. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
