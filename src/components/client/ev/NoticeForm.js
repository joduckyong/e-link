import React, { useEffect, useState } from 'react';
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

const NoticeForm = () => {
  const dispatch = useDispatch();
  const noticeList = useSelector((state) => state.EvReducer.data);

  useEffect(() => {
    const url = '/api/m-service-mobile/community/getNotis';
    const newList = { url: url };
    dispatch(selectEv(newList));
  }, [dispatch]);

  return (
    <>
      <section className="ev-sub-sect">
        <div className="costomer-wp">
          <h1>고객센터</h1>
          <ul className="link-wp">
            <li className="active">
              <Link to="/ev/notice">공지사항</Link>
            </li>
            <li>
              <Link to="/ev/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/ev/inquiry">문의하기</Link>
            </li>
            <li>
              <Link to="">고장신고</Link>
            </li>
          </ul>
          <div className="list-wp">
            <div className="list-top">
              <b>Total {noticeList.length}</b>
            </div>
            <ol className="list notice-list">
              {noticeList.map((list, index) => (
                <li key={index}>
                  <Link to={`/ev/noticeInfo/${index}`}>
                    <p>
                      <b>No.{noticeList.length - index}</b>{changeFormat(list.dttm, 'yyyy-MM-DD') || ''}
                    </p>
                    <h2>{list.ttl}</h2>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoticeForm;
