import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CoporateForm = () => {
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
            <li className="swiper-slide">
              <NavLink to="/en/business/ev/transportation">Transportation</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/en/business/ev/logitics">Logistics</NavLink>
            </li>
            <li className="swiper-slide on">
              <NavLink to="/en/business/ev/coporate">Energy Center</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business corporate">
          <div className="business-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                Energy Center
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="business-wrap m-pt50">
            <div className="wrap">
              <div className="infor m-mt0">
                <div className="infor-tit m-mb10" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  An energy center dedicated to the electric vehicle fleet where the technology of LS,  <br className="pc-block" />
                  a renowned electrician, is concentrated
                </div>
                <div className="infor-txt" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                  A dedicated charging place for electric vehicles, where all of LS' capabilities are concentrated from power equipment and cables to chargers and IT platforms.  <br className="pc-block" />
                  LS E-Link provides a convenient charging environment for corporations, individual businesses, and individual customers, and provides battery management solutions,
                  <br className="pc-block" />
                  vehicle maintenance, and automatic car washing systems. All-in-One Care Service will be provided.
                </div>
              </div>
              {/* 사진 수정하면 class prepare 지우기 */}
              <div className="img img1 prepare" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                <img src="/img/sub/enegec_enter.jpg" width="100%" height="100%" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoporateForm;
