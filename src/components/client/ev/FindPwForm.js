import React from 'react';

const FindPwForm = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <form className="findpw-wp">
          <h1>비밀번호 찾기</h1>
          <div className="gray-box">
            <h3 className="mini-ttl">아이디</h3>
            <input type="text" placeholder="아이디를 입력해주세요." />
            <button className="orange-btn">휴대폰 본인인증</button>
            <div className="notice">
              <img src="/img/ev/ev_notice_ico.png" alt="!" />
              소셜 간편회원은 <br className="mo-br" />
              아이디/비밀번호 찾기가 제공되지 않습니다.
              <br />각 소셜 서비스를 통해 확인 부탁드립니다.
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default FindPwForm;
