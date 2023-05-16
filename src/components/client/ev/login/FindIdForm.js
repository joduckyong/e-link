import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const FindIdForm = () => {
  const [telno, setTelno] = useState('');
  const [userNm, setUserNm] = useState('');
  const [email, setEmail] = useState('');
  const [regDttm, setRegDttm] = useState('');

  const [phoneCk, setPhoneCk] = useState(false);

  const [style, setStyle] = useState({ display: 'block' });
  const [style2, setStyle2] = useState({ display: 'none' });

  // 핸드폰 등록
  const phoneChange = (e) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    setTelno(onlyNumber);
  };

  // 휴대폰인증
  const phonePopup = (e) => {
    e.preventDefault();
    if (telno.length !== 11) {
      alert('휴대폰 번호를 입력해주세요.');
      return;
    }
    setPhoneCk(true);
    window.open(process.env.REACT_APP_API_URL + '/api/phone/popup2?type=V', 'width=0,height=0,location=no,status=no,scrollbars=yes', '_blank');
  };

  const signupUserInfo = async (e) => {
    e.preventDefault();

    if (telno.length !== 11) {
      alert('휴대폰 번호를 입력해주세요.');
      return;
    }

    if (!phoneCk) {
      alert('휴대폰 본인인증을 해주세요.');
      return;
    }

    const res = await axios({
      url: `${process.env.REACT_APP_API_URL}/api/phone/phoneInfo/${telno}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
    });

    if (JSON.stringify(res.data) !== undefined) {
      const dataCi = JSON.stringify(res.data.data.ci).replace(/"/g, '');
      findMe(dataCi);
    } else {
      alert('휴대폰 본인인증을 해주세요.');
      return;
    }
  };

  const findMe = async (ci) => {
    // e.preventDefault();
    const data = {
      url: '/api/m-service-mobile/user/findMe',
      ci: ci,
    };

    const res = await axios({
      url: `${process.env.REACT_APP_API_URL}/api/ev/auth/findMe`,
      method: 'POST',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
    });

    if (res.data !== undefined) {
      const dataUserNm = JSON.stringify(res.data.data.user.userNm).replace(/"/g, '');
      const dataEml = JSON.stringify(res.data.data.user.eml).replace(/"/g, '');
      const dataRegDttm = JSON.stringify(res.data.data.user.regDttm).substring(0, 11).replace(/"/g, '');

      setStyle({ display: 'none' });
      setStyle2({ display: 'block' });

      setUserNm(dataUserNm);
      setEmail(dataEml);
      setRegDttm(dataRegDttm);
    }
  };

  return (
    <>
      <section className="ev-sub-sect">
        <form className="findpw-wp" style={style}>
          <h1>아이디 찾기</h1>

          <div className="gray-box">
            <h3 className="mini-ttl">휴대폰</h3>
            <input type="text" placeholder="휴대폰번호를 입력해주세요." name="telno" value={telno} onChange={phoneChange} maxlength={11} />
            <button className="orange-btn" onClick={phonePopup}>
              휴대폰 본인인증
            </button>
            <button className="orange-btn" onClick={signupUserInfo}>
              아이디 찾기
            </button>

            <div className="notice">
              <img src="/img/ev/ev_notice_ico.png" alt="!" />
              소셜 간편회원은 <br className="mo-br" />
              아이디/비밀번호 찾기가 제공되지 않습니다.
              <br />각 소셜 서비스를 통해 확인 부탁드립니다.
            </div>
          </div>
        </form>

        <form className="findid-wp" style={style2}>
          <h1>아이디 찾기 결과</h1>
          <div className="result-wp">
            <div className="gray-mini-box">아래의 회원정보를 확인해주세요.</div>
            <ul className="info-wp">
              <li>
                <h2>이름</h2>
                <p>{userNm}</p>
              </li>
              <li>
                <h2>아이디</h2>
                <p>{email}</p>
              </li>
              <li>
                <h2>가입일자</h2>
                <p>{regDttm}</p>
              </li>
            </ul>
            <NavLink to="/ev/login" className="orange-btn">
              로그인
            </NavLink>
            <NavLink to="/ev/findpw" className="orange-btn border-btn">
              비밀번호 재설정
            </NavLink>
          </div>
        </form>
      </section>
    </>
  );
};

export default FindIdForm;
