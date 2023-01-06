import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';

const CreditForm = () => {
  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);

  useEffect(() => {
    AOS.init();
  });

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
              Total <strong>59</strong> / 5 Page
            </p>
            <select name="" id="">
              <option value="">2022</option>
            </select>
          </div>
          <ul className="con3-list-box">
            <li>
              <NavLink to="">
                <div className="list-num">
                  <span>No.14</span>2022-11-30
                </div>
                <div className="tit-wrap">
                  20221130000173<span className="tit">특수관계인으로부터 자금차입</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <div className="list-num">
                  <span>No.14</span>2022-11-30
                </div>
                <div className="tit-wrap">
                  20221130000173<span className="tit">특수관계인으로부터 자금차입</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <div className="list-num">
                  <span>No.14</span>2022-11-30
                </div>
                <div className="tit-wrap">
                  20221130000173<span className="tit">특수관계인으로부터 자금차입</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <div className="list-num">
                  <span>No.14</span>2022-11-30
                </div>
                <div className="tit-wrap">
                  20221130000173<span className="tit">특수관계인으로부터 자금차입</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <div className="list-num">
                  <span>No.14</span>2022-11-30
                </div>
                <div className="tit-wrap">
                  20221130000173<span className="tit">특수관계인으로부터 자금차입</span>
                </div>
              </NavLink>
            </li>
          </ul>
          <div className="paging">
            <NavLink to="" className="prev-btn">
              <i></i>
              <span className="text_blind">이전</span>
            </NavLink>
            <ul>
              <li className="current">
                <NavLink to="">1</NavLink>
              </li>
              <li>
                <NavLink to="">2</NavLink>
              </li>
              <li>
                <NavLink to="">3</NavLink>
              </li>
              <li>
                <NavLink to="">4</NavLink>
              </li>
              <li>
                <NavLink to="">5</NavLink>
              </li>
            </ul>
            <NavLink to="" className="next-btn">
              <i></i>
              <span className="text_blind">다음</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditForm;
