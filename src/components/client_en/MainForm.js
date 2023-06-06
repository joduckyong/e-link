import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientPopup } from 'store/popupEnReducer';
import { selectClientBoard } from 'store/boardEnReducer';
import { useCookies } from 'react-cookie';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import classNames from 'classnames';
import Modal from './PopupForm';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Mousewheel, Autoplay]);
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
  const [carVal, setCarVal] = useState(0);

  const dispatch = useDispatch();
  const popupList = useSelector((state) => state.popupEnReducer.data);
  const boardList = useSelector((state) => state.boardEnReducer.data);

  const removeImgTag = (text) => {
    const regex = /<IMG(.*?)><br>/gi;
    return text.replace(regex, '').replace('<br>', '');
  };
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

  setTimeout(() => {
    setCarVal(carVal + 1);
    if (carVal === 4) {
      setCarVal(0);
    }
  }, 1000);

  return (
    <>
      {popupList
        .filter((list) => list.popupId !== popupCookies['POPUP_' + list.popupId])
        .map((list) => (
          <Modal
            popupLink={list.popupLink}
            fileNm={list.thumbNm}
            popupId={list.popupId}
            popupHeight={list.popupHeight}
            popupWidth={list.popupWidth}
            popupClose1={list.popupClose1}
            popupClose2={list.popupClose2}
          ></Modal>
        ))}
      <div className="main">
        <div className="main-visual">
          <div className="wrap">
            <h1 data-aos="fade-right" data-aos-duration="1000">
              <span>EV Charging Innovation</span>
              <span>for tomorrow</span>
            </h1>
            
            <div className="scroll_wp">
              <div className="bar_wp">
                <div className="bar"></div>
              </div>
              <h3>Scroll down</h3>
            </div>
          </div>
          <div className="video-wrap">
            <video src="/video/main.mp4" playsInline loop muted autoPlay></video>
          </div>
        </div>
        <div className="con1">
          <div className="wrap">
            <div className="tit" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
              LS E-Link
              <br className="m-block" /> creates greater value
              <br />
              with cleaner and safer
              <br />electric vehicle
              <br className="m-block" /> charging solutions.
            </div>
            <ul>
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <NavLink to="/en/contactus/consult">
                  <div className="s-tit">Charger Consultation Request</div>
                  <p>Do you need to build an electric vehicle charging infrastructure?</p>
                </NavLink>
              </li>
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <NavLink to="/en/contactus/inconvenience">
                  <div className="s-tit">Report complaints</div>
                  <p>Did something break down? We will respond quickly.</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="con2" ref={scrollRef}>
          <div className={classNames('con2-container', { on: scrollView })} ref={scrollStyleChange}>
            <section className="section intro" data-section-color="transparent">
              <div>
                <article className="_intro">
                  <div className="intro-head-wrapper is-active">
                    <strong className="main-section-headline">BUSINESS</strong>
                    <div className="btn-area">
                      <span>
                        LS E-Link  <br className="m-block" />
                        provides a total solution
                        <br />
                        including charging infrastructure construction,
                        <br />
                        investment consulting, and optimal fleet operation .<i className="icon-arrow-right-bk-30"></i>
                      </span>
                    </div>
                  </div>
                  <div className="visual">
                    <div className="_visual">
                      <video src="/video/con2-video.mp4" playsInline loop muted autoPlay></video>
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
                  // loop={true}
                  speed={1000}
                  mousewheel={true}
                  pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                  }}
                  onSlideChange={(e) => {
                    e.params.touchReleaseOnEdges = false;
                    e.params.mousewheel.releaseOnEdges = false;
                  }}
                  onReachBeginning={(e) => {
                    // console.log('init');
                    setTimeout(() => {
                      e.params.touchReleaseOnEdges = true;
                      e.params.mousewheel.releaseOnEdges = true;
                    }, 500);
                  }}
                  onReachEnd={(e) => {
                    // console.log('end');
                    setTimeout(() => {
                      e.params.touchReleaseOnEdges = true;
                      e.params.mousewheel.releaseOnEdges = true;
                    }, 500);
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide slide1">
                      <div className="slide-bg" style={{ background: '#EC6800 url() right bottom no-repeat' }}>
                        <div className="slide-inner">
                          <h3 className="text">EV Charging business</h3>
                          <p className="desc">
                            Establishment of customized charging  <br />infrastructure and provision of O&M service.
                          </p>
                          <div className="car-wrap">
                            <div className={classNames({ on: carVal === 0 || carVal === 1 })}>
                              <img src="/img/main/car.png" alt="" />
                            </div>
                            <div className={classNames({ on: carVal === 2 })}>
                              <img src="/img/main/car-on.png" alt="" />
                            </div>
                            <div className={classNames({ on: carVal === 3 })}>
                              <img src="/img/main/car-1.png" alt="" />
                            </div>
                            <div className={classNames({ on: carVal === 4 })}>
                              <img src="/img/main/car-2.png" alt="" />
                            </div>
                          </div>
                          <NavLink to="/en/business/ev/transportation" className="link">
                            VIEW MORE
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide slide2">
                      <div className="slide-bg" style={{ background: '#12A84E url(/img/main/con3-img2.png) right center no-repeat' }}>
                        <div className="slide-inner">
                          <h3 className="text">
                            Establishment of new and 
                            <br />
                            renewable energy convergence
                            <br />
                            charging infrastructure
                          </h3>
                          <p className="desc">
                            Establishment and operation consulting  <br className="m-block" />
                            of EV charging infrastructure  <br className="pc-block" />
                            linked to <br class="m-block" />
                            new and renewable energy generation.
                          </p>
                          <NavLink to="/en/business/e-link/renewable" className="link">
                            VIEW MORE
                          </NavLink>
                          <span className="cloud1">
                            <img src="/img/main/con3-img2-cloud1.png" alt="" />
                          </span>
                          <span className="cloud2">
                            <img src="/img/main/con3-img2-cloud2.png" alt="" />
                          </span>
                          <span className="cloud3">
                            <img src="/img/main/con3-img2-cloud3.png" alt="" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide slide3">
                      <div className="slide-bg" style={{ background: '#1E2F63 url(/img/main/con3-pad.png) 70% center no-repeat' }}>
                        <div className="slide-inner">
                          <h3 className="text">
                            EV CSMS
                            <br />
                          </h3>
                          <p className="desc">
                            Providing customer specific/vehicle  <br className="m-block" />
                            specialized function  <br className="pc-block" />
                            control system  <br className="m-block" />
                            establishment service.
                          </p>
                          <NavLink to="/en/business/e-link/control" className="link">
                            VIEW MORE
                          </NavLink>
                          <span className="air">
                            <img src="/img/main/air.png" alt="" />
                          </span>
                          <span className="cloud1">
                            <img src="/img/main/cloud1.png" alt="" />
                          </span>
                          <span className="cloud2">
                            <img src="/img/main/cloud2.png" alt="" />
                          </span>
                          <span className="cloud3">
                            <img src="/img/main/cloud3.png" alt="" />
                          </span>
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
                      Recharge tomorrow's energy
                    </div>
                    <img src="/img/common/logo.svg" alt="" />
                  </div>
                </div>
                <div className="right">
                  <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
                    <img src="/img/main/con4-img1.png" alt="" />
                    <div className="txt">
                      <div className="small">Electricity and power field</div>
                      <div className="big">Global leading company, LS</div>
                    </div>
                  </div>
                  <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
                    <img src="/img/main/con4-img2.png" alt="" />
                    <div className="txt">
                      <div className="small">
                        LS, a global leading company 
                        <br />
                        in the era of electrification and
                      </div>
                      <div className="big">
                        Eco-friendly energy 
                        <br />
                        leading company, E1
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
                    <img src="/img/main/con4-img3.png" alt="" />
                    <div className="txt">
                      <div className="big">Fleet Management</div>
                      <div className="small long">
                        Providing charging solutions optimized
                        <br />
                        for customer driving conditions
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
                    <img src="/img/main/con4-img4.png" alt="" />
                    <div className="txt">
                      <div className="small">'Greater value together'</div>
                      <div className="big">LS Partnership</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-show">
              <div className="left">
                <div className="big-tit">
                  Recharge 
                  <br />
                  tomorrow's energy
                </div>
                <img className="mo_logo" src="/img/common/logo.svg" alt="" />
              </div>
              <div className="right">
                <div>
                  <img src="/img/main/con4-img1.png" alt="" />
                  <div className="txt">
                    <div className="small">Electricity and power field</div>
                    <div className="big">Global leading company, LS</div>
                  </div>
                </div>
                <div>
                  <img src="/img/main/con4-img2.png" alt="" />
                  <div className="txt">
                    <div className="small">LS, a global leading company in the era of electrification and</div>
                    <div className="big">Eco-friendly energy leading company, E1</div>
                  </div>
                </div>
                <div>
                  <img src="/img/main/con4-img3.png" alt="" />
                  <div className="txt">
                    <div className="big">Fleet Management</div>
                    <div className="small long">Providing charging solutions optimized for customer driving conditions</div>
                  </div>
                </div>
                <div>
                  <img src="/img/main/con4-img4.png" alt="" />
                  <div className="txt">
                    <div className="small">'Greater value together'</div>
                    <div className="big">LS Partnership</div>
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
              LS E-Link is based on  <br className="m-block" />
              LS Group's technology  <br className="m-block" />
              in electricity and power.  <br />
              We are leading the technological innovation of EV charging infrastructure.
              <br />
              Experience the differentiated charging solution  <br className="m-block" />
              of LS E-Link.
            </div>
            <Swiper
              slidesPerView={1}
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
                  spaceBetween: 30,
                },
                1280: {
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
                      From charger to power <br class="m-block" /> grid connection<br class=" pc-block" />
                      Customized <br class="m-block" />charging solution
                  </div>
                  <p>
                      LS E-Link is based on LS Group's technology  <br class="m-block" />in electricity and power. <br class=" pc-block" />
                      We are leading the <br class="m-block" />technological innovation of EV charging infrastructure.<br class="pc-block" /><br class="m-block" />
                      Experience the differentiated charging solution <br class="m-block" />of LS E-Link.
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
                    Specialized in logistics delivery <br />
                    / bus transportation environment, <br />
                    ELVIS control system
                  </div>
                  <p>
                    The ELVIS control system provides optimal sequential <br class="m-block" />charging <br class="pc-block" />
                    /charging scheduling for the stable operation <br class="m-block" />of electric trucks <br class="pc-block" />
                    /electric buses to logistics delivery <br class="m-block" />and bus transportation operators. <br />
                    Experience the special service of ELVIS for yourself.<br />
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
                    Industry's best electric vehicle <br class="m-block" />charging <br class="pc-block" />
                    infrastructure<br class="m-block" /> construction capability
                  </div>
                  <p>
                    LS E-Link is leading the electric vehicle charging market <br />
                    based on the industry's best charging infrastructure <br class="m-block" />construction <br class="pc-block" />
                    capability and IT technology. <br class="m-block" />Grow with LS E-Link.
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
                    A true partner that provides <br />
                    a total solution for infrastructure<br />
                    investment/financing/operation
                  </div>
                  <p>
                    LS E-Link is a true partner that provides a total solution <br />
                    for electric vehicle charging business, including <br class="m-block" />infrastructure <br class="pc-block" />
                    investment, financing and operation, <br class="m-block" />to customers who want to do so. <br />
                    Become a partner of LS E-Link.
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
            {/* <video muted autoPlay loop className="con5-video-pc">
              <source src="/video/technological-innovation.mp4" type="video/mp4" />
            </video> */}

            <video src="/video/technological-innovation.mp4" playsInline loop muted autoPlay></video>
            <img style={{ position: 'absolute', zIndex: 1, top: 0, left: 0, height: '100%', width: '100%' }} src="/img/main/1296.png" alt="" />
          </div>
        </div>
        <div className="con6">
          {/*<div className="in"></div>*/}

          {/* <video muted autoPlay loop playsInline className="con6-video-pc">
            <source src="/video/main_con6_video.mp4" type="video/mp4" />
          </video> */}

          <video src="/video/main_con6_video.mov" playsInline loop muted autoPlay></video>
        </div>
        <div className="con7">
          <div className="wrap">
            <div className="main-tit" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              NEWS
            </div>
            <NavLink to="/en/pr/press-list" className="more">
              <img src="/img/main/ico-plus.svg" alt="" />
            </NavLink>
            <ul data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              {boardList
                .filter((list, index) => index < 3)
                .map((list, index) => (
                  <li key={index}>
                    <NavLink to={`/en/pr/press-view/${list.boardId}`}>
                      <div className="news-name">{list.createdDatetime}</div>
                      <div className="news-tit">{list.boardTitle}</div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            removeImgTag(list.boardContents).length > 126
                              ? removeImgTag(list.boardContents).substring(0, 126) + '...'
                              : removeImgTag(list.boardContents),
                        }}
                      ></p>
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
                LS E-Link is waiting
                <br />
                for talented people 
                <br />
                to grow together.
              </div>
              {/*<NavLink to="/recruit/posting" className="more" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                VIEW MORE
              </NavLink>*/}
            </div>
            <ul>
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="700">
                <NavLink to="/en/recruit/people">
                  <i></i>
                  Ideal Talent
                </NavLink>
              </li>
              <li data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="700">
                <NavLink to="/en/recruit/posting">
                  <i></i>
                  Job Posting
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainForm;
