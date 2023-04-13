import React from 'react';
import { NavLink } from 'react-router-dom';

const Join3Form = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <form className="join-wp">
          <h1>ELVIS 회원가입</h1>
          <ol className="order-wp">
            <li>약관동의</li>
            <li>정보입력</li>
            <li className="active">가입완료</li>
          </ol>
          <div className="gray-box finish-wp">
            <h2>회원가입이 완료되었습니다.</h2>
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

export default Join3Form;
