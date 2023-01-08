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
            전기차 충전사업
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            <li>
              <NavLink to="/">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                사업영역
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/company/lselink">회사소개</NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/evcharge" className="on">
                    사업영역
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/investment/management">투자정보</NavLink>
                </li>
                <li>
                  <NavLink to="/pr/press-list">홍보센터</NavLink>
                </li>
                <li>
                  <NavLink to="/recruit/people">채용정보</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="">EV 충전소</NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                Corporate
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/business/ev/transportation">운수</NavLink>
                </li>
                <li>
                  <NavLink to="/business/ev/logitics">물류</NavLink>
                </li>
                <li>
                  <NavLink to="/business/ev/coporate" className="on">
                    Corporate
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
            <li className="swiper-slide">
              <NavLink to="/business/ev/transportation">운수</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/ev/logitics">물류</NavLink>
            </li>
            <li className="swiper-slide on">
              <NavLink to="/business/e-link/renewable">Corporate</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business corporate">
          <div className="business-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                Corporate{' '}
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="business-wrap">
            <div className="wrap">
              <div className="infor mt0">
                <div className="infor-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  전기명가 LS의 기술력이 집결된 <br className="pc-block" />
                  전기차 전용 충전 Place
                </div>
                <div className="infor-txt" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                  전력 장비와 전선부터 충전기 및 IT플랫폼까지 LS의 모든 역량이 집결된 전기차 전용 충전 Place <br className="pc-block" />
                  법인 및 개인사업자와 개인고객까지 모두에게 편리한 충전환경을 제공하고 Battery 관리 및 차량 경정비와
                  <br className="pc-block" />
                  자동세차 등의 All-in-one Care Service 제공
                </div>
              </div>
              <div className="img img1" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                <img src="/img/sub/coporate-img1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoporateForm;
