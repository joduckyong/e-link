import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCookieEvUserNo } from '../../../storage/EvCookie';
import { insertEv } from 'store/EvReducer';

const InquiryAddForm = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');

  const onCreate = async (e) => {
    e.preventDefault();

    const evUserNo = getCookieEvUserNo();
    const url = '/api/m-service-mobile/question/insert';
    
    if (content === '') {
      alert('내용을 입력하세요');
      return;
    }

    if (window.confirm('등록 하시겠습니까?')) {
      const newList = {
        url: url,
        catNo: 'Q010',
        qustCont: content,
        qustStats: 'W',
        userNo: evUserNo,
      };
      const result = await dispatch(insertEv(newList));
      if (result.payload.data > 0) {
        alert('등록 되었습니다.');
        document.location.href = '/ev/inquiry';
      } else {
        alert('등록에 실패하였습니다.');
      }
    }
  };

  return (
    <>
      <section className="ev-sub-sect">
        <form className="write-wp">
          <h1>문의하기</h1>
          <div className="chk-wp">
            <div className="agree">
              {/* <label for="secret">
                <input type="checkbox" id="secret" />
                비밀글<span className="chkimg"></span>
              </label> */}
            </div>
          </div>
          {/* <input type="text" placeholder="제목을 입력해주세요." onChange={(e) => setTitle(e.target.value)} value={title}/> */}
          <textarea cols="30" rows="10" placeholder="문의 하실 내용을 입력해주세요." onChange={(e) => setContent(e.target.value)} value={content}></textarea>
          <button className="orange-btn" onClick={onCreate}>문의하기</button>
        </form>
      </section>
    </>
  );
};

export default InquiryAddForm;
