import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectClientContactUsInfoCnt } from 'store/contactUsEnReducer';
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
      alert('Please enter your email address.');
      return;
    }
    if (!emailCheck) {
      alert('Email is invalid.');
      return;
    }
    if (contactPw === '') {
      alert('Please enter your password');
      return;
    }

    const newList = {
      contactId: 'EN_CON',
      contactMail: contactMail,
      contactPw: contactPw,
      contactType: 'C',
    };
    const result = await dispatch(selectClientContactUsInfoCnt(newList));
    if (result.payload.data > 0) {
      return navigate(
        '/en/contactUs/inquiryList?mail=' +
          contactMail +
          '&key=' +
          result.payload.data,
      );
    } else {
      alert('There is no information.');
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
              <NavLink to="/en">
                <img src="/img/sub/ico-home.svg" alt="" />
              </NavLink>
            </li>
            <li className={classnames('link', { show: activeMenu1 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('1')}>
                Contact Us
              </NavLink>
              <ul className={classnames('links', { active: activeMenu1 })}>
                <li>
                  <NavLink to="/en/company/lselink">Company</NavLink>
                </li>
                <li>
                  <NavLink to="/en/business/e-link/evcharge">Business</NavLink>
                </li>
                <li>
                  <NavLink to="/en/investment/management">IR Center</NavLink>
                </li>
                <li>
                  <NavLink to="/en/pr/press-list">PR Center</NavLink>
                </li>
                <li>
                  <NavLink to="/en/recruit/people">Recruitment</NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus" className="on">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={classnames('on link', { show: activeMenu2 })}>
              <NavLink to="" onClick={(e) => onClickMenuLink('2')}>
                Contact us
              </NavLink>
              <ul className={classnames('links', { active: activeMenu2 })}>
                <li>
                  <NavLink to="/en/contactus/consult">
                    Consultation request
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus/inconvenience">
                    Report complaints
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/en/contactus/inquiry" className="on">
                    Contact us
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
              <NavLink to="/en/contactus/consult">Consultation request</NavLink>
            </li>
            <li className="swiper-slide">
              <NavLink to="/en/contactus/inconvenience">
                Report complaints
              </NavLink>
            </li>
            <li className="swiper-slide on">
              <NavLink to="/en/contactus/inquiry" className="on">
                Contact us
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
            We receive your inquiries and valuable suggestions.
          </h3>
          <div className="tab_box">
            <NavLink to="/en/contactus/inquiry">Ask a question</NavLink>
            <NavLink to="/en/contactus/inquiry2" className="on">
              Inquiry details
            </NavLink>
          </div>
          <div className="cont02">
            <div className="write">
              <div className="input-wrap">
                <span className="tit">Email</span>
                <input
                  type="text"
                  onChange={(e) => setContactMail(e.target.value)}
                  value={contactMail}
                  onKeyUp={checkEmail}
                  placeholder="Please enter your email address."
                />
              </div>
              <div className="input-wrap">
                <span className="tit">Password</span>
                <input
                  type="password"
                  onChange={(e) => setContactPw(e.target.value)}
                  placeholder="Please enter your password."
                />
              </div>
              <button className="chk_btn" type="button" onClick={onSearch}>
                search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm2;
