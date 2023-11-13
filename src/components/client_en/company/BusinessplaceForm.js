import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BusinessplaceForm = () => {
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
    <div className="sub sub01-5">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            Locations
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
                Locations
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/company/lselink">LS E-Link</NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/vision">Vision</NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/history">
                    History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/identity">CI·BI</NavLink>
                </li>
                <li>
                  <NavLink to="/en/company/businessplace" className="on">Locations</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="wrap">
          <div className="company-infor">
            <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
              Headquarters
            </h3>
            <div className="txt">
              <dl data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                <dt>Location</dt>
                <dd>
                  17F, LS Yongsan Tower, 
                  <br />
                  92 Hangang-daero, Yongsan-gu,
                  <br />
                  Seoul, 04386, Korea
                </dd>
              </dl>
              <dl data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                <dt>Phone</dt>
                <dd>1660-3175</dd>
              </dl>
            </div>
            <div className="img" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
              <img src="/img/sub/company.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessplaceForm;
