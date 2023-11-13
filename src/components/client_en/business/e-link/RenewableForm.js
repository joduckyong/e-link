import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            E-Link
            <br class="m-block" /> BUSINESS
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
              E-Link Business
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/business/e-link/evcharge" className="on">
                  E-Link Business
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/ev/transportation">EV charging business</NavLink>
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
              <NavLink to="/en/business/e-link/evcharge">
                B2B business
              </NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/en/business/e-link/control" className="on">EVCS</NavLink>
            </li>
            <li className="swiper-slide on">
              <NavLink to="/en/business/e-link/renewable" className="on">Renewable energy converged charging infrastructure</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business energy">
          <div className="business-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                Establishment of new and renewable energy convergence charging infrastructure
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="business-wrap pb0">
            <div className="wrap pb70">
              <div className="infor mt0 mb75">
                <div className="infor-tit mb0" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  LS E-Link leads the distributed energy resources industry,
                  <br className="pc-block" />
                  including PV-ESS, R (Reuse Battery)-ESS, DR, and V2G.
                </div>
              </div>
              <img src="/img/sub/renewable_graph.png" className="pc-img" style={{ width: '100%' }} />
              <img src="/img/sub/m_renewable_graph.png" className="mo-img" style={{ width: '100%' }} />
              <div className="infor-tit infor-tit2 mt120" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                We provide PV-ESS, R (Reuse Battery)-ESS, DR, and V2G solutions to customers operating large-scale EV fleets in preparation for the distributed energy resources industry.
              </div>
              <img src="/img/sub/renewable_img.png" className="pc-img" style={{ width: '100%' }} />
              <img src="/img/sub/m_renewable_img.png" className="mo-img" style={{ width: '100%' }} />
            </div>

            {/*<div className="img out-img">
              <div className="in" style={{ 'background-size': 'cover' }}></div>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewableForm;
