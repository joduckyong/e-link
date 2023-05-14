import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectEv } from 'store/EvReducer';
import { getCookieEvUserNo } from '../../../storage/EvCookie';

const MyPage1Form = () => {
  const dispatch = useDispatch();
  const myPageList = useSelector((state) => state.EvReducer.data);

  useEffect(() => {
    const evUserNo = getCookieEvUserNo();
    const url = '/api/m-service-mobile/rechgst/getUserRechgInfo';
    const newList = { url: url, userNo: evUserNo };
    dispatch(selectEv(newList));
  }, [dispatch]);

  return (
    <>
      <section className="ev-sub-sect">
        <div className="costomer-wp mypage-wp">
          <h1>마이페이지</h1>
          <ul className="link-wp">
            <li className="active">
              <Link to="/ev/mypage1">이용내역</Link>
            </li>
            <li>
              <Link to="/ev/mypage2">ELVIS 캐시</Link>
            </li>
            <li>
              <Link to="/ev/mypage3">커뮤니티</Link>
            </li>
          </ul>
          <div className="list-wp">
            <div className="top-radio-wp">
              <div className="radio-wp">
                <label for="date01">
                  <input type="radio" id="date01" name="date" checked />
                  <span className="radioimg"></span>당월
                </label>
                <label for="date02">
                  <input type="radio" id="date02" name="date" />
                  <span className="radioimg"></span>3개월
                </label>
                <label for="date03">
                  <input type="radio" id="date03" name="date" />
                  <span className="radioimg"></span>6개월
                </label>
                <label for="date04">
                  <input type="radio" id="date04" name="date" />
                  <span className="radioimg"></span>직접입력
                </label>
              </div>
              <div className="date-wp">
                <input type="text" className="datepicker" disabled />
                <input type="text" className="datepicker" disabled />
              </div>
              <button className="orange-btn">조회</button>
            </div>
            <div className="usage-list-wp">
              <ol className="list usage-list">
                <li className="ttl" >
                  <p>번호</p>
                  <p>이용시간</p>
                  <p>이용한 충전소</p>
                  <p>결제금액</p>
                  <p>충전량(KWh)</p>
                </li>
                {myPageList.map((list, index) => (
                  <li key={index}>
                    <p>{myPageList.length - index}</p>
                    <p></p>
                    <p>{list.rechgstNm}</p>
                    <p>{list.payAmt}</p>
                    <p>{list.rechgWh}</p>
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

export default MyPage1Form;
