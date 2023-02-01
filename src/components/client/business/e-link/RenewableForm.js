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
            E-Link<br class="m-block" /> BUSINESS
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
                신재생 에너지사업
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/business/e-link/evcharge">전기차 충전사업</NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/control">관제시스템</NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/renewable" className="on">
                    신재생 에너지사업
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
              <NavLink to="/business/e-link/evcharge">B2B 특화 전기차 <span className="mo-br">충전 사업</span></NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/e-link/control">관제시스템 구축</NavLink>
            </li>
            <li className="swiper-slide on">
              <NavLink to="/business/e-link/renewable">신재생에너지 융합형 충전 인프라 구축</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business energy">
          <div className="business-wrap">
            <div className="wrap">
              <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                신재생에너지 융합형 충전 인프라 구축
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="business-wrap pb0">
            <div className="wrap pb70">
              <div className="infor mt0 mb75" >
                <div className="infor-tit mb0" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
	  				전기차 충전 솔루션을 넘어 PV-ESS, R(Reuse Battery)-ESS, DR, V2G 까지 
					<br className="pc-block" />
					미래 분산 전원 시대를 선도하는 당신의 믿음직한 파트너가 되겠습니다.
                </div>
				
              </div>
				<img src="/img/sub/empty_bg.jpg" style={{ 'width': '100%' }}/>
				<div className="infor-tit infor-tit2 mt120" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
	  				대규모 EV Fleet을 운영하는 고객사에게 분산전원 시대를 대비하여 PV-ESS, <br className="pc-block" />
					R(Reuse Battery)-ESS, DR, V2G 솔루션 제공을 통해 EaaS(Energy As A Service) 시대에 <br className="pc-block" />
					고객 가치를 극대화 시켜드리는 1등 파트너가 되겠습니다.
                </div>
            </div>
            <div className="img out-img">
              <div className="in" style={{ 'background-size': 'cover' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewableForm;
