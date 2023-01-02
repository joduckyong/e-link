import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { loginUser } from '../../api/Users';
import { removeCookieToken, setRefreshToken } from '../../storage/Cookie';
import { SET_TOKEN } from '../../store/Auth';

import { useCookies } from 'react-cookie';

// import tw from 'twin.macro';
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [adminId, setAdminId] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['rememberId']);

  useEffect(() => {
    removeCookieToken();
  }, []);

  useEffect(() => {
    // console.log('cookies.rememberId : ' + cookies.rememberId);
    if (cookies.rememberId !== undefined) {
      setAdminId(cookies.rememberId);
      setIsRemember(true);
    }
  }, [cookies.rememberId]);

  const handleOnChange = (checked) => {
    setIsRemember(checked);
    if (checked) {
      setCookie('rememberId', adminId, { maxAge: 2000 });
    } else {
      removeCookie('rememberId');
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
  const onValid = async ({ adminId, adminPw }) => {
    const response = await loginUser({ adminId, adminPw });

    if (response.status) {
      // 쿠키에 Refresh Token, store에 Access Token 저장
      // console.log('response.json.accessToken : ' + response.json.accessToken);
      // console.log('response.json.refreshToken : ' + response.json.refreshToken);
      setRefreshToken(response.json.accessToken);
      // setRefreshToken(response.json.refreshToken);
      dispatch(SET_TOKEN(response.json.accessToken));
      return navigate('/admin/main/popup');
    } else {
      alert('아이디 비밀번호를 확인해주세요!');
      // console.log(response.json);
    }
    // input 태그 값 비워주는 코드
    setValue('adminPw', '');
  };

  return (
    <>
      <div className="adminsub admin-login">
        <div className="logo-img">
          <div className="in">
            <h1>
              <img src="/img/common/logo.svg" alt="" />
            </h1>
            <span className="ad-txt">Admin</span>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onValid)}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="login-area">
                <div className="in">
                  <input
                    type="text"
                    name="adminId"
                    defaultValue={adminId}
                    placeholder="아이디"
                    {...register('adminId', { onChange: (e) => setAdminId(e.target.value) })}
                  />
                  <ErrorMessage
                    name="adminId"
                    errors={errors}
                    render={({ message }) => (
                      <p style={{ color: 'red' }} className="text-sm font-medium text-rose-500">
                        {message}
                      </p>
                    )}
                  />
                  <input type="password" name="adminPw" placeholder="비밀번호" {...register('adminPw')} />
                  <ErrorMessage
                    name="adminPw"
                    errors={errors}
                    render={({ message }) => (
                      <p style={{ color: 'red' }} className="text-sm font-medium text-rose-500">
                        {message}
                      </p>
                    )}
                  />
                  <div className="keep-chk">
                    <label htmfor="keep">
                      <input
                        type="checkbox"
                        id="keep"
                        onChange={(e) => {
                          handleOnChange(e.target.checked);
                        }}
                        checked={isRemember}
                      />
                      <span className="chkimg"></span>
                      아이디저장
                    </label>
                  </div>
                  <button type="submit" className="btn_norm mnp">
                    로그인
                  </button>
                </div>
              </div>
            </form>
          </div>
          <p className="copyright">ⓒ2022 LS E-Link. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
