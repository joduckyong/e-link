import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
          <div className="pc-menu">
              <div className="wrap">
                  <h1><img src="/img/common/ci.svg" alt="" /></h1>
                      <ul className="gnb">
                          <li>
                              <NavLink to="">회사소개</NavLink>
                              <div className="depth-1">
                                  <ul>
                                      <li><NavLink to="./company/lselink.html">LS E-Link</NavLink></li>
                                      <li><NavLink to="./company/vision.html">비전</NavLink></li>
                                      <li><NavLink to="./company/history.html">연혁</NavLink></li>
                                      <li><NavLink to="./company/identity.html">CI·BI </NavLink></li>
                                      <li><NavLink to="./company/businessplace.html">사업장 안내</NavLink></li>
                                  </ul>
                              </div>
                          </li>
                          <li>
                              <NavLink to="">사업영역</NavLink>
                              <div className="depth-1">
                                  <ul>
                                      <li><NavLink to="./business/e-link/evcharge.html">E-Link BUSINESS</NavLink></li>
                                      <li><NavLink to="./business/ev/transportation.html">전기차 충전사업</NavLink></li>
                                      <li><NavLink to="./renewable/renewable.html">신재생 에너지사업</NavLink></li>
                                  </ul>
                              </div>
                          </li>
                          <li>
                              <NavLink to="">투자정보</NavLink>
                              <div className="depth-1">
                                  <ul>
                                      <li><NavLink to="./investment/management.html">경영정보</NavLink></li>
                                      <li><NavLink to="./investment/financial.html">재무정보</NavLink></li>
                                      <li><NavLink to="./investment/credit.html">공시정보</NavLink></li>
                                      <li><NavLink to="./investment/announce.html">공고</NavLink></li>
                                  </ul>
                              </div>
                          </li>
                          <li>
                              <NavLink to="">홍보센터</NavLink>
                              <div className="depth-1">
                                  <ul>
                                      <li><NavLink to="./pr/press-list.html">보도자료</NavLink></li>
                                      <li><NavLink to="./pr/media-list.html../img">미디어</NavLink></li>
                                  </ul>
                              </div>
                          </li>
                          <li>
                              <NavLink to="">채용정보</NavLink>
                              <div className="depth-1">
                                  <ul>
                                      <li><NavLink to="./recruit/people.html">인재상</NavLink></li>
                                      <li><NavLink to="./recruit/benefits.html">복리후생</NavLink></li>
                                      <li><NavLink to="./recruit/posting.html">채용공고</NavLink></li>
                                  </ul>
                              </div>
                          </li>
                          <li>
                              <NavLink to="./contact us.html">Contact Us</NavLink>
                          </li>
                          <li>
                              <NavLink to="">EV 충전소</NavLink>
                              <div className="depth-1">
                                  <ul>
                                      <li><NavLink to="">브랜드 소개</NavLink></li>
                                      <li><NavLink to="">EV 충전소 찾기</NavLink></li>
                                      <li><NavLink to="">회원가입</NavLink></li>
                                      <li><NavLink to="">고객센터</NavLink></li>
                                      <li><NavLink to="">마이페이지</NavLink></li>
                                      <li><NavLink to="">관제센터</NavLink></li>
                                  </ul>
                              </div>
                          </li>
                      </ul>
                  <NavLink to="" className="menu"><span></span></NavLink>
              </div>
          </div>
          <div className="all-menu">
              <div className="top">
                  <div className="wrap">
                      <h1><img src="/img/common/ci.svg" alt="" /></h1>
                      <NavLink to="" className="close"><img src="/img/common/ico-close.svg" alt="" /></NavLink>
                  </div>
              </div>
              <div className="middle">
                  <ul className="big-menu">
                      <li>
                          <NavLink to=""><strong>회사소개</strong></NavLink>
                          <ul className="small-menu">
                              <li><NavLink to="./company/lselink.html">LS E-Link</NavLink></li>
                              <li><NavLink to="./company/vision.html">비전</NavLink></li>
                              <li><NavLink to="./company/history.html">연혁</NavLink></li>
                              <li><NavLink to="./company/identity.html">CI·BI </NavLink></li>
                              <li><NavLink to="./company/businessplace.html">사업장 안내</NavLink></li>
                          </ul>
                      </li>
                      <li>
                          <NavLink to=""><strong>사업영역</strong></NavLink>
                          <ul className="small-menu">
                              <li className="click">
                                  <NavLink to="./business/e-link/evcharge.html">E-Link BUSINESS</NavLink>
                                  <ul className="hide">
                                      <li><NavLink to="./business/e-link/evcharge.html">전기차충전</NavLink></li>
                                      <li><NavLink to="./business/e-link/control.html">관제시스템</NavLink></li>
                                      <li><NavLink to="./business/e-link/renewable.html">신재생</NavLink></li>
                                  </ul>
                              </li>
                              <li className="click">
                                  <NavLink to="./business/ev/transportation.html">전기차 충전사업</NavLink>
                                  <ul className="hide">
                                      <li><NavLink to="./business/ev/transportation.html">운수</NavLink></li>
                                      <li><NavLink to="./business/ev/logitics.html">물류</NavLink></li>
                                      <li><NavLink to="./business/ev/coporate.html">Corporate</NavLink></li>
                                  </ul>
                              </li>
                              <li><NavLink to="./renewable/renewable.html">신재생 에너지사업</NavLink></li>
                          </ul>
                      </li>
                      <li>
                          <NavLink to=""><strong>투자정보</strong></NavLink>
                          <ul className="small-menu">
                              <li><NavLink to="./investment/management.html">경영정보</NavLink></li>
                              <li><NavLink to="./investment/financial.html">재무정보</NavLink></li>
                              <li><NavLink to="./investment/credit.html">공시정보</NavLink></li>
                              <li><NavLink to="./investment/announce.html">공고</NavLink></li>
                          </ul>
                      </li>
                      <li>
                          <NavLink to=""><strong>홍보센터</strong></NavLink>
                          <ul className="small-menu">
                              <li><NavLink to="./pr/press-list.html">보도자료</NavLink></li>
                              <li><NavLink to="./pr/media-list.html">미디어</NavLink></li>
                          </ul>
                      </li>
                      <li>
                          <NavLink to=""><strong>채용정보</strong></NavLink>
                          <ul className="small-menu">
                              <li><NavLink to="./recruit/people.html">인재상</NavLink></li>
                              <li><NavLink to="./recruit/benefits.html">복리후생</NavLink></li>
                              <li><NavLink to="./recruit/posting.html">채용공고</NavLink></li>
                          </ul>
                      </li>
                      <li>
                          <NavLink to=""><strong>Contact Us</strong></NavLink>
                      </li>
                      <li>
                          <NavLink to=""><strong>EV 충전소</strong></NavLink>
                          <ul className="small-menu">
                              <li><NavLink to="">브랜드 소개</NavLink></li>
                              <li><NavLink to="">EV 충전소 찾기</NavLink></li>
                              <li><NavLink to="">회원가입</NavLink></li>
                              <li><NavLink to="">고객센터</NavLink></li>
                              <li><NavLink to="">마이페이지</NavLink></li>
                              <li><NavLink to="">관제센터</NavLink></li>
                          </ul>
                      </li>
                  </ul>
              </div>
              <div className="bottom">
                  <ul>
                      <li><NavLink to=""><strong>개인정보처리방침</strong></NavLink></li>
                      <li><NavLink to="">이메일무단수집거부</NavLink></li>
                      <li><NavLink to="">사이버신문고</NavLink></li>
                  </ul>
                  <p>ⓒ LS E-Link. ALL RIGHT RESERVED.</p>
              </div>
          </div>
          <div className="mo-menu">
              <div className="wrap">
                  <h1><img src="/img/common/ci.svg" alt="" /></h1>
                  <NavLink to="" className="menu"><span></span></NavLink>
              </div>
              <div className="in">
                  <ul className="big-menu">
                      <li className="mo-click">
                          <NavLink to="">회사소개</NavLink>
                          <div className="depth-1">
                              <ul>
                                  <li><NavLink to="./company/lselink.html">LS E-Link</NavLink></li>
                                  <li><NavLink to="./company/vision.html">비전</NavLink></li>
                                  <li><NavLink to="./company/history.html">연혁</NavLink></li>
                                  <li><NavLink to="./company/identity.html">CI·BI </NavLink></li>
                                  <li><NavLink to="./company/businessplace.html">사업장 안내</NavLink></li>
                              </ul>
                          </div>
                      </li>
                      <li className="mo-click">
                          <NavLink to="">사업영역</NavLink>
                          <div className="depth-1">
                              <ul>
                                  <li><NavLink to="./business/e-link/evcharge.html">E-Link BUSINESS</NavLink></li>
                                  <li><NavLink to="./business/ev/transportation.html">전기차 충전사업</NavLink></li>
                                  <li><NavLink to="./renewable/renewable.html">신재생 에너지사업</NavLink></li>
                              </ul>
                          </div>
                      </li>
                      <li className="mo-click">
                          <NavLink to="">투자정보</NavLink>
                          <div className="depth-1">
                              <ul>
                                  <li><NavLink to="./investment/management.html">경영정보</NavLink></li>
                                  <li><NavLink to="./investment/financial.html">재무정보</NavLink></li>
                                  <li><NavLink to="./investment/credit.html">공시정보</NavLink></li>
                                  <li><NavLink to="./investment/announce.html">공고</NavLink></li>
                              </ul>
                          </div>
                      </li>
                      <li className="mo-click">
                          <NavLink to="">홍보센터</NavLink>
                          <div className="depth-1">
                              <ul>
                                  <li><NavLink to="./pr/press-list.html">보도자료</NavLink></li>
                                  <li><NavLink to="./pr/media-list.html">미디어</NavLink></li>
                              </ul>
                          </div>
                      </li>
                      <li className="mo-click">
                          <NavLink to="">채용정보</NavLink>
                          <div className="depth-1">
                              <ul>
                                  <li><NavLink to="./recruit/people.html">인재상</NavLink></li>
                                  <li><NavLink to="./recruit/benefits.html">복리후생</NavLink></li>
                                  <li><NavLink to="./recruit/posting.html">채용공고</NavLink></li>
                              </ul>
                          </div>
                      </li>
                      <li>
                          <NavLink to="">Contact Us</NavLink>
                      </li>
                      <li className="mo-click">
                          <NavLink to="">EV 충전소</NavLink>
                          <div className="depth-1">
                              <ul>
                                  <li><NavLink to="">브랜드 소개</NavLink></li>
                                  <li><NavLink to="">EV 충전소 찾기</NavLink></li>
                                  <li><NavLink to="">회원가입</NavLink></li>
                                  <li><NavLink to="">고객센터</NavLink></li>
                                  <li><NavLink to="">마이페이지</NavLink></li>
                                  <li><NavLink to="">관제센터</NavLink></li>
                              </ul>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </header>
  );
};

export default Header;
