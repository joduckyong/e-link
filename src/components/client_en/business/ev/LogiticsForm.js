import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LogiticsForm = () => {
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
            <li className="swiper-slide on">
              <NavLink to="/en/business/ev/logitics">Logistics</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/en/business/ev/coporate">Energy Center</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business dist">
          <div className="business-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                Logistics
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="infor-down">
            <div className="wrap">
              <div className="tit-wrap">
                <div className="tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  Custom Charging Solutions
                </div>
                <p data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  We provide customized infrastructure and charging solutions optimized for each customer's individual logistics environment such as time, space constraints, fleet size, and power usage environment.
                </p>
              </div>
              <div className="img">
                <div className="in"></div>
              </div>
            </div>
          </div>
          <div className="dist-solution-img">
            <div className="wrap">
              <div className="dist-tit" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                Custom EVCS <br />
                for logistics environment
              </div>
              <p data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                ELVIS EVCS, implemented with cutting-edge technology,  <br class="block"/>
                automatically controls power distribution optimized for  <br class="block"/>
                the usage environment and sequential charging.
              </p>
            </div>
          </div>
          <div className="business-wrap">
            <div className="wrap pb70">
              <div className="infor mt0 mb30">
                <div className="infor-tit mb30" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  LS E-Link BMS solution provides stability  <br className="pc-block" />
                  and economic benefits to users
                </div>
              </div>
              <div className="infor-txt" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                BMS solutions analyze the temperature of the battery and diagnose cell abnormalities in advance to prevent thermal runaway, and we provide safe driving to users. 
                <br className="pc-block" />
                AI-incorporated BMS guarantees residual value and provides economic effects to users by managing battery charging methods and history.
              </div>
              <div className="img img1">
                <div className="in"></div>
              </div>

              <ul className="dist-list">
                <li>
                  <span className="img-box">
                    <img src="/img/sub/dist-list-ico1.png" alt="" />
                  </span>
                  <div>
                    <p className="tit">TCO savings</p>
                    <p className="txt">
                      Lower your maintenance costs with EVs, and keep
                      <br className="pc-block" />
                      electricity costs low with energy management features.<br className="pc-block" />
                      Increase vehicle performance and reduce maintenance costs over time with a vehicle telematics integration
                      <br className="pc-block" />
                      and route management platform.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="img-box">
                    <img src="/img/sub/dist-list-ico2.png" alt="" />
                  </span>
                  <div>
                    <p className="tit">
                      Vehicle control through application <br className="pc-block" />
                      programming interface (API) integration
                    </p>
                    <p className="txt">
                      Stay in control of your entire fleet with an EV charging  <br className="pc-block" />
                      system integrated via API with other existing fleet management solutions .
                    </p>
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

export default LogiticsForm;
