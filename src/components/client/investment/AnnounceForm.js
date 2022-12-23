import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';

const AnnounceForm = () => {

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="sub sub03">
        <div className="sub-top">
            <div className="bg big-frame"></div>
            <div className="txt-wrap wrap">
                <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">공고</h2>
                <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                    <li><NavLink to="">투자정보</NavLink></li>
                    <li className="on">
                        <NavLink to="">공고</NavLink>
                        <ul className="links">
                            <li><NavLink to="./../investment/management.html">경영정보</NavLink></li>
                            <li><NavLink to="./../investment/financial.html">재무정보</NavLink></li>
                            <li><NavLink to="./../investment/credit.html">공시정보</NavLink></li>
                            <li><NavLink to="./../investment/announce.html" className="on">공고</NavLink></li>
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
                    <select name="" id="">
                        <option value="">2022</option>
                    </select>
                </div>
                <ul className="con3-list-box">
                    <li>
                        <NavLink to="">
                            <div className="list-num"><span>No.14</span>2022-11-30</div>
                            <div className="tit-wrap">
                                제 1기 정기 주주총회 소집 공고
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <div className="list-num"><span>No.14</span>2022-11-30</div>
                            <div className="tit-wrap">
                                제 1기 정기 주주총회 소집 공고
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <div className="list-num"><span>No.14</span>2022-11-30</div>
                            <div className="tit-wrap">
                                제 1기 정기 주주총회 소집 공고
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <div className="list-num"><span>No.14</span>2022-11-30</div>
                            <div className="tit-wrap">
                                제 1기 정기 주주총회 소집 공고
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <div className="list-num"><span>No.14</span>2022-11-30</div>
                            <div className="tit-wrap">
                                제 1기 정기 주주총회 소집 공고
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

export default AnnounceForm;
