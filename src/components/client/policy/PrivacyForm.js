import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PrivacyForm = () => {
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
            신재생 에너지사업
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
                  <NavLink to="/business/e-link/evcharge">E-Link Business</NavLink>
                </li>
                <li>
                  <NavLink to="/business/ev/transportation">전기차 충전사업</NavLink>
                </li>
                <li>
                  <NavLink to="/business/renewable/renewable" className="on">
                    신재생 에너지사업
                  </NavLink>
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
                신재생 에너지 융합형 충전인프라
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="business-wrap renewable-wrap">
            <div className="wrap">
              <div className="infor mt0">
                <div className="infor-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                  신재생 에너지 융합형 충전인프라는 태양광발전과 ESS를 융합하여 <br className="pc-block" />
                  에너지를 효율적으로 관리하고 안정적인 전력공급을 위한 시스템입니다.
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
                  <div className="renew-tit">전기 품질 및 신뢰도 향상</div>
                  <p>맞춤형 전원 공급을 통해 부하에 공급, 및 보호</p>
                </li>
                <li className="list02" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="renew-tit">상용 전력 망에 안정성 기여</div>
                  <p>Blackout등 다양한 상황에 대처 가능 (독립 운전), 지속적으로 부하에 에너지 공급</p>
                </li>
                <li className="list03" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="renew-tit">소비자 에너지 비용 최적</div>
                  <p>태양광, ESS로 피크 저감 및 실시간 요금제 대응 가능</p>
                </li>
                <li className="list04" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="renew-tit">친환경</div>
                  <p>화석 연료 운영 최소화,가능</p>
                </li>
                <li className="list05" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="renew-tit">발전 원가 비용 최소화</div>
                  <p>ESS로 에너지를 저장하였다가, 필요시 에너지를 방전하여 디젤 발전기 등 지역 운영 비용 절감</p>
                </li>
                <li className="list06" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                  <div className="renew-tit">에너지 자립</div>
                  <p>신재생 에너지와 ESS만으로 부하에 전기 공급</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyForm;
