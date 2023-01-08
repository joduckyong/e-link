import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import classnames from 'classnames';

SwiperCore.use([Navigation, Pagination]);

const MediaviewForm = () => {

    const [activeMenu1, setActiveMenu1] = useState(false);
    const [activeMenu2, setActiveMenu2] = useState(false);


    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    useEffect(() => {
      AOS.init();
    });

    const onClickMenuLink = (menu) => {
      if(menu === '1'){
          setActiveMenu1(!activeMenu1);
          setActiveMenu2(false);
      }else if(menu === '2'){
          setActiveMenu1(false);
          setActiveMenu2(!activeMenu2);
      }
    }

  return (
    <div className="sub sub04">
        <div className="sub-top">
            <div className="bg big-frame"></div>
            <div className="txt-wrap wrap">
                <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">미디어</h2>
                <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
                    <li><NavLink to="/"><img src="./../../img/sub/ico-home.svg" alt="" /></NavLink></li>
                    <li className={classnames('link', {show: activeMenu1})}>
                        <NavLink to="" onClick={(e) => onClickMenuLink('1')}>홍보센터</NavLink>
                        <ul className={classnames('links', {active: activeMenu1})}>
                            <li><NavLink to="/company/lselink">회사소개</NavLink></li>
                            <li><NavLink to="/business/e-link/evcharge">사업영역</NavLink></li>
                            <li><NavLink to="/investment/management">투자정보</NavLink></li>
                            <li><NavLink to="/pr/press-list" className="on">홍보센터</NavLink></li>
                            <li><NavLink to="/recruit/people">채용정보</NavLink></li>
                            <li><NavLink to="/contactus">Contact Us</NavLink></li>
                            <li><NavLink to="">EV 충전소</NavLink></li>
                        </ul>
                    </li>
                    <li className={classnames('on link', {show: activeMenu2})}>
                        <NavLink to="" onClick={(e) => onClickMenuLink('2')}>미디어</NavLink>
                        <ul className={classnames('links', {active: activeMenu2})}>
                            <li><NavLink to="/pr/press-list">보도자료</NavLink></li>
                            <li><NavLink to="/pr/media-list" className="on">미디어</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div className="content">
            <div className="wrap">
                <div className="con4-media-view">
                    <h3>2023 LS E-Link 공식 홍보영상</h3>
                    <div className="list-num-wrap">
                        <div className="list-num"><span>No.14</span>2022-11-30</div>
                        <div className="file">2023_LS_E-Link.mp4</div> 
                    </div>
                    <div className="view-area">
                        <img src="./../../img/sub/sub04-media-view-img.jpg" alt="" />
                        <p class="view-txt">LS그룹(회장 구자은)이 EV 충전 신규 법인 설립으로 전기차 사업에 드라이브를 걸고 있다. LS의 지주회사인 ㈜LS는 ‘EV 충전 인프라 구축과 운영 사업 개발’을 위해 신규 법인 LS E-Link(엘에스이링크, 대표 김대근)를 E1과 공동 투자하여 설립한다고 27일 공시했다.</p>
                    </div>
                    <div className="other-media">
                        <div className="oth-tit">다른 영상</div>
                        <div className="btns">
                            <NavLink to="" className="prev-btn swiper-button-prev" ref={navigationPrevRef}></NavLink>
                            <NavLink to="" className="next-btn swiper-button-next" ref={navigationNextRef}></NavLink>
                        </div>
                        <Swiper
                          className="media-list media-slide"
                          slidesPerView={1}
                          spaceBetween={0}
                          loop={true}
                          wrapperTag="ul"
                          navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                          }}
                          breakpoints={{
                            780:{
                              slidesPerView: 3,
                              spaceBetween: 20
                            }
                          }}
                          onSwiper={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;

                            swiper.navigation.destroy();
                            swiper.navigation.init();
                            swiper.navigation.update();
                          }}
                        >
                          <SwiperSlide tag="li">
                            <NavLink to="">
                                <div className="list-img">
                                    <div className="in" style={{background: 'url(./../../img/sub/con4-media-list-img1.jpg) center no-repeat', backgroundSize: 'cover'}}></div>
                                </div>
                                <div className="list-tit">LS E-Link EV</div>
                                <div className="list-date">2022-11-30</div>
                            </NavLink>
                          </SwiperSlide>
                          <SwiperSlide tag="li">
                            <NavLink to="">
                                <div className="list-img">
                                    <div className="in" style={{background: 'url(./../../img/sub/con4-media-list-img2.jpg) center no-repeat', backgroundSize: 'cover'}}></div>
                                </div>
                                <div className="list-tit">LS E-Link EV</div>
                                <div className="list-date">2022-11-30</div>
                            </NavLink>
                          </SwiperSlide>
                          <SwiperSlide tag="li">
                            <NavLink to="">
                                <div className="list-img">
                                    <div className="in" style={{background: 'url(./../../img/sub/con4-media-list-img3.jpg) center no-repeat', backgroundSize: 'cover'}}></div>
                                </div>
                                <div className="list-tit">LS E-Link EV</div>
                                <div className="list-date">2022-11-30</div>
                            </NavLink>
                          </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="view-control">
                        <NavLink to="/pr/media-list" className="list-btn">목록</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MediaviewForm;
