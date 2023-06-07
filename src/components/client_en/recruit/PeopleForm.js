import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
// import { ParallaxProvider, Parallax } from 'react-skrollr';

const PeopleForm = () => {
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
    <div className="sub sub05">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            Ideal Talent
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            <li>
              <NavLink to="/en">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                Recruitment
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/en/company/lselink">Company</NavLink>
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
                  <NavLink to="/en/recruit/people" className="on">Recruitment</NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus">Contact Us</NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                Ideal Talent
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/recruit/people" className="on">Ideal Talent</NavLink>
                </li>
                <li>
                  <NavLink to="/en/recruit/benefits">Welfare</NavLink>
                </li>
                <li>
                  <NavLink to="/en/recruit/posting">Job Posting</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="content pb0" style={{ 'padding-top': '0' }}>
        <div className="title">
          <div className="inner">
            <p>Positive·Creative·Professional</p>
            <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
              LS E-Link is a company created by  <br className="pc-block" />
              <span>
                bright, creative and professional talents  <br className="pc-block" />
              </span>
              based on LS partnership.
            </h3>
          </div>
        </div>
        <div className="wrap">
          <ul className="ideal-list">
            <li>
              <img src="/img/sub/sub05-1-ico1.png" alt="" />
              <p className="tit">Positive</p>
              <p className="txt">
                Talent who has a bright energy and  <span>a positive mindset, </span>promotes <span>coexistence </span>with the people he/she works with, and abides by <span>ethical procedures </span>and basics
              </p>
            </li>
            <li>
              <img src="/img/sub/sub05-1-ico2.png" alt="" />
              <p className="tit">Creative</p>
              <p className="txt">
                <span>Talent </span> who pursues <span>hange and innovation </span>based on creativity, <span>creates value, and leads growth as a global company</span>
              </p>
            </li>
            <li>
              <img src="/img/sub/sub05-1-ico3.png" alt="" />
              <p className="tit">Professional</p>
              <p className="txt">
                <span>Talented people who constantly strive </span>to become the best in their field, have a global sense, and have <span>expertise </span>
                and <span>passion </span>to compete on the world stage.
              </p>
            </li>
          </ul>
          <NavLink to="/en/recruit/posting" className="btn">
            Recruitment Guide
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PeopleForm;
