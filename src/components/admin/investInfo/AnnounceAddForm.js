import React from 'react';
import { NavLink } from 'react-router-dom';

const AnnounceAddForm = () => {
  return (
    <div className="a-content">
      <h2>공고등록</h2>
      <div className="ban-list bg-white">
        <div className="btn-area position">
          <button className="btn btn-white btn-120">취소</button>
          <button className="btn btn-blue btn-120">등록</button>
        </div>
        <div className="edit">
          <div className="ed-tit">
            <div className="s-tit">제목</div>
            <input type="text" placeholder="제목을 입력해주세요." />
          </div>
          <div className="ed-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="내용을 입력해주세요."
            ></textarea>
          </div>
          <div className="ed-file">
            <div className="s-tit">첨부파일</div>
            <div className="file-area">
              <div className="input-box">
                <label htmlFor="e-choice01" className="file-choice">
                  <input type="file" id="e-choice01" className="file" />+
                  파일선택
                </label>
                <span className="upload-name">선택된 파일 없음</span>
              </div>
            </div>
            <NavLink to="" className="btn-add">
              <img src="/img/admin/ico-plus.svg" alt="" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnounceAddForm;
