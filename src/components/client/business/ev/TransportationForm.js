import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import { ParallaxProvider, Parallax } from 'react-skrollr';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TransportationForm = () => {
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
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            전기차 충전사업
          </h2>
          <ul
            className="path"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
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
                  <NavLink to="/investment/financial">
                    투자정보 & 홍보센터
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recruit/people">채용정보</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/consult">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/ev/login">EV 충전소</NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                전기차 충전사업
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/business/e-link/evcharge">
                    E-Link BUSINESS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business/ev/transportation" className="on">
                    전기차 충전사업
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business/renewable/renewable">
                    스마트 전력 신사업
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
            <li className="swiper-slide on">
              <NavLink to="/business/ev/transportation">운수</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/ev/logitics">물류</NavLink>
            </li>
            {/* <li className="swiper-slide">
              <NavLink to="/business/ev/coporate">에너지 센터</NavLink>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business drive">
          <div className="business-wrap">
            <div className="wrap">
              <h3
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                운수
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="infor-down">
            <div className="wrap">
              <div className="tit-wrap">
                <div className="tit">전기버스 충전 솔루션</div>
                <p>
                  차고지, 운행패턴, 수전여건에 맞추어 충전 솔루션을 제공합니다.
                </p>
              </div>
              <div className="img">
                <ParallaxProvider>
                  <Parallax>
                    <div
                      className="in"
                      data-top-top="background-position: 50% 100%;"
                      data-center-top="background-position:100% 100%;"
                    ></div>
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
          </div>

          <div className="infor-down infor-down2">
            <div className="wrap">
              <div className="tit-wrap">
                <div className="tit">차세대 버스 충전 솔루션</div>
                <p>
                  LS E-Link의 EV 버스 충전 솔루션은 전력분배, 순차충전,
                  충전속도제어 등 을 활용한 최적의 충전 솔루션을 제공하여 고객
                  경제성을 극대화 시킵니다. <br className="pc-block" />
                  나아가 LS E-Link의 AI기술이 적용된 BMS(Battery Management
                  System)를 통해 고객의 배터리 안정성을 향상시킵니다.
                </p>
              </div>

              <div className="video-wrap">
                <video playsInline loop muted autoPlay controls>
                  <source src="/video/20230427_170801187.mp4"></source>
                </video>
              </div>
            </div>
          </div>

          <div className="infor-down infor-down3">
            <div className="wrap">
              <div className="tit-wrap">
                <div className="tit">운영 최적화, 비용 절감</div>
                <p>
                  LS E-Link의 차량 및 에너지 관리 플랫폼은 충전 작업을
                  최적화하고 비용을 절감하기 위해 배터리 전기차량과
                  <br className="pc-block" />
                  충전기에 대한 기록 및 실시간 성능 정보를 제공하는 클라우드
                  기반 데이터 플랫폼입니다.
                </p>
              </div>
              <ul className="drive-list drive-list2">
                <li>
                  <span className="img-box">
                    <img src="/img/sub/drive-list-ico1.png" alt="" />
                  </span>
                  <div className="cont">
                    <p className="tit">실시간 모니터링</p>
                    <div className="txt">
                      <p>실시간 데이터 모니터링 및 차량 추적을 위한 대시보드</p>
                      <p>차량 및 충전기 현황</p>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="img-box">
                    <img src="/img/sub/drive-list-ico2.png" alt="" />
                  </span>
                  <div className="cont">
                    <p className="tit">데이터 및 보고</p>
                    <div className="txt">
                      <p>사용자 정의 가능한 매개변수로 보고</p>
                      <p>차량 및 충전기 보고</p>
                      <p>다운로드 가능한 데이터 액세스</p>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="img-box">
                    <img src="/img/sub/drive-list-ico3.png" alt="" />
                  </span>
                  <div className="cont">
                    <p className="tit">진단</p>
                    <div className="txt">
                      <p>자세한 오류 보고</p>
                      <p>과거 및 현재 오류 정보</p>
                      <p>문제 해결 정보</p>
                    </div>
                  </div>
                </li>
                <li>
                  <span className="img-box">
                    <img src="/img/sub/drive-list-ico4.png" alt="" />
                  </span>
                  <div className="cont">
                    <p className="tit">요금 관리</p>
                    <div className="txt">
                      <p>충전기 원격 제어를 위한 스마트 충전 기능</p>
                      <p>에너지 관리 애플리케이션</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="infor-down infor-down3">
            <div className="wrap">
              <div className="tit-wrap">
                <div className="tit">무사고 화재 예방 솔루션</div>
                <p>
                  LS E-Link는 충전중 배터리 진단, 운행중 BMS관리 및 평시 전력의
                  효율적인 인프라 관리를 통해 운영 안정성을 확보하고 있습니다.
                </p>
              </div>
              <div className="img">
                <div className="in2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationForm;
