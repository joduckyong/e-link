import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import { ParallaxProvider, Parallax } from 'react-skrollr';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EvchargeForm = () => {
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
    <div className="sub sub02-1-1">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            E-Link
            <br class="m-block" /> BUSINESS
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
                사업영역
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/company/lselink">회사소개</NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/evcharge" className="on">
                    사업영역
                  </NavLink>
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
                E-Link BUSINESS
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/business/e-link/evcharge" className="on">
                    E-Link BUSINESS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business/ev/transportation">
                    전기차 충전사업
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business/renewable/renewable">
                    스마트 전력 신사업
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-slide-wrap">
        <div className="nav-slide">
          <ul className="swiper-wrapper">
            <li className="swiper-slide on">
              <NavLink to="/business/e-link/evcharge" className="on">
                B2B 특화 전기차 충전 사업
              </NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/e-link/control">관제시스템</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/e-link/renewable">차세대 모빌리티</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business electronic-car">
          <div className="business-wrap">
            <div className="wrap">
              <h3
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                B2B 특화 전기차 충전 사업
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="business-wrap business-infor">
            <div className="wrap pb70">
              <div className="infor mt0">
                <div
                  className="infor-tit"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  B2B 특화 전기차 충전 사업자
                </div>
                <div
                  className="infor-txt"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  LS그룹의 축적된 전기 기술력을 바탕으로 고전압 대용량 운영에
                  최적화된 충전 솔루션 및 배터리 관리 서비스를 제공합니다.
                  <br />
                  고객의 EV전환 시기에 맞춘 충전인프라 투자로 CAPEX를 최소화
                  하고 운행스케줄을 연계한 충전량 제어로 전기 기본료와 사용료를
                  낮추어 안정적 운영 및 수익성 극대화가 가능합니다.
                </div>
              </div>
              <div className="img img1">
                <ParallaxProvider>
                  <Parallax>
                    <div
                      className="in"
                      data-top-top="background-position: 100% 50%;"
                      data-center-top="background-position:100% 100%;"
                    ></div>
                  </Parallax>
                </ParallaxProvider>
              </div>
              <div className="infor">
                <div
                  className="infor-tit"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  충전 인프라 구축, 위탁운영 사업
                </div>
                <div
                  className="infor-txt"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  사업성 검토, 인허가, 인프라 구축, 운영 및 Financing까지 Total
                  Solution을 제공합니다.
                </div>
              </div>
              <div className="img img2">
                <ParallaxProvider>
                  <Parallax>
                    <div
                      className="in"
                      data-top-top="background-position: 100% 50%;"
                      data-center-top="background-position:100% 100%;"
                    ></div>
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvchargeForm;
