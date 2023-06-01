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
            <NavLink to="/en/company/lselink">Company</NavLink>
          </li>
          <li>
            <NavLink to="/en/business/e-link/evcharge">Business</NavLink>
          </li>
          <li>
            <NavLink to="/en/investment/credit">IR Center</NavLink>
          </li>
          <li>
            <NavLink to="/en/pr/press-list">PR Center</NavLink>
          </li>
          <li>
            <NavLink to="/en/recruit/people">Recruitment</NavLink>
          </li>
          <li>
            <NavLink to="/en/contactus/consult">Contact Us</NavLink>
          </li>
        </ul>
        <address>
          <span>ADD</span>LS E-Link. 17F, LS Yongsan Tower, 92 Hangang-daero, <br class="m-block" />
          Yongsan-gu, Seoul, 04386, Korea
        </address>

        <ul className="tel">
          <li>
            <span>TEL</span>1660-3175
          </li>
        </ul>
        <ul className="tel">
          <li><span>CEO</span> : Kim, Daeguen&nbsp;&nbsp;&nbsp;&nbsp;<span>Business Reg.No :</span> 744-86-02437</li>
        </ul>
        <div className="bottom">
          <ul className="privacy">
            <li>
              <NavLink to="/en/policy/privacy">
                <strong>Privacy Policy</strong>
              </NavLink>
            </li>
            <li>
              <NavLink to="/en/policy/terms">Terms of Service</NavLink>
            </li>
            <li>
              <NavLink to="/en/policy/location">Terms of Use for Location-Based Services</NavLink>
            </li>
          </ul>
          <div className={familyActive ? 'fm on' : 'fm'} onClick={() => setFamilyActive(!familyActive)}>
            <NavLink to="">FAMILY SITE</NavLink>
            <ul className="family-link">
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.lsholdings.com/')}>LS Group</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.e1.co.kr/')}>E1 Co.,Ltd.</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.lselectric.co.kr/')}>LS ELECTRIC</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.lscns.co.kr/kr/main.asp')}>LS C&S Co.,Ltd.</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('http://www.lsmtron.co.kr/page/lsmtronMain.asp?naviId=s01')}>LS Mtron Co.,Ltd.</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('http://www.lsmnm.com/mnm/index.aspx')}>LS MnM</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://gaoncable.com/')}>GAON Cable Co.,Ltd.</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.yescoholdings.com/main')}>YESCO Co.,Ltd.</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.lsnetworks.co.kr/')}>LS Networks</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.lsglobalinc.com/')}>LS Global</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.ls-ind.co.kr/')}>LS I&D</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://www.lsmetal.biz/')}>LS Metal</NavLink>
              </li>
              <li>
                <NavLink onClick={() => handleOpenNewTab('https://lsautomotive.com/')}>LS Automotive</NavLink>
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
