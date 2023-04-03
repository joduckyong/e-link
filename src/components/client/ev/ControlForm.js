import React from 'react';

const ControlForm = () => {
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
          <img src="/img/ev/evc_txt.png" alt="" />
          <img src="/img/ev/evc_txt.png" alt="" />
        </div>
      </section>

      <section className="evc-sect-03">
        <div className="ev-inner">
          <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            시간은 빠르게 지나가 버립니다.
            <br />
            좋은 소식은 말이죠, <br className="mo-br" />
            우리가 ELVIS라는 것이죠. <br />
            당신의 소중한 시간, <br className="mo-br" />
            ELVIS가 빠르게 채워드릴게요.
          </h1>
          <p data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            Charge your time with ELVIS
          </p>
          <div className="link-wp">
            <a className="link" href="" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
              ELVIS 관제센터 바로가기
              <img src="/img/ev/evc_arrow.png" alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ControlForm;
