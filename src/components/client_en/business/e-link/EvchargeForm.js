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
              <NavLink to="/en">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                Business
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/en/company/lselink">Company</NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/e-link/evcharge" className="on">
                    Business
                  </NavLink>
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
                E-Link Business
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/business/e-link/evcharge" className="on">
                    E-Link Business
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/ev/transportation">
                    EV charging business
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/renewable/renewable">
                    Renewable energy business
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
              <NavLink to="/en/business/e-link/evcharge" className="on">
                B2B specialized EV charging business
              </NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/en/business/e-link/control">EVCS</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/en/business/e-link/renewable">
                Renewable energy converged charging infrastructure
              </NavLink>
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
                B2B specialized EV charging business
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
                  B2B specialized EV charging business
                </div>
                <div
                  className="infor-txt"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  We provide ev charging solutions and the battery management
                  services, the accumulated LS electrical technology, for fleet
                  operation.
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
                  Establishment of charging infrastructure, consignment
                  operation business
                </div>
                <div
                  className="infor-txt"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  We provide a total solution from business feasibility review,
                  licensing, infrastructure construction, operation and
                  financing.
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
