import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';

const MedialistForm = () => {

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="sub sub04">
        <div className="sub-top">
            <div className="bg big-frame"></div>
            <div className="txt-wrap wrap">
                <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">미디어</h2>
                <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
                    <li><NavLink to="">홍보센터</NavLink></li>
                    <li className="on">
                        <NavLink to="">미디어</NavLink>
                        <ul className="links">
                            <li><NavLink to="./../pr/press-list.html">보도자료</NavLink></li>
                            <li><NavLink to="./../pr/media-list.html" className="on">미디어</NavLink></li>
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
