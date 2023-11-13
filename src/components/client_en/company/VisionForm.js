import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import { ParallaxProvider, Parallax } from 'react-skrollr';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VisionForm = () => {
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
    <div className="sub sub01-2">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            Vision
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            <li>
              <NavLink to="/en">
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
                Vision
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/company/lselink">LS E-Link</NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/vision" className="on">
                    Vision
                  </NavLink>
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
            LS E-Link Vision
          </h3>
          <div className="vision-mission" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            <span className="vs-s-tit">Mission</span>
            <p>We, serving competitive services <br /> with cutting-edge technologies, create a new world.</p>
          </div>
          <div className="bg-logo" data-top-top="transform: translateY(0%);" data-center-top="transform: translateY(-100%);"></div>
        </div>
        <div className="vision-partner">
          <div className="bg" data-top="transform:translateY(0%)" data-800-top="transform:translateY(10%)"></div>
          <div className="wrap">
            <span className="vs-s-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
              Vision
            </span>
            <div className="b-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
              EV charging Value No.1 Partner
            </div>
            <p data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
              LS E-Link is the No. 1 partner with the best expertise in realizing customer value
              <br />
              as the top priority in the electric vehicle charging field.
            </p>
          </div>
        </div>
        <div className="wrap">
          <div className="core-value">
            <span className="vs-s-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
              Core Value
            </span>
            <ul>
              <li className="list01" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                <div className="img">
                  <ParallaxProvider>
                    <Parallax>
                      <div className="bg" data-top="transform:scale(1.0)" data-800-top="transform:scale(1.3)"></div>
                    </Parallax>
                  </ParallaxProvider>
                </div>
                <div className="core-tit">Customer</div>
              </li>
              <li className="list02" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" data-aos-once="true">
                <div className="img">
                  <ParallaxProvider>
                    <Parallax>
                      <div className="bg" data-top="transform:scale(1.0)" data-800-top="transform:scale(1.3)"></div>
                    </Parallax>
                  </ParallaxProvider>
                </div>
                <div className="core-tit">Expertise</div>
              </li>
              <li className="list03" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" data-aos-once="true">
                <div className="img">
                  <ParallaxProvider>
                    <Parallax>
                      <div className="bg" data-top="transform:scale(1.0)" data-800-top="transform:scale(1.3)"></div>
                    </Parallax>
                  </ParallaxProvider>
                </div>
                <div className="core-tit">Communication</div>
              </li>
              <li className="list04" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="150" data-aos-once="true">
                <div className="img">
                  <ParallaxProvider>
                    <Parallax>
                      <div className="bg" data-top="transform:scale(1.0)" data-800-top="transform:scale(1.3)"></div>
                    </Parallax>
                  </ParallaxProvider>
                </div>
                <div className="core-tit">Challenge</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionForm;
