import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectEv } from 'store/EvReducer';

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
              <a href="./notice.html">공지사항</a>
            </li>
            <li>
              <a href="./faq.html">FAQ</a>
            </li>
            <li>
              <a href="./inquiry.html">문의하기</a>
            </li>
            <li>
              <a href="">고장신고</a>
            </li>
          </ul>
          <div className="list-wp">
            <div className="list-top">
              <b>Total {noticeList.length}</b>
            </div>
            <ol className="list notice-list">
            {noticeList.map((list, index) => (
              <li key={index}>
                <a href="./notice_view.html">
                  <p>
                    <b>No.14</b>{list.dttm}
                  </p>
                  <h2>{list.ttl}</h2>
                </a>
              </li>
            ))}
              {/* <li>
                <a href="./notice_view.html">
                  <p>
                    <b>No.14</b>2022-11-30
                  </p>
                  <h2>요금 변경 안내 (2023. 1. 5. 부)</h2>
                </a>
              </li>
              <li>
                <a href="./notice_view.html">
                  <p>
                    <b>No.14</b>2022-11-30
                  </p>
                  <h2>요금 변경 안내 (2023. 1. 5. 부)</h2>
                </a>
              </li>
              <li>
                <a href="./notice_view.html">
                  <p>
                    <b>No.14</b>2022-11-30
                  </p>
                  <h2>요금 변경 안내 (2023. 1. 5. 부)</h2>
                </a>
              </li>
              <li>
                <a href="./notice_view.html">
                  <p>
                    <b>No.14</b>2022-11-30
                  </p>
                  <h2>요금 변경 안내 (2023. 1. 5. 부)</h2>
                </a>
              </li>
              <li>
                <a href="./notice_view.html">
                  <p>
                    <b>No.14</b>2022-11-30
                  </p>
                  <h2>요금 변경 안내 (2023. 1. 5. 부)</h2>
                </a>
              </li> */}
            </ol>
            <ol className="page-wp">
              <li className="prev">
                <a href="">
                  <img src="/img/ev/ev_page_arrow.png" alt="이전" />
                </a>
              </li>
              <li className="active">
                <a href="">1</a>
              </li>
              <li>
                <a href="">2</a>
              </li>
              <li>
                <a href="">3</a>
              </li>
              <li className="next">
                <a href="">
                  <img src="/img/ev/ev_page_arrow.png" alt="다음" />
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoticeForm;
