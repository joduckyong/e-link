import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';

const PeopleForm = () => {

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="sub sub05">
        <div className="sub-top">
            <div className="bg big-frame"></div>
            <div className="txt-wrap wrap">
                <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">인재상</h2>
                <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
                    <li><NavLink to="">채용정보</NavLink></li>
                    <li className="on">
                        <NavLink to="">인재상</NavLink>
                        <ul className="links">
                            <li><NavLink to="./../recruit/people.html" className="on">인재상</NavLink></li>
                            <li><NavLink to="./../recruit/benefits.html">복리후생</NavLink></li>
                            <li><NavLink to="./../recruit/posting.html">채용공고</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div className="content pb0">
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
                <div className="bg" data-bottom-center="left: 5%; right: 5%;" data-bottom="left: 0%; right: 0%;"></div>
                <div className="wrap">
                    <p data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">현재 진행중인 채용공고를 확인해 보세요.</p>
                    <NavLink to="" data-aos="flip-left" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">채용공고 보기</NavLink>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PeopleForm;