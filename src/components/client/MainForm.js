import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


SwiperCore.use([Navigation, Pagination]);
gsap.registerPlugin(ScrollTrigger);

const MainForm = () => {

    useEffect(() => {
        AOS.init();
    });

    useEffect(() => {
        const sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
          scrollTrigger: {
            trigger: '.container',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
          yPercent: -100 * (sections.length - 1)
        });
    
        ScrollTrigger.refresh();
      }, []);

    return (
        <>
            <div className="main-visual">
                <div className="wrap">
                    <h1 data-aos="fade-right" data-aos-duration="1000">
                        <span>EV Charging Innovation</span>
                        <span>for tomorrow</span>
                    </h1>
                    <div className="search" data-aos="fade-up"  data-aos-duration="1000">
                        <div className="input">
                            <input type="text" placeholder="전기차충전소 찾기" />
                            <button><img src="/img/main/ico-search.svg" alt="검색" /></button>
                        </div>
                        <div className="recom">
                            <NavLink to="">#서울</NavLink>
                            <NavLink to="">#경기</NavLink>
                            <NavLink to="">#부산</NavLink>
                        </div>
                    </div>
                </div>
                <div className="video-wrap">
                    <video poster="/resources/front/ko/video/main-visual.jpg" autoPlay muted loop playsInline>
                        <source src="http://thon.sibizi.me/e-link/html/video/main.mov" type="video/quicktime" />
                    </video>
                </div>
            </div>
            <div className="con1">
                <div className="wrap">
                    <div className="tit" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                        LS E-Link는 보다 깨끗하고 안전한<br />전기차 충전 솔루션으로<br />더 큰 가치를 만들어 나갑니다.
                    </div>
                    <ul>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <NavLink to="">
                                <div className="s-tit">충전기 설치신청</div>
                                <p>전기차 충전 인프라 구축이 필요하신가요?</p>
                            </NavLink>
                        </li>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <NavLink to="">
                                <div className="s-tit">고장신고</div>
                                <p>고장이 나셨나요? 빠르게 대응하겠습니다.</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="con2">
                <div className="con2-container">
                    <section className="section intro" data-section-color="transparent">
                        <div>
                            <article className="_intro">
                                <div className="intro-head-wrapper is-active">
                                    <strong className="main-section-headline">BUSINESS</strong>
                                    <div className="btn-area">
                                        <span>LS E-Link는 고도의 기술력을 가지고<br className="pc-block" />EV Charging 시장 변화에 발맞춰 지속적인 발전을<br className="pc-block" />이루어 나가고 있습니다.<i className="icon-arrow-right-bk-30"></i></span>
                                    </div>
                                </div>
                                <div className="visual">
                                    <div className="_visual">
                                        <video poster="/resources/front/ko/video/main-visual.jpg" autoPlay muted loop playsInline>
                                            <source src="/img/main/con2-video.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </article>

                        </div>
                    </section>
                </div>
            </div>
            <div className="con3">
                <div className="show-only-desktop">
                    <div className="container">
                        <section className="panel one" style={{background: "url(/img/main/con3-img1.jpg) no-repeat", backgroundSize: "cover"}}>
                        <div className="slide-inner">
                            <div className="wrap">
                                <h3 className="text">전기차 충전사업</h3>
                                <p className="desc">현장 맞춤형 충전 인프라 구축 및<br /> 충전서비스 제공</p>
                                <NavLink to="/view/introduce/mobile.do" target="_self" className="link">VIEW MORE</NavLink>
                            </div>
                        </div>
                        </section>
                        <section className="panel two" style={{background: "url(/img/main/con3-img2.jpg) no-repeat", backgroundSize: "cover"}}>
                            <div className="slide-inner">
                                <div className="wrap">
                                    <h3 className="text">신재생에너지 융합형<br /> 충전 인프라 구축</h3>
                                    <p className="desc">전기차 충전장 캐노피 등에 태양광을 설치,<br /> 신재생에너지 발전 사업</p>
                                    <NavLink to="/view/introduce/mobile.do" target="_self" className="link">VIEW MORE</NavLink>
                                </div>
                            </div>
                        </section>
                        <section className="panel three" style={{background: "url(/img/main/con3-img3.jpg) no-repeat", backgroundSize: "cover"}}>
                            <div className="slide-inner">
                                <div className="wrap">
                                    <h3 className="text">관제시스템  구축·구독<br /> 서비스</h3>
                                    <p className="desc">고객 특화 기능의 관제시스템<br /> 구축 서비스 제공</p>
                                    <NavLink to="/view/introduce/mobile.do" target="_self" className="link">VIEW MORE</NavLink>
                                </div>
                            </div>
                        </section>
                    </div>  
                </div>
                <div className="mobile-show">
                    <div className="swiper mySwiper">
                       <div className="swiper-wrapper">
                       <div className="swiper-slide" style={{background: "url(/img/main/con3-img1.jpg) no-repeat", backgroundSize: "cover"}}>
                           <div className="slide-inner" style={{opacity: 1, transform: "translate(0px, 0px)"}}>
                                <h3 className="text">전기차 충전사업</h3>
                                <p className="desc">현장 맞춤형 충전 인프라 구축 및 충전서비스 제공</p>
                                <NavLink to="/view/introduce/mobile.do" target="_self" className="link">VIEW MORE</NavLink>
                            </div>
                       </div>
                       <div className="swiper-slide" style={{background: "url(/img/main/con3-img2.jpg) no-repeat", backgroundSize: "cover"}}>
                           <div className="slide-inner" style={{opacity: 1, transform: "translate(0px, 0px)"}}>
                                <h3 className="text">전기차 충전사업</h3>
                                <p className="desc">현장 맞춤형 충전 인프라 구축 및 충전서비스 제공</p>
                                <NavLink to="/view/introduce/mobile.do" target="_self" className="link">VIEW MORE</NavLink>
                            </div>
                       </div>
                       <div className="swiper-slide" style={{background: "url(/img/main/con3-img3.jpg) no-repeat", backgroundSize: "cover"}}>
                           <div className="slide-inner" style={{opacity: 1, transform: "translate(0px, 0px)"}}>
                                <h3 className="text">전기차 충전사업</h3>
                                <p className="desc">현장 맞춤형 충전 인프라 구축 및 충전서비스 제공</p>
                                <NavLink to="/view/introduce/mobile.do" target="_self" className="link">VIEW MORE</NavLink>
                            </div>
                       </div>
                    </div>
                    </div>
                </div>            
            </div>
            

            <div className="con4">
                <div className="wrap index-action">
                    <div id="ourvalue" className="pc-show">
                        <div className="area-wrap">
                            <div className="left" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                                <div className="lf-wrap">
                                    <div className="big-tit">내일의 에너지를<br />충전합니다.</div>
                                    <img src="/img/common/logo.svg" alt="" />
                                </div>
                            </div>
                            <div className="right">
                                <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
                                    <img src="/img/main/con4-img1.png" alt="" />
                                    <div className="txt">
                                        <div className="small">전선·전력분야</div>
                                        <div className="big">글로벌 리딩기업 LS</div>
                                    </div>
                                </div>
                                <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
                                    <img src="/img/main/con4-img2.png" alt="" />
                                    <div className="txt">
                                        <div className="small">전기화시대 글로벌리딩기업 LS와</div>
                                        <div className="big">친환경에너지서비스 선도기업 E1</div>
                                    </div>
                                </div>
                                <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
                                    <img src="/img/main/con4-img3.png" alt="" />
                                    <div className="txt">
                                        <div className="big">Fleet Management로</div>
                                        <div className="small">복잡하고 어려운 물류환경에서의 유연한 적용</div>
                                    </div>
                                </div>
                                <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
                                    <img src="/img/main/con4-img4.png" alt="" />
                                    <div className="txt">
                                        <div className="small">'함께하여 더 큰 가치'</div>
                                        <div className="big">LS Partnetship</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-show">
                        <div className="left">
                            <div className="big-tit">내일의 에너지를<br />충전합니다.</div>
                            <img src="/img/common/mainlogo.svg" alt="" />
                        </div>
                        <div className="right">
                            <div>
                                <img src="/img/main/con4-img1.png" alt="" />
                                <div className="txt">
                                    <div className="small">전선·전력분야</div>
                                    <div className="big">글로벌 리딩기업 LS</div>
                                </div>
                            </div>
                            <div>
                                <img src="/img/main/con4-img2.png" alt="" />
                                <div className="txt">
                                    <div className="small">전기화시대 글로벌리딩기업 LS와</div>
                                    <div className="big">친환경에너지서비스 선도기업 E1</div>
                                </div>
                            </div>
                            <div>
                                <img src="/img/main/con4-img3.png" alt="" />
                                <div className="txt">
                                    <div className="big">Fleet Management로</div>
                                    <div className="small">복잡하고 어려운 물류환경에서의 유연한 적용</div>
                                </div>
                            </div>
                            <div>
                                <img src="/img/main/con4-img4.png" alt="" />
                                <div className="txt">
                                    <div className="small">'함께하여 더 큰 가치'</div>
                                    <div className="big">LS Partnetship</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="con5">
                <div className="con5-textarea">
                    <div className="s-tit" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">TECHNOLOGICAL INNOVATION</div>
                    <div className="main-tit" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300">
                        LS E-Link는 전기자동차 충전인프라 부문에 혁신적인<br className="tb-block" />기술력을 남기며 성장하고 있습니다.<br />차별화된 LS E-Link의 충전 솔루션을 경험해보세요.
                    </div>
                    <div className="swiper con5-swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="img">
                                    <img src="/img/main/con5-img1.png" alt="" />
                                </div>
                                <div className="txt">
                                    <div className="slide-tit">초급속 / 천장형 / 전력분배 /<br />고객맞춤형 충전솔루션</div>
                                    <p>LS E-Link는 전기자동차 충전인프라 부문에 <br />혁신적인 기술력을 남기며 성장하고 있습니다. <br />차별화된 LS E-Link의 충전 솔루션을 경험해 보세요.</p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="img">
                                    <img src="/img/main/con5-img2.png" alt="" />
                                </div>
                                <div className="txt">
                                    <div className="slide-tit">물류배송 / 버스운수 환경에 <br />특화된 ELVIS 관제시스템</div>
                                    <p>ELVIS 관제시스템은 물류배송과 버스운수 사업자들에게 <br />전기트럭/전기버스의 안정적인 운행을 위한 최적의 <br />순차충전 / 충전스케쥴링을 제공하고 있습니다.<br />
                                        ELVIS만의 특별한 서비스를 직접 체험해 보세요</p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="img">
                                    <img src="/img/main/con5-img3.png" alt="" />
                                </div>
                                <div className="txt">
                                    <div className="slide-tit">업계최고 전기차충전인프라 <br />시공능력</div>
                                    <p>LS E-Link는 업계최고 충전인프라 시공능력과 IT 기술력을 <br />바탕으로 전기자동차 충전시장을 선도해 가고 있습니다. <br />LS E-Link와 함께 성장해 보세요.</p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="img">
                                    <img src="/img/main/con5-img4.png" alt="" />
                                </div>
                                <div className="txt">
                                    <div className="slide-tit">인프라 투자 / 자금조달 / 운영 Total <br />Solution을 제공하는 진정한 파트너</div>
                                    <p>LS E-Link는 충전사업을 원하는 고객에게 인프라 투자, <br />자금조달, 및 운영 등 전기차 충전사업에 필요한 total solution을 <br />제공하는 진정한 파트너로 거듭나고 있습니다.<br />
                                        LS E-Link의 파트너가 되어보세요.</p>
                                </div>
                            </div>class=
                        </div>
                        <div className="control">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div> 
                        </div>
                    </div>
                </div>
                <div className="con5-video">
                    <video poster="/resources/front/ko/video/main-visual.jpg" autoPlay muted loop playsInline>
                        <source src="http://thon.sibizi.me/e-link/img/main/technological innovation.mp4" type="video/mp4" />
                    </video>
					<img style={{position:"absolute", zIndex:1, top:0, height: "100%", width: "100%"}} src="/img/main/1296.png" alt="" />
                </div>
            </div>
            <div className="con6">
                <div className="in"></div>
            </div>
            <div className="con7">
                <div className="wrap">
                    <div className="main-tit" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">보도자료</div>
                    <NavLink to="" className="more"><img src="/img/main/ico-plus.svg" alt="" /></NavLink>
                    <ul data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        <li>
                            <div className="news-name">중앙일보</div>
                            <div className="news-tit">LS그룹, EV 충전 사업 본격 진출... E-Link 설립</div>
                            <p>LS그룹(회장 구자은)이 EV 충전 신규법인 설립 등 전기차 사업에 드라이브를 걸고 있어 관심을 모은다. LS의 지주회사인 ㈜LS는 ‘EV 충전 인프라 구축과 운영 사업 개발’을 위해 신규법인 LS E-Link(엘에스이 ..</p>
                        </li>
                        <li>
                            <div className="news-name">중앙일보</div>
                            <div className="news-tit">LS그룹, EV 충전 사업 본격 진출... E-Link 설립</div>
                            <p>LS그룹(회장 구자은)이 EV 충전 신규법인 설립 등 전기차 사업에 드라이브를 걸고 있어 관심을 모은다. LS의 지주회사인 ㈜LS는 ‘EV 충전 인프라 구축과 운영 사업 개발’을 위해 신규법인 LS E-Link(엘에스이 ..</p>
                        </li>
                        <li>
                            <div className="news-name">중앙일보</div>
                            <div className="news-tit">LS그룹, EV 충전 사업 본격 진출... E-Link 설립</div>
                            <p>LS그룹(회장 구자은)이 EV 충전 신규법인 설립 등 전기차 사업에 드라이브를 걸고 있어 관심을 모은다. LS의 지주회사인 ㈜LS는 ‘EV 충전 인프라 구축과 운영 사업 개발’을 위해 신규법인 LS E-Link(엘에스이 ..</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="con8">
                <div className="wrap">
                    <div className="txt-area">
                        <div className="main-tit" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">LS E-Link에서<br />함께 성장할 인재를 기다립니다.</div>
                        <NavLink to="" className="more" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">VIEW MORE</NavLink>
                    </div>
                    <ul>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="700">
                            <NavLink to="">
                               <i></i>
                               인재상
                            </NavLink>
                        </li>
                        <li data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="700">
                            <NavLink to="">
                               <i></i>
                               복리후생
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MainForm;