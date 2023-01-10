import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';
import { ParallaxProvider, Parallax } from 'react-skrollr';

const BenefitsForm = () => {
    const [activeMenu1, setActiveMenu1] = useState(false);
    const [activeMenu2, setActiveMenu2] = useState(false);

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
    <div className="sub sub05">
        <div className="sub-top">
            <div className="bg big-frame"></div>
            <div className="txt-wrap wrap">
                <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">복리후생</h2>
                <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
                    <li><NavLink to="/"><img src="./../../img/sub/ico-home.svg" alt="" /></NavLink></li>
                    <li className={classnames('link', {show: activeMenu1})}>
                        <NavLink to="" onClick={(e) => onClickMenuLink('1')}>채용정보</NavLink>
                        <ul className={classnames('links', {active: activeMenu1})}>
                            <li><NavLink to="/company/lselink">회사소개</NavLink></li>
                            <li><NavLink to="/business/e-link/evcharge">사업영역</NavLink></li>
                            <li><NavLink to="/investment/management">투자정보</NavLink></li>
                            <li><NavLink to="/pr/press-list">홍보센터</NavLink></li>
                            <li><NavLink to="/recruit/people" className="on">채용정보</NavLink></li>
                            <li><NavLink to="/contactus">Contact Us</NavLink></li>
                            <li><NavLink to="">EV 충전소</NavLink></li>
                        </ul>
                    </li>
                    <li className={classnames('on link', {show: activeMenu2})}>
                        <NavLink to="" onClick={(e) => onClickMenuLink('2')}>복리후생</NavLink>
                        <ul className={classnames('links', {active: activeMenu2})}>
                            <li><NavLink to="/recruit/people">인재상</NavLink></li>
                            <li><NavLink to="/recruit/benefits" className="on">복리후생</NavLink></li>
                            <li><NavLink to="/recruit/posting">채용공고</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div className="content pb0">
            <div className="wrap">
                <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">LS E-Link는 밝고 자유로운 기업 문화 아래<br />다양한 복리후생 제도를 통해 구성원의 행복한 삶을 지원하고 있습니다.</h3>
                <div className="fire-img"  data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                    <div className="bg" data-top-top="background-position-y: 50%;" data-center-top="background-position-y: 20%;"></div>
                </div>   
                <ul className="welfare">
                    <li data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                        <div className="img"><span><img src="../../img/sub/ico-house.svg" alt="" /></span></div>
                        <div className="txt">
                            <div className="big">주택자금 지원</div>
                            주택 구입자금 및 전세자금 대출 지원
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                        <div className="img"><span><img src="../../img/sub/ico-hat.svg" alt="" /></span></div>
                        <div className="txt">
                            <div className="big">자녀 학자금 지원</div>
                            중학교, 고등학교, 대학교
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                        <div className="img"><span><img src="../../img/sub/ico-love.svg" alt="" /></span></div>
                        <div className="txt">
                            <div className="big">경조사 지원</div>
                            경조금, 화환 및 경조휴가 지원
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                        <div className="img"><span><img src="../../img/sub/ico-medical.svg" alt="" /></span></div>
                        <div className="txt">
                            <div className="big">의료비 지원</div>
                            종합건강검진(만 35세 이상)
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                        <div className="img"><span><img src="../../img/sub/ico-tree.svg" alt="" /></span></div>
                        <div className="txt">
                            <div className="big">휴가제도</div>
                            하계휴가(5일)
                        </div>
                    </li>
                    <li data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                        <div className="img"><span><img src="../../img/sub/ico-gift.svg" alt="" /></span></div>
                        <div className="txt">
                            <div className="big">기타</div>
                            본인 교육비 지원, 콘도사용지원금, 중식지원, 개인 생일 또는 결혼기념일 등 선물 지급
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
                    <NavLink to="" data-aos="flip-left" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">채용공고 보기</NavLink>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BenefitsForm;
