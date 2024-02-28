import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectClientContactUsInfoCnt } from 'store/contactUsReducer';
import AOS from 'aos';
import classnames from 'classnames';

const InquiryForm2 = () => {
  const [contactMail, setContactMail] = useState('');
  const [contactPw, setContactPw] = useState('');
  const [activeMenu1, setActiveMenu1] = useState(false);
  const [activeMenu2, setActiveMenu2] = useState(false);

  const [emailCheck, setEmailCheck] = useState(true);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  });

  const onClickMenuLink = (menu) => {
    if (menu === '1') {
      setActiveMenu1(!activeMenu1);
      setActiveMenu2(false);
    } else if (menu === '2') {
      setActiveMenu1(false);
      setActiveMenu2(!activeMenu2);
    }
  };

  // 이메일 유효성 검사
  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴

    setEmailCheck(regExp.test(e.target.value));
    console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value));
  };

  const onSearch = async (e) => {
    e.preventDefault();

    if (contactMail === '') {
      alert('메일을 입력하세요');
      return;
    }
    if (!emailCheck) {
      alert('이메일 유효 하지 않습니다.');
      return;
    }
    if (contactPw === '') {
      alert('비밀번호를 입력하세요');
      return;
    }

    const newList = {
      contactId: 'CON',
      contactMail: contactMail,
      contactPw: contactPw,
      contactType: 'C',
    };
    const result = await dispatch(selectClientContactUsInfoCnt(newList));
    if (result.payload.data > 0) {
      return navigate('/contactUs/inquiryList?mail=' + contactMail);
    } else {
      alert('정보에 없습니다.');
    }
  };

  return (
    <div className="sub sub06">
      <div className="sub-top">
        <div className="bg big-frame"></div>
        <div className="txt-wrap wrap">
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-delay="200"
          >
            Contact us
          </h2>
          <ul
            className="path"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <li>
              <NavLink to="/">
                <img src="./../img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                Contact us
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/company/lselink">회사소개</NavLink>
                </li>
                <li>
                  <NavLink to="/business/e-link/evcharge">사업영역</NavLink>
                </li>
                <li>
                  <NavLink to="/investment/management">투자정보</NavLink>
                </li>
                <li>
                  <NavLink to="/pr/press-list">홍보센터</NavLink>
                </li>
                <li>
                  <NavLink to="/recruit/people">채용정보</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/consult" className="on">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">EV 충전소</NavLink>
                </li>
              </ul>
            </li>
            {/*<li className="on link">
                            <NavLink to="/contactus" onClick={(e) => onClickMenuLink('2')}>Contact us</NavLink>
                        </li>*/}
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                질의하기
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/contactus/consult">상담신청</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/inconvenience">불편신고</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus/inquiry" className="on">
                    질의하기
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-slide-wrap">
        <div className="nav-slide">
          <ul className="swiper-wrapper">
            <li className="swiper-slide">
              <NavLink to="/contactus/consult">상담신청</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/contactus/inconvenience">불편신고</NavLink>
            </li>
            <li className="swiper-slide on">
              <NavLink to="/contactus/inquiry" className="on">
                질의하기
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <div className="wrap">
          <h3
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            고객님의 질의와 소중한 제안을 받습니다.
          </h3>
          <div className="tab_box">
            <NavLink to="/contactus/inquiry">질의하기</NavLink>
            <NavLink to="/contactus/inquiry2" className="on">
              질의내역
            </NavLink>
          </div>
          <div className="cont02">
            <div className="write">
              <div className="input-wrap">
                <span className="tit">이메일</span>
                <input
                  type="text"
                  onChange={(e) => setContactMail(e.target.value)}
                  value={contactMail}
                  onKeyUp={checkEmail}
                  placeholder="이메일 주소를 입력해주세요."
                />
              </div>
              <div className="input-wrap">
                <span className="tit">비밀번호</span>
                <input
                  type="password"
                  onChange={(e) => setContactPw(e.target.value)}
                  placeholder="비밀번호를 입력해주세요."
                />
              </div>
              <button className="chk_btn" type="button" onClick={onSearch}>
                조회하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm2;
