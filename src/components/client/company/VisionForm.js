import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VisionForm = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="sub sub01-2">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            비전
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            <li>
              <NavLink to="/">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="">회사소개</NavLink>
              <ul className="links">
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
            <li className="on link">
              <NavLink to="">비전</NavLink>
              <ul className="links">
                <li>
                  <NavLink to="/company/lselink">LS E-Link</NavLink>
                </li>
                <li>
                  <NavLink to="/company/vision" className="on">
                    비전
                  </NavLink>
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
            LS E-Link 비전
          </h3>
          <div className="vision-mission" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            <span className="vs-s-tit">Mission</span>
            <p>차별화된 기술력과 서비스를 연결하여 편리한 세상을 만든다.</p>
          </div>
          <div className="bg-logo" data-top-top="transform: translateY(0%);" data-center-top="transform: translateY(-100%);"></div>
        </div>
        <div className="vision-partner">
          <div className="bg" data-top="transform:translateY(0%)" data-800-top="transform:translateY(10%)"></div>
          <div className="wrap">
            <span className="vs-s-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
              Vision
            </span>
            <div className="b-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
              EV charging Value No.1 Partner
            </div>
            <p data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
              전기차 충전분야에서 고객의 가치를 최우선으로 실현하는
              <br />
              전기 및 에너지 분야에서 최고의 전문성을 가진 No.1 파트너 입니다.
            </p>
            <div className="goal" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
              Biz. Goal :<br />
              2030년 연결 매출 3천억, 영업이익 5백억
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="core-value">
            <span className="vs-s-tit" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
              Core Value
            </span>
            <ul>
              <li className="list01" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                <div className="img">
                  <div className="bg" data-top="transform:scale(1.0)" data-800-top="transform:scale(1.3)"></div>
                </div>
                <div className="core-tit">고객중심</div>
                <p>customer</p>
              </li>
              <li className="list02" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="50" data-aos-once="true">
                <div className="img">
                  <div className="bg" data-top="transform:scale(1.0)" data-800-top="transform:scale(1.3)"></div>
                </div>
                <div className="core-tit">전문성</div>
                <p>expertise</p>
              </li>
              <li className="list03" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" data-aos-once="true">
                <div className="img">
                  <div className="bg" data-top="transform:scale(1.0)" data-800-top="transform:scale(1.3)"></div>
                </div>
                <div className="core-tit">소통</div>
                <p>communication</p>
              </li>
              <li className="list04" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="150" data-aos-once="true">
                <div className="img">
                  <div className="bg" data-top="transform:scale(1.0)" data-800-top="transform:scale(1.3)"></div>
                </div>
                <div className="core-tit">도전정신</div>
                <p>challenge</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionForm;
