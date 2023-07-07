import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import ScrollContainer from 'react-indiana-drag-scroll';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ControlForm = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <section className="ev-sect-01 evc-sect-01">
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          LS그룹의 전기차 초고속 충전 서비스
        </h2>
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          ELVIS 관제센터
        </h1>
      </section>

      <section className="evc-sect-02">
        <div className="ev-inner">
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            ELVIS는 충전-결제 자동화,
            <br />
            충전 인프라 모니터링, <br className="mo-br" />
            원격 제어·진단 등<br />
            전기차 충전소 통합 관제 <br className="mo-br" />
            솔루션을 제공하고 있습니다.
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            전기차 충전기의 정보를 수집하여 사용자에게 모바일 앱으로 충전기의 위치 및 상태 정보를 제공하고,
            <br />
            충전소 상태와 이용 현황에 대한 빅데이터 리포트도 축적해 활용하고 있습니다.
          </p>
          <img className="img pc-img" src="/img/ev/evc_sect02_bg.png" alt="" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" />
          <img className="img mo-img" src="/img/ev/evc_sect02_bg_m.png" alt="" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" />
        </div>

        <div className="txt-area">
          {/* <ScrollContainer className="scroll-container" horizontal={true}>
            <img src="/img/ev/evc_txt.png" alt="" />
            <img src="/img/ev/evc_txt.png" alt="" />
          </ScrollContainer>*/}
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="500">
            Time flies, but good news is we are the ELVIS.
          </p>
        </div>
      </section>

      <section className="evc-sect-03">
        <div className="ev-inner">
          <p data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            ELVIS manages your time.
          </p>
          <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <span>법인전기차 운영 고객을 위한 </span>
            <br />
            '더 차별화된 충전소 솔루션'{' '}
          </h1>
          <p className="txt" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            엘에스이링크는 전국적으로 구축되어 있는
            <br />
            버스차고지, 물류센터에 최적화된 전기자동차 <br />
            솔루션을 제공함으로써 당신만의 전기자동차 <br />
            Fleet 운영에 한 발 더 다가갑니다.
          </p>

          <div className="link-wp">
            <a
              className="link"
              target="_blank"
              href="https://elvis.lselink.com/login"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              ELVIS 관제센터 바로가기
              <img src="/img/ev/evc_arrow.png" alt="" />
            </a>
          </div>
        </div>
      </section>

      <section className="evc-sect-04">
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
            <a target="_blank" href="">
              <img src="/img/ev/ev_sect05_banner_btn1.png" alt="" />
            </a>
            <a target="_blank" href="">
              <img src="/img/ev/ev_sect05_banner_btn2.png" alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ControlForm;
