import React from 'react';

const Join3Form = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <form className="join-wp">
          <h1>ELVIS 회원가입</h1>
          <ol className="order-wp">
            <li className="active">약관동의</li>
            <li>정보입력</li>
            <li>가입완료</li>
          </ol>
          <div className="gray-box finish-wp">
            <h2>회원가입이 완료되었습니다.</h2>
            <p>
              Charge your time with <b>ELVIS</b>
            </p>
            <a className="orange-btn" href="./login.html">
              로그인 화면으로 이동
            </a>
          </div>
        </form>
      </section>
    </>
  );
};

export default Join3Form;
