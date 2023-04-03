import React from 'react';

const FindId2Form = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <form className="findid-wp">
          <h1>아이디 찾기 결과</h1>
          <div className="result-wp">
            <div className="gray-mini-box">아래의 회원정보를 확인해주세요.</div>
            <ul className="info-wp">
              <li>
                <h2>이름</h2>
                <p>이지원</p>
              </li>
              <li>
                <h2>아이디</h2>
                <p>leejiwon1</p>
              </li>
              <li>
                <h2>가입일자</h2>
                <p>2023-05-31</p>
              </li>
            </ul>
            <a href="./login.html" className="orange-btn">
              로그인
            </a>
            <button className="orange-btn border-btn">비밀번호 재설정</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FindId2Form;
