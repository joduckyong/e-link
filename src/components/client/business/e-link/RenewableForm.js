import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RenewableForm = () => {
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
              <NavLink to="">신재생 에너지사업</NavLink>
              <ul className="links">
                <li>
                  <NavLink to="/business/e-link/evcharge">전기차 충전사업</NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/control">관제시스템</NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/renewable" className="on">
                    신재생 에너지사업
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
            <li className="swiper-slide">
              <NavLink to="/business/e-link/evcharge">전기차 충전</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/e-link/control">관제시스템 구축</NavLink>
            </li>
            <li className="swiper-slide on">
              <NavLink to="/business/e-link/renewable">신재생에너지 융합형 충전 인프라 구축</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business energy">
          <div className="business-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                신재생에너지 융합형 충전 인프라 구축
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="business-wrap pb0">
            <div className="wrap pb70">
              <div className="infor mt0 mb0">
                <div className="infor-tit mb0" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  전기차 충전장 또는 건물 옥상부 등에 태양광 발전 시설을 구축, 부대수익 창출은 물론,
                  <br className="pc-block" />
                  미래 분산 전원 시대를 선제적으로 대응합니다.
                </div>
              </div>
            </div>
            <div className="img out-img">
              <div className="in" style={{ 'background-size': 'cover' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewableForm;
