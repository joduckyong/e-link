import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [headerClass, setHeaderClass] = useState("");
  const [pcMenuClass, setPcMenuClass] = useState("");
  const [moMenuActive, setMoMenuActive] = useState(false);
  return (
    <header className={headerClass}>
      <div className="pc-menu">
        <div className="wrap">
          <h1>
            <NavLink to="/">
              <img src="/img/common/ci.svg" alt="" />
            </NavLink>
          </h1>
          <ul className="gnb" onMouseOver={() => setHeaderClass("on")} onMouseOut={() => setHeaderClass("")}>
            <li>
              <NavLink to="/company/lselink">회사소개</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/company/lselink">LS E-Link</NavLink>
                  </li>
                  <li>
                    <NavLink to="/company/vision">비전</NavLink>
                  </li>
                  <li>
                    <NavLink to="/company/history">연혁</NavLink>
                  </li>
                  <li>
                    <NavLink to="/company/identity">CI·BI </NavLink>
                  </li>
                  <li>
                    <NavLink to="/company/businessplace">사업장 안내</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/business/e-link/evcharge">사업영역</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/business/e-link/evcharge">E-Link BUSINESS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/business/ev/transportation">전기차 충전사업</NavLink>
                  </li>
                  <li>
                    <NavLink to="/business/renewable/renewable">신재생 에너지사업</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/investment/management">투자정보</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/investment/management">경영정보</NavLink>
                  </li>
                  <li>
                    <NavLink to="/investment/financial">재무정보</NavLink>
                  </li>
                  <li>
                    <NavLink to="/investment/credit">공시정보</NavLink>
                  </li>
                  <li>
                    <NavLink to="/investment/announce">공고</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/pr/press-list">홍보센터</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/pr/press-list">보도자료</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pr/media-list">미디어</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/recruit/people">채용정보</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/recruit/people">인재상</NavLink>
                  </li>
                  <li>
                    <NavLink to="/recruit/benefits">복리후생</NavLink>
                  </li>
                  <li>
                    <NavLink to="/recruit/posting">채용공고</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="">EV 충전소</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="">브랜드 소개</NavLink>
                  </li>
                  <li>
                    <NavLink to="">EV 충전소 찾기</NavLink>
                  </li>
                  <li>
                    <NavLink to="">회원가입</NavLink>
                  </li>
                  <li>
                    <NavLink to="">고객센터</NavLink>
                  </li>
                  <li>
                    <NavLink to="">마이페이지</NavLink>
                  </li>
                  <li>
                    <NavLink to="">관제센터</NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <NavLink to="" className="menu" onClick={() => setPcMenuClass("on")}>
            <span></span>
          </NavLink>
        </div>
      </div>
      <div className={`all-menu ${pcMenuClass}`}>
        <div className="top">
          <div className="wrap">
            <h1>
              <img src="/img/common/ci.svg" alt="" />
            </h1>
            <NavLink to="" className="close" onClick={() => setPcMenuClass("")}>
              <img src="/img/common/ico-close.svg" alt="" />
            </NavLink>
          </div>
        </div>
        <div className="middle">
          <ul className="big-menu">
            <li>
              <NavLink to="">
                <strong>회사소개</strong>
              </NavLink>
              <ul className="small-menu">
                <li>
                  <NavLink to="/company/lselink">LS E-Link</NavLink>
                </li>
                <li>
                  <NavLink to="/company/vision">비전</NavLink>
                </li>
                <li>
                  <NavLink to="/company/history">연혁</NavLink>
                </li>
                <li>
                  <NavLink to="/company/identity">CI·BI </NavLink>
                </li>
                <li>
                  <NavLink to="/company/businessplace">사업장 안내</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="">
                <strong>사업영역</strong>
              </NavLink>
              <ul className="small-menu">
                <li className="click">
                  <NavLink to="/business/e-link/evcharge">E-Link BUSINESS</NavLink>
                  <ul className="hide">
                    <li>
                      <NavLink to="/business/e-link/evcharge">전기차충전</NavLink>
                    </li>
                    <li>
                      <NavLink to="/business/e-link/control">관제시스템</NavLink>
                    </li>
                    <li>
                      <NavLink to="/business/e-link/renewable">신재생</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="click">
                  <NavLink to="/business/ev/transportation">전기차 충전사업</NavLink>
                  <ul className="hide">
                    <li>
                      <NavLink to="/business/ev/transportation">운수</NavLink>
                    </li>
                    <li>
                      <NavLink to="/business/ev/logitics">물류</NavLink>
                    </li>
                    <li>
                      <NavLink to="/business/ev/coporate">Corporate</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/business/renewable/renewable">신재생 에너지사업</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="">
                <strong>투자정보</strong>
              </NavLink>
              <ul className="small-menu">
                <li>
                  <NavLink to="/investment/management">경영정보</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/financial">재무정보</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/credit">공시정보</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/announce">공고</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="">
                <strong>홍보센터</strong>
              </NavLink>
              <ul className="small-menu">
                <li>
                  <NavLink to="/pr/press-list">보도자료</NavLink>
                </li>
                <li>
                  <NavLink to="/pr/media-list">미디어</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="">
                <strong>채용정보</strong>
              </NavLink>
              <ul className="small-menu">
                <li>
                  <NavLink to="/recruit/people">인재상</NavLink>
                </li>
                <li>
                  <NavLink to="/recruit/benefits">복리후생</NavLink>
                </li>
                <li>
                  <NavLink to="/recruit/posting">채용공고</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/contactus">
                <strong>Contact Us</strong>
              </NavLink>
            </li>
            <li>
              <NavLink to="">
                <strong>EV 충전소</strong>
              </NavLink>
              <ul className="small-menu">
                <li>
                  <NavLink to="">브랜드 소개</NavLink>
                </li>
                <li>
                  <NavLink to="">EV 충전소 찾기</NavLink>
                </li>
                <li>
                  <NavLink to="">회원가입</NavLink>
                </li>
                <li>
                  <NavLink to="">고객센터</NavLink>
                </li>
                <li>
                  <NavLink to="">마이페이지</NavLink>
                </li>
                <li>
                  <NavLink to="">관제센터</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <ul>
            <li>
              <NavLink to="">
                <strong>개인정보처리방침</strong>
              </NavLink>
            </li>
            <li>
              <NavLink to="">이메일무단수집거부</NavLink>
            </li>
            <li>
              <NavLink to="">사이버신문고</NavLink>
            </li>
          </ul>
          <p>ⓒ LS E-Link. ALL RIGHT RESERVED.</p>
        </div>
      </div>
      <div className="mo-menu">
        <div className="wrap">
          <h1>
            <img src="/img/common/ci.svg" alt="" />
          </h1>
          <NavLink to="" className={moMenuActive ? "menu on" : "menu"} onClick={() => setMoMenuActive(!moMenuActive)}>
            <span></span>
          </NavLink>
        </div>
        <div className={moMenuActive ? "in active" : "in"}>
          <ul className="big-menu">
            <li className="mo-click">
              <NavLink to="">회사소개</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/company/lselink">LS E-Link</NavLink>
                  </li>
                  <li>
                    <NavLink to="/company/vision">비전</NavLink>
                  </li>
                  <li>
                    <NavLink to="/company/history">연혁</NavLink>
                  </li>
                  <li>
                    <NavLink to="/company/identity">CI·BI </NavLink>
                  </li>
                  <li>
                    <NavLink to="/company/businessplace">사업장 안내</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mo-click">
              <NavLink to="">사업영역</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/business/e-link/evcharge">E-Link BUSINESS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/business/ev/transportation">전기차 충전사업</NavLink>
                  </li>
                  <li>
                    <NavLink to="/business/renewable/renewable">신재생 에너지사업</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mo-click">
              <NavLink to="">투자정보</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/investment/management">경영정보</NavLink>
                  </li>
                  <li>
                    <NavLink to="/investment/financial">재무정보</NavLink>
                  </li>
                  <li>
                    <NavLink to="/investment/credit">공시정보</NavLink>
                  </li>
                  <li>
                    <NavLink to="/investment/announce">공고</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mo-click">
              <NavLink to="">홍보센터</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/pr/press-list">보도자료</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pr/media-list">미디어</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mo-click">
              <NavLink to="">채용정보</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/recruit/people">인재상</NavLink>
                  </li>
                  <li>
                    <NavLink to="/recruit/benefits">복리후생</NavLink>
                  </li>
                  <li>
                    <NavLink to="/recruit/posting">채용공고</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/contactus">Contact Us</NavLink>
            </li>
            <li className="mo-click">
              <NavLink to="">EV 충전소</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="">브랜드 소개</NavLink>
                  </li>
                  <li>
                    <NavLink to="">EV 충전소 찾기</NavLink>
                  </li>
                  <li>
                    <NavLink to="">회원가입</NavLink>
                  </li>
                  <li>
                    <NavLink to="">고객센터</NavLink>
                  </li>
                  <li>
                    <NavLink to="">마이페이지</NavLink>
                  </li>
                  <li>
                    <NavLink to="">관제센터</NavLink>
                  </li>
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
