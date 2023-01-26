import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import { ParallaxProvider, Parallax } from 'react-skrollr';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

const LselinkForm = () => {
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
    <div className="sub sub01-1">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            LS E-Link <br className="m-block" />
            소개
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            <li>
              <NavLink to="/">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                회사소개
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/company/lselink" className="on">
                    회사소개
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/evcharge">사업영역</NavLink>
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
                LS E-Link 소개
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/company/lselink" className="on">
                    LS E-Link
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/company/vision">비전</NavLink>
                </li>
                <li>
                  <NavLink to="/company/history">연혁</NavLink>
                </li>
                <li>
                  <NavLink to="/company/identity">CI·BI</NavLink>
                </li>
                <li>
                  <NavLink to="/company/businessplace">사업장 안내</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

	<div className="content">
        <div className="wrap">
          <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            LS E-Link 홈페이지 방문을 환영합니다.
          </h3>
		
          <div className="company-infor">
			
			<Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={true}
                  speed={1000}
                  mousewheel={true}
				  autoplay={{ delay: 2000 }}
                  pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                  }}
                >
			<SwiperSlide>
				<div className="img" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
				  <ParallaxProvider>
					<Parallax>
					  <div className="bg" data-top-top="background-position: 50% 50%;" data-center-top="background-position:100% 50%;"></div>
					</Parallax>
				  </ParallaxProvider>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="img img2" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
				  <ParallaxProvider>
					<Parallax>
					  <div className="bg" data-top-top="background-position: 50% 50%;" data-center-top="background-position:100% 50%;"></div>
					</Parallax>
				  </ParallaxProvider>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="img img3" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
				  <ParallaxProvider>
					<Parallax>
					  <div className="bg" data-top-top="background-position: 50% 50%;" data-center-top="background-position:100% 50%;"></div>
					</Parallax>
				  </ParallaxProvider>
				</div>
			</SwiperSlide>
		</Swiper>

					<div className="swiper-pagination"></div>
            <div className="txt">
              <div className="big" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                LS E-Link는 전기, 전력분야의 글로벌 리딩 기업군을 이끌고 있는 ㈜LS와 에너지 서비스 선도기업 ㈜E1이 전기화(Electrification)시대
                전기차량(EV) 충전인프라 구축 및 운영서비스를 위해 함께 설립한 회사입니다.
              </div>
              <p data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                세계는 지금 탄소제로시대를 향한 위대한 여정 가운데 있습니다. 전기차량을 비롯한 친환경 차량들이 내연기관차의 자리를 빠르게 대체해 갈
                것입니다. 차량보급 속도만큼 편리하고 안전한 충전환경, 사용환경을 조성하는 일도 중요한 과제입니다. ‘전기를 잘 아는 기업’ LS와 ‘에너지
                사용자의 마음을 누구보다 잘 아는 기업’ E1의 역량을 모아 세계 최고수준의 전기 충전 솔루션을 만들어 가겠습니다. 특히, 전기차량 충전을
                위해 대용량의 전기를 사용하게 될 운수, 물류기업들에게 LS E-Link는 최고의 파트너가 되리라 확신합니다.
                <strong>‘함께 하여 더 큰 가치를’ 만들어 가는 LS E-Link가 되겠습니다.</strong>
              </p>
            </div>
          </div>
		
        </div>
      </div>


    </div>
  );
};

export default LselinkForm;
