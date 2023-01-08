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
                물류
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/business/ev/transportation">운수</NavLink>
                </li>
                <li>
                  <NavLink to="/business/ev/logitics" className="on">
                    물류
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business/ev/coporate">Corporate</NavLink>
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
            <li className="swiper-slide on">
              <NavLink to="/business/ev/logitics">물류</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/ev/coporate">Corporate</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business dist">
          <div className="business-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                물류
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="infor-down">
            <div className="wrap">
              <div className="tit-wrap">
                <div className="tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  전기버스 충전 솔루션
                </div>
                <p data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  현장상황, 예상 사용량에 맞추어 충전 솔루션을 <br className="pc-block" />
                  제공합니다.
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
                물류 환경에 최적화된 <br className="pc-block" />
                충전 관제 솔루션
              </div>
              <p data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                Innovated technology가 구현된 고도의 <br className="pc-block" />
                관제시스템을 통해 사용 환경에 최적화된 전력분배
                <br className="pc-block" />및 순차충전 자동 제어합니다.
              </p>
            </div>
          </div>
          <div className="business-wrap">
            <div className="wrap pb70">
              <div className="infor mt0">
                <div className="infor-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  사용자에게 안정성과 경제성을 제공하는 Link 솔루션
                </div>
              </div>
              <div className="img img1">
                <div className="in"></div>
              </div>
              <div className="infor-txt" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                Battery의 온도 분석과 셀 이상유무를 사전에 진단하여 열폭주를 방지하고 운전자에게 안정성을 제공하는 차별화 된 Link 솔루션을 제공합니다.
                <br className="pc-block" />
                <br className="pc-block" />
                주행 상황에 따라 Battery의 효율과 수명을 위한 충전방법을 가이드하고 Battery의 이력을 통한 성능Data를 관리하여 Battery의 잔존가치를
                보장하고 <br className="pc-block" />
                사용자에게 경제성 증가 효과를 제공합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogiticsForm;
