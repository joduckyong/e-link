import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
// import { ParallaxProvider, Parallax } from 'react-skrollr';

const PeopleForm = () => {
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
    <div className="sub sub05">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            인재상
          </h2>
          <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
            <li>
              <NavLink to="/">
                <img src="./../../img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                채용정보
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/company/lselink">회사소개</NavLink>
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
                  <NavLink to="/recruit/people" className="on">
                    채용정보
                  </NavLink>
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
                인재상
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/recruit/people" className="on">
                    인재상
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/recruit/benefits">복리후생</NavLink>
                </li>
                <li>
                  <NavLink to="/recruit/posting">채용공고</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/*<div className="content pb0">
            <div className="wrap">
                <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">LS E-Link는 LS 파트너십을 바탕으로<br />밝고, 창의적이며, 전문성을 가진 인재가 함께 만들어가는 회사입니다.</h3>
                <ul className="ideal-list">
                    <li className="list01">
                        <div className="img">
                            <div className="bg" data-top-top="background-position: 50% 50%;" data-center-top="background-position:100% 50%;"></div>
                        </div>
                        <div className="txt" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                            <div className="tit">Positive</div>
                            <p>밝은 기운과 긍정적인 Mind를 갖추고 함께 일하는 사람들과 더불어 상생을 도모하며, 윤리적 절차와 기본을 준수하는 인재</p>
                        </div>
                    </li>
                    <li className="list02">
                        <div className="txt" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                            <div className="tit">Creative</div>
                            <p>창의력을 바탕으로 변화와 혁신을 추구하며 가치를 창출하고 Global 기업으로의 성장을 주도하는 인재</p>
                        </div>
                        <div className="img">
                            <div className="bg" data-top-top="background-position: 50% 50%" data-center-top="background-position:0% 50%;"></div>
                        </div>
                    </li>
                    <li className="list03">
                        <div className="img">
                            <div className="bg" data-top-top="background-position: 50% 50%" data-center-top="background-position:100% 50%;"></div>
                        </div>
                        <div className="txt" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                            <div className="tit">Professional</div>
                            <p>자신의 분야에서 최고가 되기 위해 꾸준히 노력하며 Global 감각을 보유하고 세계 무대에서 경쟁할 수 있는 전문성과 열정을 가진 인재</p>
                        </div>
                    </li>
                </ul>                   
            </div>
            <div className="hire">
                <ParallaxProvider>
                    <Parallax>
                        <div className="bg" data-bottom-center="left: 5%; right: 5%;" data-bottom="left: 0%; right: 0%;"></div>
                    </Parallax>
                </ParallaxProvider>
                <div className="wrap">
                    <p data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">현재 진행중인 채용공고를 확인해 보세요.</p>
                    <NavLink to="/recruit/posting" data-aos="flip-left" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">채용공고 보기</NavLink>
                </div>
            </div>
        </div> */}

      <div className="content pb0" style={{ 'padding-top': '0' }}>
        <div className="title">
          <div className="inner">
            <p>Positive·Creative·Professional</p>
            <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
              LS E-Link는 LS 파트너십을 바탕으로 <br className="pc-block" />
              <span>
                밝고, 창의적이며, 전문성을 가진 인재가 <br className="pc-block" />
              </span>
              함께 만들어가는 회사입니다.
            </h3>
          </div>
        </div>
        <div className="wrap">
          <ul className="ideal-list">
            <li>
              <img src="/img/sub/sub05-1-ico1.png" alt="" />
              <p className="tit">Positive</p>
              <p className="txt">
                밝은 기운과 <span>긍정적 Mind</span>를 갖추고 함께 일하는 사람들과 더불어 <span>상생</span>을 도모하며, <span>윤리적 절차</span>와
                기본을 준수하는 인재
              </p>
            </li>
            <li>
              <img src="/img/sub/sub05-1-ico2.png" alt="" />
              <p className="tit">Creative</p>
              <p className="txt">
                <span>창의력</span>을 바탕으로 <span>변화와 혁신</span>을 추구하며 가치를 창출하고 Global 기업으로의 <span>성장을 주도</span>하는 인재
              </p>
            </li>
            <li>
              <img src="/img/sub/sub05-1-ico3.png" alt="" />
              <p className="tit">Professional</p>
              <p className="txt">
                자신의 분야에서 최고가 되기 위해 <span>꾸준히 노력</span>하며 Global 감각을 보유하고 세계 무대에서 경쟁할 수 있는 <span>전문성</span>
                과 <span>열정</span>을 가진 인재
              </p>
            </li>
          </ul>
          <NavLink to="/recruit/posting" className="btn">
            채용안내
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PeopleForm;
