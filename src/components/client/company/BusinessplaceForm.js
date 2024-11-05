import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BusinessplaceForm = () => {
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
    <div className="sub sub01-5">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            사업장 안내
          </h2>
          <ul
            className="path"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <li>
              <NavLink to="/">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                회사소개
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/company/lselink" className="on">
                    회사소개
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/evcharge">사업영역</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/financial">
                    투자정보 & 홍보센터
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/pr/press-list">홍보센터</NavLink>
                </li> */}
                <li>
                  <NavLink to="/recruit/people">채용정보</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/consult">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/ev/login">EV 충전소</NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                사업장 안내
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/company/lselink">LS E-Link</NavLink>
                </li>
                <li>
                  <NavLink to="/company/vision">비전</NavLink>
                </li>
                <li>
                  <NavLink to="/company/history">연혁</NavLink>
                </li>
                <li>
                  <NavLink to="/company/identity">CI·BI</NavLink>
                </li>
                <li>
                  <NavLink to="/company/businessplace" className="on">
                    사업장 안내
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="wrap">
          <div className="company-infor">
            <h3
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              본사
            </h3>
            <div className="txt">
              <dl
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <dt>위치</dt>
                <dd>
                  서울시 용산구 한강대로 92
                  <br />
                  (한강로2가, LS용산타워)
                </dd>
              </dl>
              <dl
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <dt>전화</dt>
                <dd>1660-3175</dd>
              </dl>
            </div>
            <div
              className="img"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <img src="/img/sub/company.jpg" alt="" />
            </div>
          </div>
          <div className="line_company">
            <div className="company-infor">
              <h3
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                자회사
              </h3>
              <div className="txt">
                <dl
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <dt>에스이모빌리티</dt>
                  <dd>위치 : 경기도 수원시 권선구 세화로 220</dd>
                </dl>
              </div>
              <div
                className="img"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <img src="/img/sub/company2.jpg" alt="" />
              </div>
            </div>
            <div className="company-infor">
              <div className="txt">
                <dl
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <dt>에너지링크울산</dt>
                  <dd>위치 : 울산광역시 울주군 청량읍 온산로 545</dd>
                </dl>
              </div>
              <div
                className="img"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <img src="/img/sub/company3.jpg" alt="" />
              </div>
            </div>
            <div className="company-infor">
              <div className="txt">
                <dl
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <dt>에너지링크나주</dt>
                  <dd>위치 : 전라남도 나주시 왕곡면 영산포로 30-9</dd>
                </dl>
              </div>
              <div
                className="img"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <img src="/img/sub/company4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessplaceForm;
