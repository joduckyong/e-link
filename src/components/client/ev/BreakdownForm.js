import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectEv } from 'store/EvReducer';
import moment from 'moment';

export function changeFormat(date, format) {
  //moment 변환을 함수로 미리 빼 두어서 사용.
  if (moment(date).isValid()) {
    return moment(date).format(format);
  } else {
    return null;
  }
}

const BreakdownForm = () => {
  const dispatch = useDispatch();
  const breakdownList = useSelector((state) => state.EvReducer.data);

  useEffect(() => {
    const url = '/api/m-service-mobile/rechgst/getRequests';
    const newList = { url: url };
    dispatch(selectEv(newList));
  }, [dispatch]);

  return (
    <>
      <section className="ev-sub-sect">
        <div className="costomer-wp">
          <h1>고객센터</h1>
          <ul className="link-wp">
            <li>
              <Link to="/ev/notice">공지사항</Link>
            </li>
            <li>
              <Link to="/ev/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/ev/inquiry">문의하기</Link>
            </li>
            <li className="active">
              <Link to="/ev/breakdown">고장신고</Link>
            </li>
          </ul>
          <div className="list-wp">
            <div className="list-top">
              <b>Total {breakdownList.length}</b>
              <Link to="/ev/breakdownAdd" className="write">
                신고하기
              </Link>
            </div>
            <ol className="list inquiry-list">
              {breakdownList.map((list, index) => (
                <>
                  <li key={index}>
                    <Link to={`/ev/breakdownInfo/${index}`}>
                      <h3>No.{breakdownList.length - index}</h3>
                      <h2>
                        {/* <img src="/img/ev/ev_lock.png" alt="" /> */}
                        <span>{list.reqTtl}</span>
                      </h2>
                      <span className="name">{list.regUserNo}</span>
                      <p>{changeFormat(list.regDttm, 'yyyy-MM-DD') || ''}</p>
                    </Link>
                  </li>
                  {list.reqStats === 'F' && (
                    <li key={`ans_${index}`}>
                      <Link to={`/ev/breakdownAnswer/${index}`}>
                        <h3>No.{breakdownList.length - index}</h3>
                        <h2>
                          <div className="re">Re</div>
                          <span>답변이 완료되었습니다.</span>
                        </h2>
                        <span className="name">관리자</span>
                        <p>{changeFormat(list.uptDttm, 'yyyy-MM-DD') || ''}</p>
                      </Link>
                    </li>
                  )}
                </>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreakdownForm;
