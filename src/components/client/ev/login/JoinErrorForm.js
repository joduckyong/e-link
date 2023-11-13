import React from 'react';
import { NavLink } from 'react-router-dom';

const JoinErrorForm = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <form className="join-wp">
          <h1>ELVIS 회원가입 실패</h1>
          <ol className="order-wp">
            <li>약관동의</li>
            <li>정보입력</li>
            <li className="active">가입 실패</li>
          </ol>
          <div className="gray-box finish-wp">
            <h2>회원가입이 정상적이지 않습니다.</h2>
            <p>
              Charge your time with <b>ELVIS</b>
            </p>
            <NavLink to="/ev/login" className="orange-btn">
              로그인 화면으로 이동
            </NavLink>
          </div>
        </form>
      </section>
    </>
  );
};

export default JoinErrorForm;
