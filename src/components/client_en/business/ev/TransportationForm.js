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
            EV Charging Business
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
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
                  <NavLink to="/en/company/lselink">
                    Company
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/e-link/evcharge" className="on">Business</NavLink>
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
                EV Charging Business
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/business/e-link/evcharge">E-Link Business</NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/ev/transportation" className="on">
                  EV Charging Business
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/renewable/renewable">Renewable energy business</NavLink>
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
              <NavLink to="/en/business/ev/transportation">Transportation</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/en/business/ev/logitics">Logistics</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/en/business/ev/coporate">Energy Center</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business drive">
          <div className="business-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                Transportation
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="infor-down">
            <div className="wrap">
              <div className="tit-wrap">
                <div className="tit">Electric Bus Charging Solution</div>
                <p>We provide charging solutions tailored to the garage, driving pattern, and faucet conditions.</p>
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

          <div className="infor-down infor-down2">
            <div className="wrap">
              <div className="tit-wrap">
                <div className="tit">Next Generation Bus Charging Solutions</div>
                <p>
                  LS E-Link's EV bus charging solution maximizes customer economic efficiency by providing an optimal charging solution for fleet operation, such as power distribution, sequential charging, and charging speed control. 
                  <br className="pc-block" />
                  Furthermore, LS E-Link's AI technology-applied BMS (Battery Management System) improves customers' battery stability.
                </p>
              </div>
              <div className="video-wrap">
                {/* <video src="/video/20230427_170801187.mp4" playsInline loop muted autoPlay></video> */}
                <video playsInline loop muted autoPlay controls>
                  <source src="/video/20230427_170801187.mp4"></source>
                </video>
              </div>
              {/* <img src="/img/sub/vod.jpg" alt="" style={{ 'width': '100%' }}/> */}
            </div>
          </div>

          <div className="infor-down infor-down3">
            <div className="wrap">
              <div className="tit-wrap">
                <div className="tit">Optimize the operation, reduce your costs</div>
                <p>
                  LS E-Link's vehicle and energy management platform is a cloud-based data platform that provides historical
                  <br className="pc-block" />
                  and real-time performance information for electric vehicles and chargers to optimize charging operations and reduce costs.
                </p>
              </div>
              <ul className="drive-list drive-list2">
                <li>
                  <span className="img-box">
                    <img src="/img/sub/drive-list-ico1.png" alt="" />
                  </span>
                  <div className="cont">
                    <p className="tit">Live monitoring</p>
                    <div className="txt">
                      <p>Dashboard for real-time data monitoring and vehicle tracking</p>
                      <p>Vehicle and charger status</p>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="img-box">
                    <img src="/img/sub/drive-list-ico2.png" alt="" />
                  </span>
                  <div className="cont">
                    <p className="tit">Data and Reporting</p>
                    <div className="txt">
                      <p>Reporting with customizable parameters</p>
                      <p>Vehicle and charger reporting</p>
                      <p>Access downloadable data</p>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="img-box">
                    <img src="/img/sub/drive-list-ico3.png" alt="" />
                  </span>
                  <div className="cont">
                    <p className="tit">Diagnosis</p>
                    <div className="txt">
                      <p>Detailed error reporting</p>
                      <p>Past and current error information</p>
                      <p>Troubleshooting information</p>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="img-box">
                    <img src="/img/sub/drive-list-ico4.png" alt="" />
                  </span>
                  <div className="cont">
                    <p className="tit">Rate management</p>
                    <div className="txt">
                      <p>Smart charging function for remote charging control</p>
                      <p>Energy management application</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationForm;
