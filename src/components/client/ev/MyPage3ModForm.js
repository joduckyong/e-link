import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCookieEvUserNo } from '../../../storage/EvCookie';
import { selectEv, updateEv } from 'store/EvReducer';

const MyPage3ModForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const mypage3List = useSelector((state) => state.EvReducer.data);
  const rechgList = useSelector((state) => state.EvReducer.data);
  const [pstNo, setPstNo] = useState('');
  // const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectCategory, setSelectCategory] = useState('1');
  const [selectRechgstId, setSelectRechgstId] = useState('');
  const [selectInstId, setSelectInstId] = useState('');
  
  if(mypage3List.length === 0){  //새로고침 시 목록 페이지 이동
    window.location.href = '/ev/mypage3';
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
    setPstNo(mypage3List[id].pstNo)
    setContent(mypage3List[id].pstCont);
    setSelectRechgstId(mypage3List[id].rechgstId)
    setSelectInstId(mypage3List[id].instId)
    if(mypage3List[id].rechgstId){  //충전소게시판 선택
      setSelectCategory('2')
    }
  }, []);

  const onEdit = async (e) => {
    e.preventDefault();

    const evUserNo = getCookieEvUserNo();
    const url = '/api/m-service-mobile/community/updatePost';

    let newList = {}

    if(selectCategory === '2'){ //충전소게시판
      if (selectRechgstId === '') {
        alert('충전소를 선택하세요');
        return;
      }

      newList = {
        url: url,
        pstNo: pstNo,
        userNo: evUserNo,
        instId: selectInstId,
        rechgstId: selectRechgstId,
        pstCont: content,
        atchFileUuid: '',
        atchFileIds: '',
        pstBlnd: 'N',
      }
    }else if(selectCategory === '1'){ //자유게시판
      newList = {
        url: url,
        pstNo: pstNo,
        userNo: evUserNo,
        pstCont: content,
        atchFileUuid: '',
        atchFileIds: '',
        pstBlnd: 'N',
      }
    }
    
    if (content === '') {
      alert('내용을 입력하세요');
      return;
    }

    if (window.confirm('수정 하시겠습니까?')) {

      const result = await dispatch(updateEv(newList));
      if (result.payload.status === "OK") {
        alert('수정 되었습니다.');
        document.location.href = '/ev/mypage3';
      } else {
        alert('수정에 실패하였습니다.');
      }
    }
  };

  return (
    <>
      <section className="ev-sub-sect">
        <form className="write-wp">
          <h1>커뮤니티</h1>
          <div className="chk-wp">
            <div className="agree">
              {/* <label for="secret">
                <input type="checkbox" id="secret" />
                비밀글<span className="chkimg"></span>
              </label> */}
            </div>
          </div>
          <select name="cate" id="cate" onChange={(e) => setSelectCategory(e.target.value)} value={selectCategory}>
            <option value="1">자유게시판</option>
            <option value="2">충전소게시판</option>
          </select>
          {selectCategory === '2' &&
            <select name="cate" id="cate" onChange={(e) => selectRechgsts(e)} value={selectRechgstId}>
              <option value="">선택하세요</option>
              {rechgList.map((list, index) => (
                <option key={index} value={list.rechgstId} data-instid={list.instId}>{list.instId}</option>
              ))}
            </select>
          }
          {/* <input type="text" placeholder="제목을 입력해주세요." onChange={(e) => setTitle(e.target.value)} value={title}/> */}
          <textarea cols="30" rows="10" placeholder="내용을 입력해주세요." onChange={(e) => setContent(e.target.value)} value={content}></textarea>
          <button className="orange-btn" onClick={onEdit}>수정하기</button>
        </form>
      </section>
    </>
  );
};

export default MyPage3ModForm;