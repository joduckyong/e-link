import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { encrypt } from '../../../../api/crypto';

const LoginForm = () => {
  const NAVER_URI = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}&state=NAVER`;
  const KAKAO_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
  const GOOGLE_URI = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
  const APPLE_URI = `https://appleid.apple.com?response_type=code&client_id=${process.env.REACT_APP_APPLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_APPLE_REDIRECT_URI}`;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Login = async (e) => {
    e.preventDefault();

    const data = {
      url: '/auth/oauth/token',
      username: username,
      password: encrypt(password),
      grant_type: 'password',
      scope: 'mobileclient',
      roleId: 'email',
    };

    console.log('data : ' + JSON.stringify(data));

    fetch(process.env.REACT_APP_API_URL + '/api/ev/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.data !== '') {
          const result = JSON.stringify(res.data.principal);

          console.log('result : ' + result);
        }
      });
  };

  return (
    <>
      <section className="ev-sub-sect">
        <form className="login-wp">
          <h1>ELVIS 로그인</h1>
          <div className="input-wp">
            <input type="text" name="username" defaultValue={username} placeholder="이메일" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" name="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
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
          <button className="orange-btn" onClick={Login}>
            로그인
          </button>
          <div className="sns-wp">
            <h2>SNS 로그인</h2>
            <ul className="sns-list">
              <li>
                <a href={NAVER_URI}></a>
              </li>
              <li>
                <a href={KAKAO_URI}></a>
              </li>
              <li>
                <a href={GOOGLE_URI}></a>
              </li>
              <li>
                <a href={APPLE_URI}></a>
              </li>
            </ul>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginForm;
