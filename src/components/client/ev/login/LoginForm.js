import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { loginUser } from '../../../../api/EvUsers';
import { setAccessEvToken, setEvUserNo, setRefreshEvToken, getCookieEvToken } from '../../../../storage/EvCookie';
import { SET_EV_TOKEN } from '../../../../store/EvAuth';
import { encrypt } from '../../../../api/crypto';
import { useCookies } from 'react-cookie';

const LoginForm = () => {
  const NAVER_URI = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}&state=NAVER`;
  const KAKAO_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}`;
  const GOOGLE_URI = `https://accounts.google.com/o/oauth2/v2/auth?response_type=token&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email`;
  const APPLE_URI = `https://appleid.apple.com/auth/authorize?response_type=code id_token&response_mode=fragment&client_id=${process.env.REACT_APP_APPLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_APPLE_REDIRECT_URI}&usePopup=false`;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [loginstay, setLoginstay] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['loginstay']);

  useEffect(() => {
    if (cookies.loginstay !== undefined) {
      setLoginstay(true);
      const token = getCookieEvToken();
      if (token !== undefined) {
        navigate('/ev/mypage1');
      }
    }
  }, [cookies.loginstay]);

  const handleOnChange = (checked) => {
    setLoginstay(checked);
    if (checked) {
      setCookie('loginstay', loginstay, { maxAge: 31536000 });
    } else {
      removeCookie('loginstay');
    }
  };

  // useForm 사용을 위한 선언
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // submit 이후 동작할 코드
  // 백으로 유저 정보 전달
  const onValid = async ({ username, password }) => {
    const response = await loginUser({
      username,
      password: encrypt(password),
      grant_type: 'password',
      scope: 'mobileclient',
      login_type: 'email',
      url: '/auth/oauth/token',
    });

    if (response.status) {
      // 쿠키에 Refresh Token, store에 Access Token 저장
      // console.log('response.json.access_token : ' + JSON.stringify(response.json.data.access_token));
      // console.log('response.json.refresh_token : ' + JSON.stringify(response.json.data.refresh_token));
      // console.log('response.json.expires_in : ' + JSON.stringify(response.json.data.expires_in));

      if (response.json.data.error !== undefined) {
        alert(JSON.stringify(response.json.data.error_description).replace(/"/g, ''));
        return;
      } else {
        // console.log('expires_in : ' + JSON.stringify(response.json.data.expires_in));
        // console.log('expires_in : ' + new Date(JSON.stringify(response.json.data.expires_in)));
        // setRefreshEvToken(JSON.stringify(response.json.data.refresh_token), JSON.stringify(response.json.data.expires_in));
        setAccessEvToken(JSON.stringify(response.json.data.access_token), JSON.stringify(response.json.data.expires_in));
        setEvUserNo(JSON.stringify(response.json.data.user_name));
        setRefreshEvToken(JSON.stringify(response.json.data.refresh_token));

        dispatch(SET_EV_TOKEN(JSON.stringify(response.json.data.access_token)));
        return navigate('/ev/mypage1');
      }
    } else {
      alert('아이디 비밀번호를 확인해주세요!');
      // console.log(response.json);
    }
    // input 태그 값 비워주는 코드
    setValue('password', '');
  };

  return (
    <>
      <section className="ev-sub-sect">
        <form className="login-wp" onSubmit={handleSubmit(onValid)}>
          <h1>ELVIS 로그인</h1>
          <div className="input-wp">
            <input
              type="text"
              name="username"
              defaultValue={username}
              placeholder="이메일"
              {...register('username', { onChange: (e) => setUsername(e.target.value) })}
            />
            <ErrorMessage
              name="username"
              errors={errors}
              render={({ message }) => (
                <p style={{ color: 'red' }} className="text-sm font-medium text-rose-500">
                  {message}
                </p>
              )}
            />
            <input type="password" name="password" placeholder="비밀번호" {...register('password')} />
            <ErrorMessage
              name="password"
              errors={errors}
              render={({ message }) => (
                <p style={{ color: 'red' }} className="text-sm font-medium text-rose-500">
                  {message}
                </p>
              )}
            />
          </div>
          <div className="txt-wp">
            <div className="agree">
              <label htmlFor="loginstay">
                <input
                  type="checkbox"
                  id="loginstay"
                  onChange={(e) => {
                    handleOnChange(e.target.checked);
                  }}
                  checked={loginstay}
                />
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
          <button className="orange-btn" type="submit">
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
