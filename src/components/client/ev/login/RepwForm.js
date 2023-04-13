import React from 'react';

const RwPwForm = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <form className="findpw-wp">
          <h1>비밀번호 재설정</h1>
          <div className="gray-box">
            <h3 className="mini-ttl">새 비밀번호</h3>
            <input type="password" placeholder="영어, 숫자, 특수문자 조합 8~15자리" />
            <h3 className="mini-ttl">비밀번호 확인</h3>
            <input type="password" placeholder="영어, 숫자, 특수문자 조합 8~15자리" />
            <button className="orange-btn">비밀번호 변경</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default RwPwForm;
