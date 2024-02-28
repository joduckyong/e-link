import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCookieEvUserNo } from '../../../storage/EvCookie';
import { selectEv, insertEv } from 'store/EvReducer';

const MyPage3AddForm = () => {
  const dispatch = useDispatch();
  const rechgList = useSelector((state) => state.EvReducer.data);
  // const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectCategory, setSelectCategory] = useState('1');
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
  };

  const onCreate = async (e) => {
    e.preventDefault();

    const evUserNo = getCookieEvUserNo();
    const url = '/api/m-service-mobile/community/insertPost';

    let newList = {};

    if (selectCategory === '2') {
      //충전소게시판
      if (selectRechgstId === '') {
        alert('충전소를 선택하세요');
        return;
      }

      newList = {
        url: url,
        userNo: evUserNo,
        instId: selectInstId,
        rechgstId: selectRechgstId,
        pstCont: content,
        atchFileUuid: '',
        atchFileIds: '',
        pstBlnd: 'N',
      };
    } else if (selectCategory === '1') {
      //자유게시판
      newList = {
        url: url,
        userNo: evUserNo,
        pstCont: content,
        atchFileUuid: '',
        atchFileIds: '',
        pstBlnd: 'N',
      };
    }

    if (content === '') {
      alert('내용을 입력하세요');
      return;
    }

    if (window.confirm('등록 하시겠습니까?')) {
      const result = await dispatch(insertEv(newList));
      if (result.payload.status === 'OK') {
        alert('등록 되었습니다.');
        document.location.href = '/ev/mypage3';
      } else {
        alert('등록에 실패하였습니다.');
      }
    }
  };

  return (
    <>
      <section className="ev-sub-sect">
        <form className="write-wp">
          <h1>문의내역</h1>
          <div className="chk-wp">
            <div className="agree"></div>
          </div>
          <select name="cate" id="cate" onChange={(e) => setSelectCategory(e.target.value)} value={selectCategory}>
            <option value="1">자유게시판</option>
            <option value="2">충전소게시판</option>
          </select>
          {selectCategory === '2' && (
            <select name="cate" id="cate" onChange={(e) => selectRechgsts(e)} value={selectRechgstId}>
              <option value="">선택하세요</option>
              {rechgList.map((list, index) => (
                <option key={index} value={list.rechgstId} data-instid={list.instId}>
                  {list.instId}
                </option>
              ))}
            </select>
          )}
          {/* <input type="text" placeholder="제목을 입력해주세요." onChange={(e) => setTitle(e.target.value)} value={title}/> */}
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="내용을 입력해주세요."
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></textarea>

          <button className="orange-btn" onClick={onCreate}>
            등록하기
          </button>
        </form>
      </section>
    </>
  );
};

export default MyPage3AddForm;
