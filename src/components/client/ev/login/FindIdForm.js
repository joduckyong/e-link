import React from 'react';

const FindIdForm = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <form className="findid-wp">
          <h1>아이디 찾기</h1>
          <div className="gray-box">
            <button type="button" className="orange-btn" onclick="location.href='./findid2.html'">
              휴대폰 본인인증
            </button>
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

export default FindIdForm;
