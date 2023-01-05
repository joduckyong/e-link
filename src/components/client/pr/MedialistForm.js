import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';

const MedialistForm = () => {

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
                <div className="con4-media">
                    <h3>LS E-Link 내일의 에너지를 충전합니다.</h3>
                    <div className="big-media">
                        <div className="img"><img src="./../../img/sub/sub04-2-big.jpg" alt="" /></div>
                        <div className="txt">
                            <div className="date">2022-11-30</div>
                            <div className="tit">2023 LS E-Link 공식 홍보영상</div>
                            <NavLink to=""><img src="../img/sub/media-btn.svg" alt="" /></NavLink>
                        </div>
                    </div>
                    <div className="media-list">
                        <div className="list-top">
                            <p className="t-ver">
                                Total <strong>59</strong> / 5 Page
                            </p>
                            <div className="sh-box">
                                <input type="text" />
                                <button><img src="./../../img/common/ico-search.svg" alt="" /></button>
                            </div>
                        </div>
                        <ul className="">
                            <li>
                                <NavLink to="">
                                    <div className="list-img">
                                        <div className="in" style={{background: 'url(./../../img/sub/con4-media-list-img1.jpg) center no-repeat', backgroundSize: 'cover'}}></div>
                                    </div>
                                    <div className="list-tit">LS E-Link EV</div>
                                    <div className="list-date">2022-11-30</div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    <div className="list-img">
                                        <div className="in" style={{background: 'url(./../../img/sub/con4-media-list-img2.jpg) center no-repeat', backgroundSize: 'cover'}}></div>
                                    </div>
                                    <div className="list-tit">LS E-Link EV</div>
                                    <div className="list-date">2022-11-30</div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    <div className="list-img">
                                        <div className="in" style={{background: 'url(./../../img/sub/con4-media-list-img3.jpg) center no-repeat', backgroundSize: 'cover'}}></div>
                                    </div>
                                    <div className="list-tit">LS E-Link EV</div>
                                    <div className="list-date">2022-11-30</div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="paging">
                        <NavLink to="" className="prev-btn"><i></i><span className="text_blind">이전</span></NavLink>
                        <ul>
                            <li className="current"><NavLink to="">1</NavLink></li>
                            <li><NavLink to="">2</NavLink></li>
                        </ul>
                        <NavLink to="" className="next-btn"><i></i><span className="text_blind">다음</span></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MedialistForm;
