import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import { ParallaxProvider, Parallax } from 'react-skrollr';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TransportationForm = () => {
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
    <div className="sub sub02-2">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            전기차 충전사업
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
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
                  <NavLink to="/investment/management">투자정보</NavLink>
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
                운수
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/business/ev/transportation" className="on">
                    운수
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business/ev/logitics">물류</NavLink>
                </li>
                <li>
                  <NavLink to="/business/ev/coporate">Corporate</NavLink>
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
              <NavLink to="/business/ev/transportation">운수</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/ev/logitics">물류</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/ev/coporate">Corporate</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business drive">
          <div className="business-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                운수
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="infor-down">
            <div className="wrap">
              <div className="tit-wrap">
                <div className="tit">전기버스 충전 솔루션</div>
                <p>
                  현장상황, 예상 사용량에 맞추어 충전 솔루션을 <br className="pc-block" />
                  제공합니다.
                </p>
              </div>
              <div className="img">
                <ParallaxProvider>
                  <Parallax>
                    <div className="in" data-top-top="background-position: 50% 100%;" data-center-top="background-position:100% 100%;"></div>
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
          </div>
          <div className="system">
            <div className="sys-bg" style={{ 'background-size': 'cover' }}></div>
            <div className="wrap">
              <div className="sys-tit">전기버스 충전 시스템</div>
              <ul>
                <li>
                  <img src="/img/sub/kepco.svg" alt="" />
                </li>
                <li>
                  <img src="/img/sub/e-link.svg" alt="" />
                </li>
                <li>
                  <img src="/img/sub/charge.svg" alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="business-wrap">
            <div className="wrap pb70">
              <div className="infor mt0">
                <div className="infor-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  효율적이고 최적화된 충전인프라 컨설팅
                </div>
                <div className="infor-txt" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                  구축을 위한 설계부터 인허가/시공/운영관리 등 충전인프라 Total solution을 제공합니다.
                </div>
              </div>
              <div className="img img1">
                <ParallaxProvider>
                  <Parallax>
                    <div className="in" data-top-top="background-position: 100% 50%;" data-center-top="background-position:100% 100%;"></div>
                  </Parallax>
                </ParallaxProvider>
              </div>
              <div className="infor">
                <div className="infor-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  LS E-Link만의 관제솔루션 제공
                </div>
                <div className="infor-txt" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                  전기버스 운영 및 정산에 특화 된 관제솔루션을 사용자의 Needs에 맞추어 제공합니다.
                </div>
              </div>
              <div className="img img2">
                <ParallaxProvider>
                  <Parallax>
                    <div className="in" data-top-top="background-position: 100% 50%;" data-center-top="background-position:100% 100%;"></div>
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

export default TransportationForm;
