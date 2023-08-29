import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEv } from 'store/EvReducer';

const BreakdownAddForm = () => {
  const dispatch = useDispatch();
  const rechgList = useSelector((state) => state.EvReducer.data);
  const [selectItem, setSelectItem] = useState('');

  // useEffect(() => {
  //   const url = '/api/m-service-mobile/rechgst/getELinkRechgsts';
  //   const newList = { url: url };
  //   dispatch(selectEv(newList));
  // }, [dispatch]);

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
          <select name="cate" id="cate" onChange={(e) => setSelectItem(e.target.value)}>
              {/* <option value="Q010" selected={selectItem === 'Q010' && true}>사용법</option>
              <option value="Q020" selected={selectItem === 'Q020' && true}>결제/환불</option>
              <option value="Q030" selected={selectItem === 'Q030' && true}>기타</option> */}
          </select>
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
