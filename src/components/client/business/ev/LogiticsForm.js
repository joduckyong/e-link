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
                  <NavLink to="/business/ev/coporate">에너지 센터</NavLink>
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
              <NavLink to="/business/ev/coporate">에너지 센터</NavLink>
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
                  맞춤형 충전 솔루션
                </div>
                <p data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                 시간적·공간적 제약, Fleet 규모, 및 전력사용환경 등 고객사의 개별 물류 환경에 최적화된 충전Infra 맞춤 솔루션 제공
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
                Innovated technology가 구현된 <br className="pc-block" />
				고도의 관제시스템을 통해 사용 환경에 최적화된 <br className="pc-block" />
				전력분배 및 순차충전 자동 제어합니다.
              </p>
            </div>
          </div>
          <div className="business-wrap">
            <div className="wrap pb70">
              <div className="infor mt0">
                <div className="infor-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                사용자에게 안정성과 경제성을 제공하는 LS E-Link BMS 솔루션
                </div>
              </div>
              <div className="img img1">
                <div className="in"></div>
              </div>
              <div className="infor-txt" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
              Battery의 온도 분석과 셀 이상유무를 사전에 진단하여 열폭주를 방지하고 운전자에게 안정성을 제공합니다.
                <br className="pc-block" />
                <br className="pc-block" />
                AI가 접목된 BMS로 배터리의 충전 방법을 가이드 및 이력을 관리함으로써 잔존가치를 보장하고 사용자에게 경제적 효과를 제공합니다.
              </div>
	  		<ul className="dist-list">
                <li>
                    <span className="img-box">
						<img src="/img/sub/dist-list-ico1.png" alt="" />
					</span>
	  				<div>
						<p className="tit">TCO 절감</p>
						<p className="txt">
							EV로 유지 보수 비용을 낮추고 에너지 관리 기능으로<br className="pc-block" />
							전기 비용을 낮게 유지하십시오. 차량 텔레매틱스 통합 및<br className="pc-block" />
							경로 관리 플랫폼을 통해 시간이 지남에 따라 차량 성능을<br className="pc-block" />
							높이고 유지 관리 비용을 줄이십시오. 
						</p>
					</div>
                </li>
				<li>
                    <span className="img-box">
						<img src="/img/sub/dist-list-ico2.png" alt="" />
					</span>
	  				<div>
						<p className="tit">애플리케이션 프로그래밍 인터페이스(API) <br className="pc-block" />
						통합을 통한 차량제어</p>
						<p className="txt">
						   다른 기존 차량 관리 솔루션과 API를 통해 통합된 <br className="pc-block" />
							EV 충전 시스템으로 전체 차량을 계속 제어하세요.
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
