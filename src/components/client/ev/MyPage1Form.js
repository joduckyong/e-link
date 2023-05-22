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

const MyPage1Form = () => {
  const dispatch = useDispatch();
  const myPageList = useSelector((state) => state.EvReducer.data);
  const [dateType, setDateType] = useState('1M');
  const [popupStartdate, setPopupStartdate] = useState();
  const [popupEnddate, setPopupEnddate] = useState();

  useEffect(() => {
    changeDate(dateType);
  }, []);

  useEffect(() => {
    const evUserNo = getCookieEvUserNo();
    const url = '/api/m-service-mobile/rechgst/getUserRechgInfo';
    const newList = { url: url, userNo: evUserNo, startDttm: changeFormat(popupStartdate, 'yyyy-MM-DD'), endDttm: changeFormat(popupEnddate, 'yyyy-MM-DD') };
    dispatch(selectEv(newList));
  }, [dispatch]);

  // 검색
  const onSearch = () => {
    const evUserNo = getCookieEvUserNo();
    const url = '/api/m-service-mobile/rechgst/getUserRechgInfo';
    const newList = { url: url, userNo: evUserNo, startDttm: changeFormat(popupStartdate, 'yyyy-MM-DD'), endDttm: changeFormat(popupEnddate, 'yyyy-MM-DD') };
    dispatch(selectEv(newList));
  };

  function changeDate(type){
    let startDate = new Date();
    let endDate = new Date();
    switch(type){
      case '1M':
        startDate.setDate(1);
        break;
      case '3M':
        startDate.setMonth(startDate.getMonth() - 3);
        break;
      case '6M':
        startDate.setMonth(startDate.getMonth() - 6);
        break;
      default:
        startDate = '';
        endDate = '';
    }

    setDateType(type);
    setPopupStartdate(startDate);
    setPopupEnddate(endDate);
  }

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
                  <input type="radio" id="date01" name="date" onClick={(e)=> changeDate('1M')} checked={dateType === '1M' && true} />
                  <span className="radioimg"></span>당월
                </label>
                <label for="date02">
                  <input type="radio" id="date02" name="date" onClick={(e)=> changeDate('3M')} checked={dateType === '3M' && true} />
                  <span className="radioimg"></span>3개월
                </label>
                <label for="date03">
                  <input type="radio" id="date03" name="date" onClick={(e)=> changeDate('6M')} checked={dateType === '6M' && true} />
                  <span className="radioimg"></span>6개월
                </label>
                <label for="date04">
                  <input type="radio" id="date04" name="date" onClick={(e)=> changeDate('')} checked={dateType === '' && true} />
                  <span className="radioimg"></span>직접입력
                </label>
              </div>
              <div className="date-wp">
                <DatePicker 
                  locale={ko} 
                  dateFormat="yyyy-MM-dd" 
                  selected={popupStartdate} 
                  onChange={(date) => setPopupStartdate(date)}
                  disabled={dateType === '' ? false : true}
                />
                <DatePicker 
                  locale={ko} 
                  dateFormat="yyyy-MM-dd" 
                  selected={popupEnddate} 
                  onChange={(date) => setPopupEnddate(date)} 
                  disabled={dateType === '' ? false : true}
                />
              </div>
              <button className="orange-btn" onClick={onSearch}>조회</button>
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
