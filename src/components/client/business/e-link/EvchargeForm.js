import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EvchargeForm = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="sub sub02-1-1">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            E-Link Business
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            <li>
              <NavLink to="/">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="">사업영역</NavLink>
              <ul className="links">
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
            <li className="on link">
              <NavLink to="">전기차 충전사업</NavLink>
              <ul className="links">
                <li>
                  <NavLink to="/business/e-link/evcharge" className="on">
                    전기차 충전사업
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/control">관제시스템</NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/renewable">신재생 에너지사업</NavLink>
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
              <NavLink to="/business/e-link/evcharge">전기차 충전</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/e-link/control">관제시스템 구축</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/e-link/renewable">신재생에너지 융합형 충전 인프라 구축</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business electronic-car">
          <div className="business-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                전기차 충전 사업
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="business-wrap">
            <div className="wrap pb70">
              <div className="infor mt0">
                <div className="infor-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  전기차 충전 사업자
                </div>
                <div className="infor-txt" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                  최적의 충전 인프라 구축을 통한 안정적인 충전서비스 제공은 물론, 경쟁력 있는 가격으로
                  <br className="pc-block" />
                  전력을 공급합니다.
                </div>
              </div>
              <div className="img img1">
                <div className="in" data-top-top="background-position: 100% 50%;" data-center-top="background-position:100% 100%;"></div>
              </div>
              <div className="infor">
                <div className="infor-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  충전 인프라 구축, 위탁운영 사업
                </div>
                <div className="infor-txt" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                  충전설비 자체 구축을 통한 충전 사업을 직접 운영를 원하시는 고객에게 인허가부터
                  <br className="pc-block" />
                  충전인프라 구축 서비스와 운영시스템 제공을 통해 안정적인 사업구조 수립을 도와드립니다.
                </div>
              </div>
              <div className="img img2">
                <div className="in" data-top-top="background-position: 100% 50%;" data-center-top="background-position:100% 100%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvchargeForm;
