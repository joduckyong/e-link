import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCookieEvUserNo } from '../../../storage/EvCookie';
import { selectEv, insertEv } from 'store/EvReducer';

const BreakdownAddForm = () => {
  const dispatch = useDispatch();
  const rechgList = useSelector((state) => state.EvReducer.data);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectRechgstId, setSelectRechgstId] = useState('');
  const [selectInstId, setSelectInstId] = useState('');

  useEffect(() => {
    const url = '/api/m-service-mobile/rechgst/getELinkRechgsts';
    const newList = { url: url };
    dispatch(selectEv(newList));
  }, [dispatch]);

  const selectRechgsts = (e) => {
    setSelectRechgstId(e.target.value);
    setSelectInstId(e.target[e.target.selectedIndex].dataset.instid);
  }

  const onCreate = async (e) => {
    e.preventDefault();

    const evUserNo = getCookieEvUserNo();
    const url = '/api/m-service-mobile/rechgst/insertRequest';

    if (selectRechgstId === '') {
      alert('충전소를 선택하세요');
      return;
    }

    if (title === '') {
      alert('제목을 입력하세요');
      return;
    }
    
    if (content === '') {
      alert('내용을 입력하세요');
      return;
    }

    if (window.confirm('등록 하시겠습니까?')) {
      const newList = {
        url: url,
        instId: selectInstId,
        rechgstId: selectRechgstId,
        reqTtl: title,
        reqCont: content,
        reqStats: 'W',
        userNo: evUserNo,
        atchFileUuid: '',
        atchFileIds: '',
      };

      const result = await dispatch(insertEv(newList));
      if (result.payload.status === "OK") {
        alert('등록 되었습니다.');
        document.location.href = '/ev/breakdown';
      } else {
        alert('등록에 실패하였습니다.');
      }
    }
  };

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
          <select name="cate" id="cate" onChange={(e) => selectRechgsts(e)} value={selectRechgstId}>
            <option value="">선택하세요</option>
            {rechgList.map((list, index) => (
              <option key={index} value={list.rechgstId} data-instid={list.instId}>{list.rechgstNm}</option>
            ))}
          </select>
          <input type="text" placeholder="제목을 입력해주세요." onChange={(e) => setTitle(e.target.value)} value={title}/>
          <textarea name="" id="" cols="30" rows="10" placeholder="신고 하실 내용을 입력해주세요." onChange={(e) => setContent(e.target.value)} value={content}></textarea>

          {/* <div className="file">
            <div className="input-box">
              <label htmlFor="choice" className="file-choice">
                <input type="file" id="choice" className="file" />
                파일첨부 +
              </label>
              <span className="upload-name on">24654647477_contact_us.jpeg</span>
            </div>
            <p>※ 첨부파일은 최대 50MB 이하의 jpg, png, gif, jpeg, pdf, hwp, xlsx, docx, ppt, pptx 파일만 업로드 가능합니다.</p>
          </div> */}

          <button className="orange-btn" onClick={onCreate}>신고하기</button>
        </form>
      </section>
    </>
  );
};

export default BreakdownAddForm;
