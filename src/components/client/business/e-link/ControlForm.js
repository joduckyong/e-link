import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ControlForm = () => {
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
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            E-Link
            <br class="m-block" /> BUSINESS
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
                {/* <li>
                  <NavLink to="/pr/press-list">홍보센터</NavLink>
                </li> */}
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
                E-Link BUSINESS
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/business/e-link/evcharge" className="on">
                    E-Link BUSINESS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/business/ev/transportation">
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
            <li className="swiper-slide">
              <NavLink to="/business/e-link/evcharge">
                B2B 특화 전기차 충전 사업
              </NavLink>
            </li>
            <li className="swiper-slide on">
              <NavLink to="/business/e-link/control">관제시스템</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/business/e-link/renewable">차세대 모빌리티</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="content p0">
        <div className="business control">
          <div className="business-wrap">
            <div className="wrap">
              <h3
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                관제시스템
              </h3>
            </div>
          </div>
          <div className="bg"></div>
          <div className="business-wrap">
            <div className="pb70">
              <div className="wrap">
                <div className="infor mt0">
                  <div
                    className="infor-tit m-lf34"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="true"
                  >
                    관제시스템 특화 기능
                  </div>
                </div>
                <div className="img img1">
                  <div
                    className="in"
                    style={{ 'background-size': 'contain' }}
                  ></div>
                </div>
              </div>
              <div className="wrap control-screen">
                <div className="infor">
                  <div
                    className="infor-tit m-lf34"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="true"
                  >
                    관제시스템 화면
                  </div>
                </div>
                <ul>
                  <li>
                    <div className="img img01">
                      <div className="in"></div>
                    </div>
                  </li>
                  <li>
                    <div className="img img02">
                      <div className="in"></div>
                    </div>
                  </li>
                  <li>
                    <div className="img img03">
                      <div className="in"></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="control-function">
                <div className="wrap infor mt0">
                  <div
                    className="infor-tit m-lf34"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="true"
                  >
                    관제시스템 기능
                  </div>
                </div>
                <ul className="wrap control-function-list">
                  <li className="list">
                    <div className="img img01">
                      <div className="in"></div>
                    </div>
                    <div className="txt">
                      <div className="tit-box">
                        <p>제어 기능</p>
                      </div>
                      <ul>
                        <li>리셋</li>
                        <li>충전정지</li>
                        <li>펌웨어업데이트</li>
                        <li>충전량 제어</li>
                        <li>SOC 상한값 설정</li>
                        <li>커넥터 별 제어</li>
                      </ul>
                    </div>
                  </li>
                  <li className="list">
                    <div className="img img02">
                      <div className="in"></div>
                    </div>
                    <div className="txt">
                      <div className="tit-box">
                        <p>충전사업별 기능</p>
                        <span>
                          물류 / 운수에 특화된 충전기 제어시스템 및 통계기능
                        </span>
                      </div>
                      <div className="txt-box">
                        <strong>운수</strong>
                        <ul>
                          <li>버스순차충전</li>
                          <li>커넥터별 충전기 제어</li>
                          <li>SOH 예측 기능</li>
                          <li>차량 기준 충전량 조회</li>
                          <li>요일별 SOC 상한치 설정(노선기준)</li>
                        </ul>
                      </div>
                      <div className="txt-box">
                        <strong>물류</strong>
                        <ul>
                          <li>법인 소속 차량 월별 충전량 기반 정산기능</li>
                          <li>법인 관리차량 이력조회</li>
                          <li>충전소별 충전량/수익 분석</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="wrap control-manufacturer">
                <div className="infor">
                  <div
                    className="infor-tit m-lf34"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="true"
                  >
                    연동가능 충전기 제조사
                  </div>
                </div>
                <div className="img">
                  <div className="in"></div>
                </div>
              </div>
              <div className="wrap control-brand">
                <div className="infor">
                  <h3
                    data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-once="true"
                  >
                    Brand Identity
                  </h3>
                </div>
                <div
                  className="infor-txt"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  ELVIS의 반듯하고 무게 있는 로고의 형태는 전기차 충전분야의
                  전문성과 신뢰감을 나타내고 <br />
                  LS의 “L”과 E-link, Energy 를 뜻하는 “E”를 의미하는 심볼을
                  사용하였습니다.
                </div>
                <div className="img symbol">
                  <div className="in"></div>
                </div>
                <div className="color">
                  <span className="color-tit">Color</span>
                  <ul>
                    <li className="blue">
                      <div className="color-name">ELVIS Blue</div>
                      <div className="color-info">
                        <p>#091C54</p>
                        <p>Process Color : C100 M95 Y34 K36</p>
                      </div>
                    </li>
                    <li className="orange">
                      <div className="color-name">ELVIS Orange</div>
                      <div className="color-info">
                        <p>#E96600</p>
                        <p>Process Color : C4 M73 Y100 </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="infor">
                <div
                  className="infor-tit"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  서버구축이 불필요한 고객에게 최고의 가성비로 맞춤형 구독서비스
                  제공
                </div>
              </div> 
              <div className="img img2">
                <div
                  className="in"
                  style={{ 'background-size': 'cover' }}
                ></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlForm;
