import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectEv } from 'store/EvReducer';
import { getCookieEvUserNo } from '../../../storage/EvCookie';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import moment from 'moment';

export function changeFormat(date, format) {
  //moment 변환을 함수로 미리 빼 두어서 사용.
  if (moment(date).isValid()) {
    return moment(date).format(format);
  } else {
    return null;
  }
}

const MyPage3Form = () => {
  const dispatch = useDispatch();
  const myPageList = useSelector((state) => state.EvReducer.data);

  useEffect(() => {
    const url = '/api/m-service-mobile/community/getPostList';
    const newList = { url: url, category: 0, dttm: '', next: true, size: 10 };
    dispatch(selectEv(newList));
  }, [dispatch]);

  return (
    <>
      <section className="ev-sub-sect">
        <div className="costomer-wp mypage-wp">
          <h1>마이페이지</h1>
          <ul className="link-wp">
            <li>
              <Link to="/ev/mypage1">이용내역</Link>
            </li>
            {/* <li>
              <Link to="">ELVIS 캐시</Link>
            </li> */}
            <li className="active">
              <Link to="/ev/mypage3">커뮤니티</Link>
            </li>
          </ul>
          <div className="list-wp">
            <Link to="" className="write mp-write">
              글쓰기
            </Link>
            <div className="usage-list-wp">
              <ol className="list usage-list">
                <li className="ttl">
                  <p>번호</p>
                  <p>사용자 번호</p>
                  <p>사용자 이름</p>
                  <p>본문</p>
                  <p>등록시간</p>
                </li>
                {myPageList.map((list, index) => (
                  <li key={index}>
                    <p>{myPageList.length - index}</p>
                    <p>{list.userNo}</p>
                    <p>{list.userNm}</p>
                    <p>{list.pstCont}</p>
                    <p>{changeFormat(list.regDttm, 'yyyy-MM-DD')}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPage3Form;
