import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  EffectFade,
  Pagination,
  Autoplay,
} from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, EffectFade, Pagination, Autoplay]); // Swiper

const RenewableForm = () => {
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
            <li className="swiper-slide">
              <NavLink to="/business/e-link/evcharge">
                B2B 특화 전기차 충전 사업
              </NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/e-link/control">관제시스템</NavLink>
            </li>
            <li className="swiper-slide on">
              <NavLink to="/business/e-link/renewable">차세대 모빌리티</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business energy">
          <div className="business-wrap">
            <div className="wrap">
              <h3
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                차세대 모빌리티
              </h3>
              <div className="infor mt0 mb75">
                <div
                  className="infor-tit mb0"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  대용량 배터리, 대규모 전력을 사용하는 B2B EV충전 시장과 동일한
                  특징을 가진 차세대 모빌리티로 충전사업을 확장합니다.<br/>
                  LS E-Link는 UAM, 항만장비 (YT, RS, AGV), 전기선박 등 다양한 차세대 모빌리티에 맞춘 충전인프라를 구축 및 운영하고 있습니다.
                </div>
              </div>
            </div>
          </div>
          <div className="bg"></div>
        </div>
      </div>

      <div className="renewable-infor">
        <Swiper
          effect={'fade'}
          loop={true}
          autoplay={{ delay: 2000 }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div
              className="img"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <div
                className="bg"
                data-top-top="background-position: 50% 50%;"
                data-center-top="background-position:100% 50%;"
              ></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="img img2"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <div
                className="bg"
                data-top-top="background-position: 50% 50%;"
                data-center-top="background-position:100% 50%;"
              ></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="img img3"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <div
                className="bg"
                data-top-top="background-position: 50% 50%;"
                data-center-top="background-position:100% 50%;"
              ></div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
        <br/><br/>
    </div>
  );
};

export default RenewableForm;
