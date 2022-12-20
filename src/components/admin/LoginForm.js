import React from 'react';

const LoginForm = () => {
  return (
    <div className="adminsub admin-login">
      <div className="logo-img">
        <div className="in">
          <h1>
            <img src="/img/common/logo.svg" alt="" />
          </h1>
          <span className="ad-txt">Admin</span>
          <div className="login-area">
            <div className="in">
              <input type="text" name="id" placeholder="아이디" />
              <input type="password" name="password" placeholder="비밀번호" />
              <div className="keep-chk">
                <label for="keep">
                  <input type="checkbox" id="keep" />
                  <span className="chkimg"></span>
                  아이디저장
                </label>
              </div>
              <button
                type="button"
                className="btn_norm mnp"
                onclick="location.href='a01-1.html';"
              >
                로그인
              </button>
            </div>
          </div>
        </div>
        <p className="copyright">ⓒ2022 LS E-Link. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default LoginForm;
