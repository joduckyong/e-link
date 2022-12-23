import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';

const ManagementForm = () => {

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="sub sub03">
            <div className="sub-top">
                <div className="bg big-frame"></div>
                <div className="txt-wrap wrap">
                    <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">경영정보</h2>
                    <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                        <li><NavLink to="">투자정보</NavLink></li>
                        <li className="on">
                            <NavLink to="">경영정보</NavLink>
                            <ul className="links">
                                <li><NavLink to="./../investment/management.html" className="on">경영정보</NavLink></li>
                                <li><NavLink to="./../investment/financial.html">재무정보</NavLink></li>
                                <li><NavLink to="./../investment/credit.html">공시정보</NavLink></li>
                                <li><NavLink to="./../investment/announce.html" className="on">공고</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="content pt0">
                <div className="wrap">
                    <div className="con3-tit" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">기업개요</div>
                    <div className="tb-wrap" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                        <div className="table table-4">
                            <div className="tr">
                                <div className="th">설립일</div>
                                <div className="td">2022.05.02</div>
                                <div className="th">대표이사</div>
                                <div className="td">김대근</div>
                            </div>
                            <div className="tr">
                                <div className="th">종업원수</div>
                                <div className="td">9 (2022.12.31)</div>
                                <div className="th">계열</div>
                                <div className="td">LS그룹</div>
                            </div>
                        </div>
                    </div>
                    <div className="con3-tit" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">주요 주주현황</div>
                    <div className="tb-wrap" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                        <div className="table table-3">
                            <div className="tr">
                                <div className="th">회사명</div>
                                <div className="td">(주)LS 50%</div>
                                <div className="td">(주)E1 50%</div>
                            </div>
                            <div className="tr">
                                <div className="th">지분율</div>
                                <div className="td">50%</div>
                                <div className="td">50%</div>
                            </div>
                        </div>
                    </div>    
                    <div className="con3-tit" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">자회사 현황</div>
                    <div className="tb-wrap" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                        <div className="table table-3">
                            <div className="tr">
                                <div className="th">회사명</div>
                                <div className="td">SE모빌리티</div>
                                <div className="td">울산버스</div>
                            </div>
                            <div className="tr">
                                <div className="th">주요 사업영역</div>
                                <div className="td">전기차 중전사업</div>
                                <div className="td">전기차 충전사업</div>
                            </div>
                            <div className="tr">
                                <div className="th">보유 지분율</div>
                                <div className="td">51%</div>
                                <div className="td">51%</div>
                            </div>
                        </div>
                    </div>
                    <div className="con3-tit" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">외부감사인 공고</div>
                    <div className="tb-wrap" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
                        <div className="table table-2">
                            <div className="tr">
                                <div className="th">회계법인명</div>
                                <div className="td">XX회계법인</div>
                                
                            </div>
                            <div className="tr">
                                <div className="th">감사기간</div>
                                <div className="td">제 3기 ~ 제 5기 (2023년 1월 1일 ~ 2025년 12월 31일)</div>
                           
                            </div>
                            <div className="tr">
                                <div className="th">공고기간</div>
                                <div className="td">2025년 12월 31일 까지</div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default ManagementForm;
