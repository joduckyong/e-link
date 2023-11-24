import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const IndexForm = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <section className="ev-sect-01">
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          신뢰할 수 있는 브랜드 LS E-Link의
        </h2>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          전기차 초고속
          <br />
          충전 서비스, ELVIS
        </h1>
      </section>

      <section className="ev-sect-02">
        <div className="ev-inner">
          <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Fast & Ultra-Rapid
          </h2>
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            EV Charging
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            ELVIS는 친환경 에너지 사업의 세계적인 리더 E1과
            <br />
            전기·전자 및 소재, 에너지 분야 글로벌 리더 <br className="mo-br" />
            LS가 공동 설립한
            <br />
            LS E-Link의 초고속 전기차 충전서비스 입니다.
            <br />
          </p>
        </div>
      </section>

      <section className="ev-sect-03">
        <div className="ev-inner">
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            LS E-Link의 맞춤형 EV 충전 솔루션 ELVIS는
            <br className="pc-br" />
            LS 그룹의 10년 간의 전력 경험과 함께 고객에게
            <br className="pc-br" />
            친환경 사업으로 확장할 수 있는 포괄적인 충전 솔루션을 제공합니다.
          </h1>
          <ul>
            <li data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
              <img src="/img/ev/ev_sect03_li01.png" alt="" />
              <div className="txt-wp">
                <h2>전기버스 충전 솔루션 </h2>
                <p>
                  현장상황, 예상 사용량에 맞추어 충전 솔루션을 <br className="pc-br" />
                  제공합니다.
                </p>
              </div>
            </li>
            <li data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
              <div className="txt-wp">
                <h2>
                  물류 환경에 최적화된
                  <br />
                  충전 관제 솔루션
                </h2>
                <p>
                  ELVIS는 고객사의 시간·공간 제약, 규모, 전력환경 등을 <br className="pc-br" />
                  모두 고려하여 개별 물류 환경에 최적화된 충전 인프라 맞춤 <br className="pc-br" />
                  솔루션을 제공합니다.
                </p>
              </div>
              <img src="/img/ev/ev_sect03_li02.png" alt="" />
            </li>
            <li data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
              <img src="/img/ev/ev_sect03_li03.png" alt="" />
              <div className="txt-wp">
                <h2>
                  전기차 Fleet 전용
                  <br />
                  에너지센터
                </h2>
                <p>
                  ELVIS는 전기차 사용자에게 쉽고 빠른 충전환경을 제공하고 <br className="pc-br" />
                  배터리 관리에서 차량 경정비, 자동세차에 이르기까지 <br className="pc-br" />
                  All-in-one care service를 제공합니다.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="ev-sect-04">
        <div className="ev-inner">
          <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            150개 이상 <br />
            고속 충전소 성장중
          </h1>
          <p data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            ELVIS는 향후 5년 동안 수백 개의 고속 충전기를 설치하여 <br />
            3배 이상 규모를 늘릴 예정이며, 전기차 초고속 충전 인프라 구축에 박차를 가하고 있습니다.
          </p>
        </div>
      </section>

      <section className="ev-sect-05">
        <div className="ev-inner">
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Brand Identity
          </h1>
          <h4 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            ELVIS의 반듯하고 무게 있는 로고 형태는 전기차 충전분야의 전문성과 신뢰감을 나타내고
            <br className="pc-br" />
            LS의 “L”과 E-link, Energy 를 뜻하는 “E”를 의미하는 심볼을
            <br className="pc-br" />
            사용하였습니다.
          </h4>
          <div className="logo" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></div>
          <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Color
          </h2>
          <ul className="color-wp" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <li>
              <h3>ELVIS Blue</h3>
              <p>
                #091C54
                <br />
                Process Color : C100 M95 Y34 K36
              </p>
            </li>
            <li>
              <h3>ELVIS Orange</h3>
              <p>
                #E96600
                <br />
                Process Color : C4 M73 Y100
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="ev-sect-06">
        <div className="ev-inner">
          <div className="con-wp">
            <span>
              <img src="/img/ev/ev_sect05_banner_icon.png" alt="" />
            </span>
            <div className="txt-wp">
              <p className="txt">Charge your time with ELVIS</p>
              <p className="tit">ELVIS - 전기차 충전 & 차계부</p>
            </div>
          </div>
          <div className="btn-wp">
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.lselink.elvis">
              <img src="/img/ev/ev_sect05_banner_btn1.png" alt="" />
            </a>
            <a target="_blank" href="https://apps.apple.com/kr/app/elvis/id6449213902">
              <img src="/img/ev/ev_sect05_banner_btn2.png" alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexForm;
