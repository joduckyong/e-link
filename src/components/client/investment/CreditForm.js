import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';

const CreditForm = () => {

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="sub sub03">
        <div className="sub-top">
            <div className="bg big-frame"></div>
            <div className="txt-wrap wrap">
                <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">공시정보</h2>
                <p data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">정보제공 : 금융감독원 DART</p>
                <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                    <li><NavLink to="">투자정보</NavLink></li>
                    <li className="on">
                        <NavLink to="">공시정보</NavLink>
                        <ul className="links">
                            <li><NavLink to="./../investment/management.html">경영정보</NavLink></li>
                            <li><NavLink to="./../investment/financial.html">재무정보</NavLink></li>
                            <li><NavLink to="./../investment/credit.html" className="on">공시정보</NavLink></li>
                            <li><NavLink to="./../investment/announce.html">공고</NavLink></li>
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
                                20221130000173<span className="tit">특수관계인으로부터 자금차입</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <div className="list-num"><span>No.14</span>2022-11-30</div>
                            <div className="tit-wrap">
                                20221130000173<span className="tit">특수관계인으로부터 자금차입</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <div className="list-num"><span>No.14</span>2022-11-30</div>
                            <div className="tit-wrap">
                                20221130000173<span className="tit">특수관계인으로부터 자금차입</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <div className="list-num"><span>No.14</span>2022-11-30</div>
                            <div className="tit-wrap">
                                20221130000173<span className="tit">특수관계인으로부터 자금차입</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <div className="list-num"><span>No.14</span>2022-11-30</div>
                            <div className="tit-wrap">
                                20221130000173<span className="tit">특수관계인으로부터 자금차입</span>
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

export default CreditForm;
