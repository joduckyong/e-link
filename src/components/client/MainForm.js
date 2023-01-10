import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientPopup } from 'store/popupReducer';
import { selectClientBoard } from 'store/boardReducer';
import { useCookies } from 'react-cookie';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);
gsap.registerPlugin(ScrollTrigger);

const MainForm = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollCur, setScrollCur] = useState(0);
  const [scrollView, setScrollView] = useState(false);
  const scrollRef = useRef();
  const scrollStyleChange = useRef();
  const [popupCookies, setPopupCookies] = useCookies();

  const dispatch = useDispatch();
  const popupList = useSelector((state) => state.popupReducer);
  const boardList = useSelector((state) => state.boardReducer.data);

  useEffect(() => {
    const newList = { popupId: 'POP', pageIndex: 1 };
    dispatch(selectClientPopup(newList));
  }, [dispatch]);

  useEffect(() => {
    const newList = { boardId: 'PRE', pageIndex: 1 };
    dispatch(selectClientBoard(newList));
  }, [dispatch]);

  useEffect(() => {
    AOS.init();
  });

  function onScroll() {
    setScrollTop(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    setScrollCur(scrollRef.current.getBoundingClientRect().top);
  }, [scrollCur]);

  useEffect(() => {
    if (scrollCur > scrollTop) {
      setScrollView(false);
    } else if (scrollTop > scrollCur && scrollTop < Number(scrollCur + 500)) {
      setScrollView(true);
      scrollStyleChange.current.style = '';
    } else if (scrollTop > Number(scrollCur + 500)) {
      setScrollView(false);
      scrollStyleChange.current.style = 'transform:scale(1);bottom:0';
    }
  }, [scrollCur, scrollTop]);

  useEffect(() => {
    const sections = gsap.utils.toArray('.panel');
    gsap.to(sections, {
      scrollTrigger: {
        trigger: '.container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      yPercent: -100 * (sections.length - 1),
    });

    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    popupList.data.forEach((el) => mainPopup(el.popupId, el.popupHeight, el.popupWidth));
  }, [popupList]);

  const mainPopup = (id, top, left) => {
    if (!popupCookies['POPUP_' + id]) {
      let tops = Number(parseInt(top) + 220);
      const popupX = window.screen.width / 2 - left / 2;
      const popupY = window.screen.height / 2 - tops / 2;
      window.open('/popup/' + id, id, 'width=' + left + ',height=' + tops + ',left=' + popupX + ',top=' + popupY);
    }
  };

  return (
    <div className="main">
      <div className="main-visual">
        <div className="wrap">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            <span>EV Charging Innovation</span>
            <span>for tomorrow</span>
          </h1>
          <div className="search" data-aos="fade-up" data-aos-duration="1000">
            <div className="input">
              <input type="text" placeholder="전기차충전소 찾기" />
              <button>
                <img src="/img/main/ico-search.svg" alt="검색" />
              </button>
            </div>
            <div className="recom">
              <NavLink to="">#서울</NavLink>
              <NavLink to="">#경기</NavLink>
              <NavLink to="">#부산</NavLink>
            </div>
          </div>
        </div>
        <div className="video-wrap">
          <video muted autoPlay loop>
            <source src="/video/main.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="con1">
        <div className="wrap">
          <div className="tit" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            LS E-Link는 보다 깨끗하고 안전한
            <br />
            전기차 충전 솔루션으로
            <br />더 큰 가치를 만들어 나갑니다.
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

      <div className="con2" ref={scrollRef}>
        <div className={scrollView ? 'con2-container on' : 'con2-container'} ref={scrollStyleChange}>
          <section className="section intro" data-section-color="transparent">
            <div>
              <article className="_intro">
                <div className="intro-head-wrapper is-active">
                  <strong className="main-section-headline">BUSINESS</strong>
                  <div className="btn-area">
                    <span>
                      LS E-Link는 <br className="m-block" />
                      고도의 기술력을 가지고
                      <br /> EV Charging 시장 변화에 <br className="m-block" />
                      발맞춰 지속적인 발전을
                      <br />
                      이루어 나가고 있습니다.<i className="icon-arrow-right-bk-30"></i>
                    </span>
                  </div>
                </div>
                <div className="visual">
                  <div className="_visual">
                    <video muted autoPlay loop>
                      <source src="/video/con2-video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>

      <div className="con3">
        <div className="container">
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                speed={1000}
                mousewheel={true}
                pagination={{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="slide-bg" style={{ background: '#EC6800 url(/img/main/con3-img1.jpg) no-repeat', backgroundSize: 'cover' }}>
                      <div className="slide-inner">
                        <h3 className="text">전기차 충전사업</h3>
                        <p className="desc">
                          현장 맞춤형 충전 인프라 구축 <br />및 충전서비스 제공
                        </p>
                        <NavLink to="/business/ev/transportation" className="link">
                          VIEW MORE
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="slide-bg" style={{ background: '#12A84E url(/img/main/con3-img2.jpg) no-repeat', backgroundSize: 'cover' }}>
                      <div className="slide-inner">
                        <h3 className="text">
                          신재생에너지 융합형
                          <br />
                          충전 인프라 구축
                        </h3>
                        <p className="desc">
                          전기차 충전장 캐노피 등에 태양광을 설치, <br />
                          신재생에너지 발전 사업
                        </p>
                        <NavLink to="/business/e-link/renewable" className="link">
                          VIEW MORE
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="slide-bg" style={{ background: '#1E2F63 url(/img/main/con3-img3.jpg) no-repeat', backgroundSize: 'cover' }}>
                      <div className="slide-inner">
                        <h3 className="text">
                          관제시스템 구축·구독 <br />
                          서비스
                        </h3>
                        <p className="desc">
                          고객 특화 기능의 관제시스템 <br />
                          구축 서비스 제공
                        </p>
                        <NavLink to="/business/e-link/control" className="link">
                          VIEW MORE
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>

      <div className="con4">
        <div className="wrap index-action">
          <div id="ourvalue" className="pc-show">
            <div className="area-wrap">
              <div className="left" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                <div className="lf-wrap">
                  <div className="big-tit">
                    내일의 에너지를
                    <br />
                    충전합니다.
                  </div>
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
              <div className="big-tit">
                내일의 에너지를
                <br />
                충전합니다.
              </div>
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
          <div className="s-tit" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            TECHNOLOGICAL INNOVATION
          </div>
          <div className="main-tit" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300">
            LS E-Link는 <br className="m-block" />
            전기자동차 충전인프라 <br className="m-block" />
            부문에 혁신적인 <br className="pc-block" />
            기술력을 <br className="m-block" />
            남기며 성장하고 있습니다.
            <br />
            차별화된 LS E-Link의 <br className="m-block" />
            충전 솔루션을 경험해보세요.
          </div>
          <Swiper
            slidesPerView={2.4}
            centeredSlides={true}
            spaceBetween={0}
            loop={true}
            speed={1200}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            breakpoints={{
              780: {
                slidesPerView: 2.4,
                spaceBetween: 0,
              },
            }}
            onSwiper={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
              {/* <div className="swiper-slide"> */}
              <div className="img">
                <img src="/img/main/con5-img1.png" alt="" />
              </div>
              <div className="txt">
                <div className="slide-tit">
                  초급속 / 천장형 / 전력분배 /<br />
                  고객맞춤형 충전솔루션
                </div>
                <p>
                  LS E-Link는 전기자동차 충전인프라 부문에 <br />
                  혁신적인 기술력을 남기며 성장하고 있습니다. <br />
                  차별화된 LS E-Link의 충전 솔루션을 경험해 보세요.
                </p>
              </div>
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <div className="swiper-slide"> */}
              <div className="img">
                <img src="/img/main/con5-img2.png" alt="" />
              </div>
              <div className="txt">
                <div className="slide-tit">
                  물류배송 / 버스운수 환경에 <br />
                  특화된 ELVIS 관제시스템
                </div>
                <p>
                  ELVIS 관제시스템은 물류배송과 버스운수 사업자들에게 <br />
                  전기트럭/전기버스의 안정적인 운행을 위한 최적의 <br />
                  순차충전 / 충전스케쥴링을 제공하고 있습니다.
                  <br />
                  ELVIS만의 특별한 서비스를 직접 체험해 보세요
                </p>
              </div>
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <div className="swiper-slide"> */}
              <div className="img">
                <img src="/img/main/con5-img3.png" alt="" />
              </div>
              <div className="txt">
                <div className="slide-tit">
                  업계최고 전기차충전인프라 <br />
                  시공능력
                </div>
                <p>
                  LS E-Link는 업계최고 충전인프라 시공능력과 IT 기술력을 <br />
                  바탕으로 전기자동차 충전시장을 선도해 가고 있습니다. <br />
                  LS E-Link와 함께 성장해 보세요.
                </p>
              </div>
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide>
              {/* <div className="swiper-slide"> */}
              <div className="img">
                <img src="/img/main/con5-img4.png" alt="" />
              </div>
              <div className="txt">
                <div className="slide-tit">
                  인프라 투자 / 자금조달 / 운영 Total <br />
                  Solution을 제공하는 진정한 파트너
                </div>
                <p>
                  LS E-Link는 충전사업을 원하는 고객에게 인프라 투자, <br />
                  자금조달, 및 운영 등 전기차 충전사업에 필요한 total solution을 <br />
                  제공하는 진정한 파트너로 거듭나고 있습니다.
                  <br />
                  LS E-Link의 파트너가 되어보세요.
                </p>
              </div>
              {/* </div> */}
            </SwiperSlide>
            <div className="control">
              <div className="swiper-button-prev" ref={navigationPrevRef}></div>
              <div className="swiper-button-next" ref={navigationNextRef}></div>
            </div>
          </Swiper>
          {/* </div> */}
          {/* </div> */}
        </div>
        <div className="con5-video">
          <video muted autoPlay loop>
            <source src="video/technological-innovation.mp4" type="video/mp4" />
          </video>
          <img style={{ position: 'absolute', zIndex: 1, top: 0, height: '100%', width: '100%' }} src="/img/main/1296.png" alt="" />
        </div>
      </div>
      <div className="con6">
        <div className="in"></div>
      </div>
      <div className="con7">
        <div className="wrap">
          <div className="main-tit" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            보도자료
          </div>
          <NavLink to="/pr/press-list" className="more">
            <img src="/img/main/ico-plus.svg" alt="" />
          </NavLink>
          <ul data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            {boardList
              .filter((list, index) => index < 3)
              .map((list, index) => (
                <li key={index}>
                  <NavLink to={`/pr/press-view/${list.boardId}`}>
                    <div className="news-name">{list.createdDatetime}</div>
                    <div className="news-tit">{list.boardTitle}</div>
                    <p>{list.boardContents.length > 126 ? list.boardContents.substr(0, 126) + '...' : list.boardContents}</p>
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="con8">
        <div className="wrap">
          <div className="txt-area">
            <div className="main-tit" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              LS E-Link에서
              <br />
              함께 성장할 인재를 기다립니다.
            </div>
            <NavLink to="/recruit/posting" className="more" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              VIEW MORE
            </NavLink>
          </div>
          <ul>
            <li data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="700">
              <NavLink to="/recruit/people">
                <i></i>
                인재상
              </NavLink>
            </li>
            <li data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="700">
              <NavLink to="/recruit/benefits">
                <i></i>
                복리후생
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
