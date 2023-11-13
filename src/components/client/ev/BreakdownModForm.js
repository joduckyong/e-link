import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCookieEvUserNo } from '../../../storage/EvCookie';
import { selectEv, updateEv } from 'store/EvReducer';

const BreakdownModForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const breakdownList = useSelector((state) => state.EvReducer.data);
  const rechgList = useSelector((state) => state.EvReducer.data);
  const [reqNo, setReqNo] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectRechgstId, setSelectRechgstId] = useState('');
  const [selectInstId, setSelectInstId] = useState('');
  
  if(breakdownList.length === 0){  //새로고침 시 목록 페이지 이동
    window.location.href = '/ev/breakdown';
  }

  useEffect(() => {
    const url = '/api/m-service-mobile/rechgst/getELinkRechgsts';
    const newList = { url: url };
    dispatch(selectEv(newList));
  }, [dispatch]);

  const selectRechgsts = (e) => {
    setSelectRechgstId(e.target.value);
    setSelectInstId(e.target[e.target.selectedIndex].dataset.instid);
  }

  useEffect(() => {
    setReqNo(breakdownList[id].reqNo)
    setTitle(breakdownList[id].reqTtl);
    setContent(breakdownList[id].reqCont);
    setSelectRechgstId(breakdownList[id].rechgstId)
    setSelectInstId(breakdownList[id].instId)
  }, []);

  const onEdit = async (e) => {
    e.preventDefault();

    const evUserNo = getCookieEvUserNo();
    const url = '/api/m-service-mobile/rechgst/updateRequest';

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

    if (window.confirm('수정 하시겠습니까?')) {
      const newList = {
        url: url,
        reqNo: reqNo,
        instId: selectInstId,
        rechgstId: selectRechgstId,
        reqTtl: title,
        reqCont: content,
        reqStats: 'W',
        userNo: evUserNo,
        atchFileUuid: '',
        atchFileIds: '',
      };

      const result = await dispatch(updateEv(newList));
      if (result.payload.status === "OK") {
        alert('수정 되었습니다.');
        document.location.href = '/ev/breakdown';
      } else {
        alert('수정에 실패하였습니다.');
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
            <option value="" sele>선택하세요</option>
            {rechgList.map((list, index) => (
              <option key={index} value={list.rechgstId} data-instid={list.instId}>{list.instId}</option>
            ))}
          </select>
          <input type="text" placeholder="제목을 입력해주세요." onChange={(e) => setTitle(e.target.value)} value={title}/>
          <textarea cols="30" rows="10" placeholder="신고 하실 내용을 입력해주세요." onChange={(e) => setContent(e.target.value)} value={content}></textarea>
          <button className="orange-btn" onClick={onEdit}>수정하기</button>
        </form>
      </section>
    </>
  );
};

export default BreakdownModForm;