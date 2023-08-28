import React from 'react';

const BreakdownAddForm = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <form className="write-wp">
          <h1>고장신고</h1>
          <div className="chk-wp">
            <div className="agree">
              {/* <label for="secret">
                <input type="checkbox" id="secret" />
                비밀글<span className="chkimg"></span>
              </label> */}
            </div>
          </div>

          <input type="text" placeholder="제목을 입력해주세요." />
          <textarea name="" id="" cols="30" rows="10" placeholder="문의 하실 내용을 입력해주세요."></textarea>

          <div className="file">
            <div className="input-box">
              <label htmlFor="choice" className="file-choice">
                <input type="file" id="choice" className="file" />
                파일첨부 +
              </label>
              <span className="upload-name on">24654647477_contact_us.jpeg</span>
            </div>
            <p>※ 첨부파일은 최대 50MB 이하의 jpg, png, gif, jpeg, pdf, hwp, xlsx, docx, ppt, pptx 파일만 업로드 가능합니다.</p>
          </div>

          <button className="orange-btn">신고하기</button>
        </form>
      </section>
    </>
  );
};

export default BreakdownAddForm;
