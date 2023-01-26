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
                운수
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/business/ev/transportation" className="on">
                    운수
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business/ev/logitics">물류</NavLink>
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
            <li className="swiper-slide on">
              <NavLink to="/business/ev/transportation">운수</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/ev/logitics">물류</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/ev/coporate">에너지 센터</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business drive">
          <div className="business-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
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
                  현장상황, 예상 사용량에 맞추어 충전 솔루션을 제공합니다.
                </p>
              </div>
              <div className="img">
                <ParallaxProvider>
                  <Parallax>
                    <div className="in" data-top-top="background-position: 50% 100%;" data-center-top="background-position:100% 100%;"></div>
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
          </div>
	{/*<div className="system">
            <div className="sys-bg" style={{ 'background-size': 'cover' }}></div>
            <div className="wrap">
              <div className="sys-tit">전기버스 충전 시스템</div>
              <ul>
                <li>
                  <img src="/img/sub/kepco.svg" alt="" />
                </li>
                <li>
                  <img src="/img/sub/e-link.svg" alt="" />
                </li>
                <li>
                  <img src="/img/sub/charge.svg" alt="" />
                </li>
              </ul>
            </div>
          </div>*/}


			<div className="infor-down infor-down2">
				<div className="wrap">
					<div className="tit-wrap">
						<div className="tit">차세대 차량 충전 솔루션</div>
						<p>
							LS E-Link의 맞춤형 EV 충전 솔루션은 LS E-Link의 10년 간의 충전 설치 경험과 함께 차량 운영자에게 무공해 차량을 확장할 수 있는 포괄적인 제품 세트를 제공합니다.<br className="pc-block" />
							LS E-Link는 고객의 우선순위에 따라 사용성, 물리적 공간, 전력 또는 비용에 최적화된 각 프로젝트에 이상적인 차량 충전 솔루션을 권장합니다. <br className="pc-block" />
							DC 고속 충전기의 전력 범위는 60kW ~ 450kW이며 차량 충전 요구 사항에 맞게 정확한 전력을 정확하게 선택합니다.

						</p>
					</div>
					<ul className="drive-list">
						<li>
							<p className="tit">믿을 수 있는</p>
							<div className="txt">
								<p>99.5%의 가용성을 달성하도록 구축 및 인력 배치</p>
								<p>3-10년 제조업체 보증</p>
							</div>
						</li>
						<li>
							<p className="tit">콤팩트</p>
							<div className="txt">
								<p>공간이 제한된 창고에 최적화</p>
								<p>중앙 집중식 전원 모듈로 공간 절약</p>
							</div>
						</li>
						<li>
							<p className="tit">비용 효율적</p>
							<div className="txt">
								<p>하드웨어 및 설치 비용 감소</p>
								<p>추가 모듈을 쉽게 추가할 수 있는 확장성을 고려한 설계</p>
							</div>
						</li>
						<li>
							<p className="tit">고성능</p>
							<div className="txt">
								<p>60kW ~ 1440kW의 다양한 전력 수준으로 제공</p>
							</div>
						</li>
					</ul>
					<img src="/img/sub/vod.jpg" alt="" style={{ 'width': '100%' }}/>
				</div>
			</div>


			<div className="infor-down infor-down3">
				<div className="wrap">
					<div className="tit-wrap">
						<div className="tit">운영 최적화, 비용 절감</div>
						<p>
							LS E-Link의 Valence 차량 및 에너지 관리 플랫폼은 차량 및 충전 작업을 최적화하고 비용을 절감하기 위해 배터리 전기차량 차량 및<br className="pc-block" />
							충전기에 대한 기록 및 실시간 성능 정보를 제공하는 클라우드 기반 데이터 플랫폼입니다.
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



	{/*<div className="business-wrap">
		<div className="wrap pb70">
			<div className="infor mt0">
				<div className="infor-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
					효율적이고 최적화된 충전인프라 컨설팅
				</div>
				<div className="infor-txt" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
					구축을 위한 설계부터 인허가 시공 운영관리 등 충전인프라 Total solution을 제공합니다.
				</div>
			</div>
			<div className="img img1">
				<ParallaxProvider>
				<Parallax>
				<div className="in" data-top-top="background-position: 100% 50%;" data-center-top="background-position:100% 100%;"></div>
				</Parallax>
				</ParallaxProvider>
			</div>
			<div className="infor">
				<div className="infor-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
				LS E-Link만의 관제솔루션 제공
				</div>
				<div className="infor-txt" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
				전기버스 운영 및 정산에 특화 된 관제솔루션을 사용자의 Needs에 맞추어 제공합니다.
				</div>
			</div>
			<div className="img img2">
				<ParallaxProvider>
				<Parallax>
				<div className="in" data-top-top="background-position: 100% 50%;" data-center-top="background-position:100% 100%;"></div>
				</Parallax>
				</ParallaxProvider>
			</div>
		</div>
	</div>*/}
			</div>
		</div>
	</div>
	
  );
};

export default TransportationForm;
