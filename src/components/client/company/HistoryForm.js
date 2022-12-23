import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HistoryForm = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="sub sub01-3">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            연혁
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
              <NavLink to="">연혁</NavLink>
              <ul className="links">
                <li>
                  <NavLink to="/company/lselink">LS E-Link</NavLink>
                </li>
                <li>
                  <NavLink to="/company/vision">비전</NavLink>
                </li>
                <li>
                  <NavLink to="/company/history" className="on">
                    연혁
                  </NavLink>
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

      <div className="content p0">
        <div className="history">
          <div className="wrap">
            <div className="t-wrap" id="y-1" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
              <div className="title" data-top="transform:translateY(0%);" data-800-top="transform:translateY(50px);">
                <div className="time">2022 - 현재</div>
                <div className="time-tit">
                  LS E-Link
                  <br />
                  미래 종합 에너지 솔루션
                  <br />
                  기업의 탄생
                </div>
              </div>
              <ul className="time-list" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                <li data-top="transform:translateY(0%);" data-800-top="transform:translateY(80px);">
                  <dl>
                    <dt>2023.00</dt>
                    <dd>
                      <p>부산 강서공영차고지 에너지센터</p>
                      <div className="img">
                        <img src="/public/img/sub/y-1-img1.png" alt="" />
                      </div>
                    </dd>
                  </dl>
                </li>
                <li data-top="transform:translateY(0%);" data-800-top="transform:translateY(80px);">
                  <dl>
                    <dt>2022.12</dt>
                    <dd>
                      <p>쿠팡 부산2캠프 전기차충전 구축 및 운영</p>
                    </dd>
                  </dl>
                </li>
                <li data-top="transform:translateY(0%);" data-800-top="transform:translateY(80px);">
                  <dl>
                    <dt>2022.05</dt>
                    <dd>
                      <p>LS E-Link㈜ 설립</p>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryForm;
