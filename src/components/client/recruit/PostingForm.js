import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';

const PostingForm = () => {

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="sub sub05">
        <div className="sub-top">
            <div className="bg big-frame"></div>
            <div className="txt-wrap wrap">
                <h2 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">채용공고</h2>
                <ul className="path" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" data-aos-delay="200">
                    <li><NavLink to="/"><img src="./../../img/sub/ico-home.svg" alt="" /></NavLink></li>
                    <li className="link">
                        <NavLink to="">채용정보</NavLink>
                        <ul className="links">
                            <li><NavLink to="/company/lselink">회사소개</NavLink></li>
                            <li><NavLink to="/business/e-link/evcharge">사업영역</NavLink></li>
                            <li><NavLink to="/investment/management">투자정보</NavLink></li>
                            <li><NavLink to="/pr/press-list">홍보센터</NavLink></li>
                            <li><NavLink to="/recruit/people" className="on">채용정보</NavLink></li>
                            <li><NavLink to="/contactus">Contact Us</NavLink></li>
                            <li><NavLink to="">EV 충전소</NavLink></li>
                        </ul>
                    </li>
                    <li className="on link">
                        <NavLink to="">채용공고</NavLink>
                        <ul className="links">
                            <li><NavLink to="/recruit/people">인재상</NavLink></li>
                            <li><NavLink to="/recruit/benefits">복리후생</NavLink></li>
                            <li><NavLink to="/recruit/posting" className="on">채용공고</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div className="content">
            <div className="wrap">
                <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">LS E-Link는 도전적이고,<br />창의적인 인재를 기다리고 있습니다.</h3>
                <ul className="hire-tab">
                    <li className="on"><NavLink to="">전체</NavLink></li>
                    <li><NavLink to="">신입</NavLink></li>
                    <li><NavLink to="">경력</NavLink></li>
                    <li><NavLink to="">인턴</NavLink></li>
                </ul>   
                <ul className="hire-list">
                    <li>
                        <NavLink to="">
                            <div className="division">
                                <span>신입</span>
                                <p>2023.01.20(F) 10:00 - 2023.01.27(F) 18:00</p>
                            </div>
                            <div className="tit">[신입_해외영업] 23년 신입사원 공개채용 (해외영업 분야)</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <div className="division">
                                <span>신입</span>
                                <p>2023.01.20(F) 10:00 - 2023.01.27(F) 18:00</p>
                            </div>
                            <div className="tit">[신입_해외영업] 23년 신입사원 공개채용 (해외영업 분야)</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="">
                            <div className="division">
                                <span>신입</span>
                                <p>2023.01.20(F) 10:00 - 2023.01.27(F) 18:00</p>
                            </div>
                            <div className="tit">[신입_해외영업] 23년 신입사원 공개채용 (해외영업 분야)</div>
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

export default PostingForm;
