import React from 'react';

const InquiryAddForm = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <form className="write-wp">
          <h1>문의하기</h1>
          <div className="chk-wp">
            <div className="agree">
              <label for="secret">
                <input type="checkbox" id="secret" />
                비밀글<span className="chkimg"></span>
              </label>
            </div>
          </div>
          <input type="text" placeholder="제목을 입력해주세요." />
          <textarea name="" id="" cols="30" rows="10" placeholder="문의 하실 내용을 입력해주세요."></textarea>
          <button className="orange-btn">문의하기</button>
        </form>
      </section>
    </>
  );
};

export default InquiryAddForm;