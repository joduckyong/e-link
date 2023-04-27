import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [headerClass, setHeaderClass] = useState('');
  const [pcMenuClass, setPcMenuClass] = useState('');
  const [elinkMenuActive, setElinkMenuActive] = useState(false);
  const [evMenuActive, setEvMenuActive] = useState(false);
  const [moMenuActive, setMoMenuActive] = useState(false);
  const [moMenuClass, setMoMenuClass] = useState('');

  const onClickMoMenu = (menu) => {
    if (moMenuClass === menu) {
      setMoMenuClass('');
    } else {
      setMoMenuClass(menu);
    }
  };
  return (
    <header className={headerClass}>
      <div className="pc-menu">
        <div className="wrap">
          <h1>
            <NavLink to="/">
              <img src="/img/common/ci.svg" alt="" />
            </NavLink>
          </h1>
          <ul className="gnb" onMouseOver={() => setHeaderClass('on')} onMouseOut={() => setHeaderClass('')}>
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
              <NavLink to="/investment/financial">투자정보</NavLink>
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
              {/* <NavLink to="/contactus/consult">Contact Us</NavLink> */}
              <NavLink to="/contactus/consult">Contact Us</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/contactus/consult">상담신청</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactus/inconvenience">불편신고</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactus/inquiry">문의하기</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink to="/ev/index">EV 충전소</NavLink>
              <div className="depth-1">
                <ul>
                  <li>
                    <NavLink to="/ev/index">브랜드 소개</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ev/find">EV 충전소 찾기</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ev/join1">회원가입</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ev/notice">고객센터</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ev/mypage1">마이페이지</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ev/control">관제센터</NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <NavLink to="" className="menu" onClick={() => setPcMenuClass('on')}>
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
            <NavLink to="" className="close" onClick={() => setPcMenuClass('')}>
              <img src="/img/common/ico-close.svg" alt="" />
            </NavLink>
          </div>
        </div>
        <div className="middle">
          <ul className="big-menu">
            <li>
              <NavLink to="/company/lselink">
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
              <NavLink to="/business/e-link/evcharge">
                <strong>사업영역</strong>
              </NavLink>
              <ul className="small-menu">
                <li className={elinkMenuActive ? 'click on' : 'click'} onClick={() => setElinkMenuActive(!elinkMenuActive)}>
                  <NavLink to="">E-Link BUSINESS</NavLink>
                  <ul className="hide" style={elinkMenuActive ? { display: 'block' } : { display: 'none' }}>
                    <li>
                      <NavLink to="/business/e-link/evcharge">B2B 특화 전기차 충전 사업</NavLink>
                    </li>
                    <li>
                      <NavLink to="/business/e-link/control">관제시스템 구축</NavLink>
                    </li>
                    <li>
                      <NavLink to="/business/e-link/renewable">신재생에너지 융합형 충전 인프라 구축</NavLink>
                    </li>
                  </ul>
                </li>
                <li className={evMenuActive ? 'click on' : 'click'} onClick={() => setEvMenuActive(!evMenuActive)}>
                  <NavLink to="">전기차 충전사업</NavLink>
                  <ul className="hide" style={evMenuActive ? { display: 'block' } : { display: 'none' }}>
                    <li>
                      <NavLink to="/business/ev/transportation">운수</NavLink>
                    </li>
                    <li>
                      <NavLink to="/business/ev/logitics">물류</NavLink>
                    </li>
                    <li>
                      <NavLink to="/business/ev/coporate">에네지 센터</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/business/renewable/renewable">신재생 에너지사업</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/investment/financial">
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
              <NavLink to="/pr/press-list">
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
              <NavLink to="/recruit/people">
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
              <NavLink to="/contactus/consult">
                <strong>Contact Us</strong>
              </NavLink>
              <ul className="small-menu">
                <li>
                  <NavLink to="/contactus/consult">상담신청</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/inconvenience">불편신고</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/inquiry">문의하기</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/ev/index">
                <strong>EV 충전소</strong>
              </NavLink>
              <ul className="small-menu">
                <li>
                  <NavLink to="/ev/index">브랜드 소개</NavLink>
                </li>
                <li>
                  <NavLink to="/ev/find">EV 충전소 찾기</NavLink>
                </li>
                <li>
                  <NavLink to="/ev/join1">회원가입</NavLink>
                </li>
                <li>
                  <NavLink to="/ev/notice">고객센터</NavLink>
                </li>
                <li>
                  <NavLink to="/ev/mypage1">마이페이지</NavLink>
                </li>
                <li>
                  <NavLink to="/ev/control">관제센터</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <ul>
            <li>
              <NavLink to="/policy/privacy">
                <strong>개인정보보호처리방침</strong>
              </NavLink>
            </li>
            <li>
              <NavLink to="/policy/terms">서비스 이용약관</NavLink>
            </li>
            <li>
              <NavLink to="/policy/location">위치기반 서비스 이용약관</NavLink>
            </li>
          </ul>
          <p>ⓒ2023. LS E-Link ALL RIGHT RESERVED.</p>
        </div>
      </div>
      <div className="mo-menu">
        <div className="wrap">
          <h1>
            <NavLink to="/">
              <img src="/img/common/ci.svg" alt="" />
            </NavLink>
          </h1>
          <NavLink to="" className={moMenuActive ? 'menu on' : 'menu'} onClick={() => setMoMenuActive(!moMenuActive)}>
            <span></span>
          </NavLink>
        </div>
        <div className={moMenuActive ? 'in active' : 'in'}>
          <ul className="big-menu">
            <li className={moMenuClass === '1' ? 'mo-click on' : 'mo-click'} onClick={() => onClickMoMenu('1')}>
              <NavLink to="">회사소개</NavLink>
              <div className="depth-1" style={moMenuClass === '1' ? { display: 'block' } : { display: 'none' }}>
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
            <li className={moMenuClass === '2' ? 'mo-click on' : 'mo-click'} onClick={() => onClickMoMenu('2')}>
              <NavLink to="">사업영역</NavLink>
              <div className="depth-1" style={moMenuClass === '2' ? { display: 'block' } : { display: 'none' }}>
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
            <li className={moMenuClass === '3' ? 'mo-click on' : 'mo-click'} onClick={() => onClickMoMenu('3')}>
              <NavLink to="">투자정보</NavLink>
              <div className="depth-1" style={moMenuClass === '3' ? { display: 'block' } : { display: 'none' }}>
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
            <li className={moMenuClass === '4' ? 'mo-click on' : 'mo-click'} onClick={() => onClickMoMenu('4')}>
              <NavLink to="">홍보센터</NavLink>
              <div className="depth-1" style={moMenuClass === '4' ? { display: 'block' } : { display: 'none' }}>
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
            <li className={moMenuClass === '5' ? 'mo-click on' : 'mo-click'} onClick={() => onClickMoMenu('5')}>
              <NavLink to="">채용정보</NavLink>
              <div className="depth-1" style={moMenuClass === '5' ? { display: 'block' } : { display: 'none' }}>
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
            <li className={moMenuClass === '6' ? 'mo-click on' : 'mo-click'} onClick={() => onClickMoMenu('6')}>
              <NavLink to="">Contact Us</NavLink>
              <div className="depth-1" style={moMenuClass === '6' ? { display: 'block' } : { display: 'none' }}>
                <ul>
                  <li>
                    <NavLink to="/contactus/consult">상담신청</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactus/inconvenience">불편신고</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactus/inquiry">문의하기</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className={moMenuClass === '7' ? 'mo-click on' : 'mo-click'} onClick={() => onClickMoMenu('7')}>
              <NavLink to="">EV 충전소</NavLink>
              <div className="depth-1" style={moMenuClass === '7' ? { display: 'block' } : { display: 'none' }}>
                <ul>
                  <li>
                    <NavLink to="/ev/index">브랜드 소개</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ev/find">EV 충전소 찾기</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ev/join1">회원가입</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ev/notice">고객센터</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ev/mypage1">마이페이지</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ev/control">관제센터</NavLink>
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
