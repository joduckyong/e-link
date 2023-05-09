import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [familyActive, setFamilyActive] = useState(false);

  const handleOpenNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

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
            <NavLink to="/contactus/consult">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="">EV 충전소</NavLink>
          </li>
        </ul>
        <address>
          <span>ADD</span>(04386) 서울특별시 용산구 한강대로 92, <br class="m-block" />
          LS용산타워 17층 LS E-Link(주)
        </address>

        <ul className="tel">
          <li>
            <span>TEL</span>1660-3175
          </li>
        </ul>
        <ul className="tel">
          <li>대표 : 김대근&nbsp;&nbsp;&nbsp;&nbsp;사업자등록번호 : 744-86-02437</li>
        </ul>
        <div className="bottom">
          <ul className="privacy">
            <li>
              <NavLink to="/policy/privacy">
                <strong>개인정보보호처리방침</strong>
              </NavLink>
            </li>
            <li>
              <NavLink to="/policy/terms">서비스 이용약관</NavLink>
            </li>
            <li>
              <NavLink to="/policy/location">위치기반 서비스 이용약관</NavLink>
            </li>
          </ul>
          <div className={familyActive ? 'fm on' : 'fm'} onClick={() => setFamilyActive(!familyActive)}>
            <NavLink to="">FAMILY SITE</NavLink>
            <ul className="family-link">
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.lsholdings.com/')}>LS그룹</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.e1.co.kr/')}>주식회사 E1</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.lselectric.co.kr/')}>LS ELECTRIC</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.lscns.co.kr/kr/main.asp')}>LS전선(주)</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('http://www.lsmtron.co.kr/page/lsmtronMain.asp?naviId=s01')}>LS엠트론(주)</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('http://www.lsmnm.com/mnm/index.aspx')}>LS MnM</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://gaoncable.com/')}>가온전선(주)</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.yescoholdings.com/main')}>(주)예스코</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.lsnetworks.co.kr/')}>LS네트웍스</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.lsglobalinc.com/')}>LS글로벌</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.ls-ind.co.kr/')}>LS I&D</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.lsmetal.biz/')}>LS Metal</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://lsautomotive.com/')}>LS 오토모티브</NavLink>
              </li>
            </ul>
          </div>
          <p className="copy">ⓒ2023. LS E-Link ALL RIGHT RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
