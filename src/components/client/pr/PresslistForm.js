import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import classnames from 'classnames';

const PresslistForm = () => {

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
                <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">보도자료</h2>
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
                        <NavLink to="" onClick={(e) => onClickMenuLink('2')}>보도자료</NavLink>
                        <ul className={classnames('links', {active: activeMenu2})}>
                            <li><NavLink to="/pr/press-list" className="on">보도자료</NavLink></li>
                            <li><NavLink to="/pr/media-list">미디어</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div className="content">
            <div className="wrap">
                <div className="list-top">
                    <p className="t-ver">
                        Total <strong>59</strong> / 5 Page
                    </p>
                    <div className="sh-box">
                        <input type="text" />
                        <button><img src="../../img/common/ico-search.svg" alt="" /></button>
                    </div>
                </div>
                <ul className="con4-list-box">
                    <li>
                        <NavLink to="">
                            <div className="img"><img src="../../img/sub/sub04-1-img1.jpg" alt="" /></div>
                            <div className="text">
                                <div className="list-num"><span>No.14</span>2022-11-30</div>
                                <div className="tit-wrap">제 1기 정기 주주총회 소집 공고</div>
                                <p>
                                    LS그룹(회장 구자은)이 EV 충전 신규 법인 설립으로 전기차 사업에 드라이브를 걸고 있다. 
                                    LS의 지주회사인 ㈜LS는 ‘EV 충전 인프라 구축과 운영 사업 개발’을 위해 신규 법인 LS E-Link(엘에스이링크, 대표 김대근)를 E1과 ..
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <div className="img"><img src="../../img/sub/sub04-1-img1.jpg" alt="" /></div>
                            <div className="text">
                                <div className="list-num"><span>No.14</span>2022-11-30</div>
                                <div className="tit-wrap">제 1기 정기 주주총회 소집 공고</div>
                                <p>
                                    LS그룹(회장 구자은)이 EV 충전 신규 법인 설립으로 전기차 사업에 드라이브를 걸고 있다. 
                                    LS의 지주회사인 ㈜LS는 ‘EV 충전 인프라 구축과 운영 사업 개발’을 위해 신규 법인 LS E-Link(엘에스이링크, 대표 김대근)를 E1과 ..
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <div className="img"><img src="../../img/sub/sub04-1-img1.jpg" alt="" /></div>
                            <div className="text">
                                <div className="list-num"><span>No.14</span>2022-11-30</div>
                                <div className="tit-wrap">제 1기 정기 주주총회 소집 공고</div>
                                <p>
                                    LS그룹(회장 구자은)이 EV 충전 신규 법인 설립으로 전기차 사업에 드라이브를 걸고 있다. 
                                    LS의 지주회사인 ㈜LS는 ‘EV 충전 인프라 구축과 운영 사업 개발’을 위해 신규 법인 LS E-Link(엘에스이링크, 대표 김대근)를 E1과 ..
                                </p>
                            </div>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="paging">
                        <NavLink to="" className="prev-btn"><i></i><span className="text_blind">이전</span></NavLink>
                        <ul>
                            <li className="current"><NavLink to="">1</NavLink></li>
                            <li><NavLink to="">2</NavLink></li>
                            <li><NavLink to="">3</NavLink></li>
                            <li><NavLink to="">4</NavLink></li>
                            <li><NavLink to="">5</NavLink></li>
                        </ul>
                        <NavLink to="" className="next-btn"><i></i><span className="text_blind">다음</span></NavLink>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default PresslistForm;
