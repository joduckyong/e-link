import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCookieEvUserNo } from '../../../storage/EvCookie';
import moment from 'moment';
import { deleteEv, selectUserNo } from 'store/EvReducer';

export function changeFormat(date, format) {
  //moment 변환을 함수로 미리 빼 두어서 사용.
  if (moment(date).isValid()) {
    return moment(date).format(format);
  } else {
    return null;
  }
}

const MyPage3InfoForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const mypage3List = useSelector((state) => state.EvReducer.data);
  const [pstNo, setPstNo] = useState('');
  const [toggleActive, setToggleActive] = useState(false);
  const [userNo, setUserNo] = useState('');

  if(mypage3List.length === 0){  //새로고침 시 목록 페이지 이동
    window.location.href = '/ev/mypage3';
  }

  useEffect(() => {
    dispatch(selectUserNo()).then((state) => {
      setPstNo(mypage3List[id].pstNo)
      setUserNo(state.payload.userNo);
    });
  }, []);

  const onRemove = (e) => {
    e.preventDefault();

    const evUserNo = getCookieEvUserNo();
    const url = '/api/m-service-mobile/community/deletePost';

    if (window.confirm('삭제 하시겠습니까?')) {
      const newList = {
        url: url,
        pstNo: pstNo,
      };

      dispatch(deleteEv(newList)).then(() => {
        alert('삭제 되었습니다.');
        document.location.href = '/ev/mypage3';
      });
    }
  };

  return (
    <>
      <section className="ev-sub-sect">
        <div className="view-wp">
          <div className="ttl-wp">
            <h2>커뮤니티</h2>
            <h1></h1>
            <div className="info">
              <p>
                {mypage3List[id].regUserNo}<span>|</span>
              </p>
              <p>{changeFormat(mypage3List[id].regDttm, 'yyyy-MM-DD') || ''}</p>
            </div>
            { mypage3List[id].userNo === userNo &&
            <div className="modify-wp">
              <button className="btn" onClick={() => setToggleActive(!toggleActive)}>
                <img src="/img/ev/ev_view_btn.png" alt="" />
              </button>
              <div className="bub" style={toggleActive ? {display:''} : {display:'none'}}>
                <Link className="modify" to={`/ev/mypage3Mod/${id}`}>
                  <img src="/img/ev/ev_view_modify.png" alt="" />
                  수정
                </Link>
                <Link className="modify" to="" onClick={onRemove}>
                  <img src="/img/ev/ev_view_delete.png" alt="" />
                  삭제
                </Link>
              </div>
            </div>
            }
          </div>
          <div className="cont-wp" dangerouslySetInnerHTML={{ __html: mypage3List[id].pstCont }}>
          </div>
          <div className="nav-wp">
          <Link className="arrow prev" to={ id < mypage3List.length-1 ? `/ev/mypage3Info/${Number(id)+1}` : `/ev/mypage3Info/${id}` }>
              <img src="/img/ev/ev_arrow_list.png" alt="화살표 왼쪽" />
              <span>이전글</span>
            </Link>
            <Link className="list" to="/ev/mypage3">
              목록
            </Link>
            <Link className="arrow next" to={ id > 0 ? `/ev/mypage3Info/${Number(id)-1}` : `/ev/mypage3Info/${id}` }>
              <span>다음글</span>
              <img src="/img/ev/ev_arrow_list.png" alt="화살표 오른쪽" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPage3InfoForm;
