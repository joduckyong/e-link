import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BusinessplaceForm = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="sub sub01-5">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            사업장 안내
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
              <NavLink to="">사업장 안내</NavLink>
              <ul className="links">
                <li>
                  <NavLink to="/company/lselink">LS E-Link</NavLink>
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
                  <NavLink to="/company/businessplace" className="on">
                    사업장 안내
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="wrap">
          <div className="company-infor">
            <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
              본사
            </h3>
            <div className="txt">
              <dl data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                <dt>위치</dt>
                <dd>
                  서울시 용산구 한강대로 92
                  <br />
                  (한강로2가, LS용산타워) 17층
                </dd>
              </dl>
              <dl data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                <dt>전화</dt>
                <dd>1660-3175</dd>
              </dl>
            </div>
            <div className="img" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
              <img src="/img/sub/company.jpg" alt="" />
            </div>
            <NavLink to="" className="show-map" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
              지도보기
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessplaceForm;
