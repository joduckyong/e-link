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
    <div className="sub sub02-3">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            Renewable energy business
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
                Renewable energy business
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/business/e-link/evcharge">E-Link Business</NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/ev/transportation">
                  EV Charging Business
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/renewable/renewable" className="on">Renewable energy business</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business renewable">
          <div className="business-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                Renewable energy convergence charging infrastructure
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="business-wrap renewable-wrap">
            <div className="wrap">
              <div className="infor mt0">
                <div className="infor-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  Renewable energy convergence charging infrastructure is a system for efficient energy <br className="pc-block" />
                  management and stable power supply by converging PV and ESS systems.
                </div>
              </div>
              <div className="renew-img" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                <picture>
                  <source srcSet="/img/sub/sub02-3-mo-img.png" media="(max-width: 780px)" />
                  <img src="/img/sub/sub02-3-pc-img.png" alt="" />
                </picture>
              </div>
              <ul className="renew-list">
                <li className="list01" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="renew-tit">Improve electrical quality and reliability</div>
                  <p>Supply and protect loads with custom power supplies</p>
                </li>
                <li className="list02" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="renew-tit">Provide stable electricity to the active Power Grid</div>
                  <p>Capable of coping with various situations such as blackout (independent operation), continuously supplying <br className="pc-block" />energy to the load</p>
                </li>
                <li className="list03" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="renew-tit">Optimizing energy-consuming costs</div>
                  <p>power-peak management with PV and ESS systems <br className="pc-block" />and Demand Response</p>
                </li>
                <li className="list04" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="renew-tit">Eco-Friendly</div>
                  <p>Carbon Zero</p>
                </li>
                <li className="list05" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="renew-tit">Minimize power-generation cost</div>
                  <p>store energy into ESS and discharge energy when <br className="pc-block" />necessary to reduce local operating costs such as <br className="pc-block" />diesel generators</p>
                </li>
                <li className="list06" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="renew-tit">Energy independence</div>
                  <p>Supply electricity to loads only with renewable energy <br className="pc-block" />and ESS</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewableForm;
