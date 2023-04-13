import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  const NAVER_URI = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&state=NAVER&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`;

  const naverLogin = () => {
    window.open(NAVER_URI, 'width=50,height=50,location=no,status=no,scrollbars=yes', '_blank');
  };

  return (
    <>
      <section className="ev-sub-sect">
        <form className="login-wp">
          <h1>ELVIS 로그인</h1>
          <div className="input-wp">
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
          </div>
          <div className="txt-wp">
            <div className="agree">
              <label for="loginstay">
                <input type="checkbox" id="loginstay" />
                <span className="chkimg"></span>로그인 유지
              </label>
            </div>
            <p className="link-wp">
              <NavLink to="/ev/findid">
                아이디찾기&nbsp;&nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;
              </NavLink>
              <NavLink to="/ev/findpw">
                비밀번호찾기&nbsp;&nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;
              </NavLink>
              <NavLink to="/ev/join1">회원가입</NavLink>
            </p>
          </div>
          <button className="orange-btn" type="button" onclick="location.href='./mypage1.html'">
            로그인
          </button>
          <div className="sns-wp">
            <h2>SNS 로그인</h2>
            <ul className="sns-list">
              <li>
                <NavLink onClick={() => naverLogin()}></NavLink>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginForm;