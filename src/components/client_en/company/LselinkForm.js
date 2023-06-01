import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
// import { ParallaxProvider, Parallax } from 'react-skrollr';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFade, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, EffectFade, Pagination, Autoplay]); // Swiper

const LselinkForm = () => {
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
    <div className="sub sub01-1">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            LS E-Link <br className="m-block" />
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            <li>
              <NavLink to="/">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                Company
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/en/company/lselink" className="on">
                    Company
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/e-link/evcharge">Business</NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/management">IR Center</NavLink>
                </li>
                <li>
                  <NavLink to="/en/pr/press-list">PR Center</NavLink>
                </li>
                <li>
                  <NavLink to="/en/recruit/people">Recruitment</NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus">Contact Us</NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                LS E-Link
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/company/lselink" className="on">
                    LS E-Link
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/vision">Vision</NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/history">History</NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/identity">CI·BI</NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/businessplace">Locations</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="wrap">
          <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            Welcome to the LS E-Link website.
          </h3>

          <div className="company-infor">
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
                <div className="img" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="bg" data-top-top="background-position: 50% 50%;" data-center-top="background-position:100% 50%;"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img img2" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="bg" data-top-top="background-position: 50% 50%;" data-center-top="background-position:100% 50%;"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img img3" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="bg" data-top-top="background-position: 50% 50%;" data-center-top="background-position:100% 50%;"></div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="swiper-pagination"></div>
            <div className="txt">
              <div className="big" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                LS E-Link is a company established jointly by LS Co., Ltd., a global leading company in the field of 
                electricity and power, and E1 Co., Ltd., a leading eco-friendly energy company, to build and operate EV 
                charging infrastructure in the era of electrification.
              </div>
              <p data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
              The world is now in the midst of a great journey toward a carbon-zero era. Eco-friendly vehicles, including electric vehicles, will rapidly replace internal combustion locomotives. 
              Creating a convenient and safe charging and usage environment is just as important as the speed of vehicle supply. 
              We will create world-class electric charging solutions by combining the capabilities of LS, a company that knows electricity well, and E1, a company that knows the hearts of energy users better than anyone else. 
              In particular, we are confident that LS E-Link will be the best partner for transportation and logistics companies that will use large amounts of electricity to charge electric vehicles.
                <strong>LS E-Link that creates ‘greater value together’.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LselinkForm;
