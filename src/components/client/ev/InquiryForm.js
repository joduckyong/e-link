import React from 'react';

const InquiryForm = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <div className="costomer-wp">
          <h1>고객센터</h1>
          <ul className="link-wp">
            <li>
              <a href="./notice.html">공지사항</a>
            </li>
            <li>
              <a href="./faq.html">FAQ</a>
            </li>
            <li className="active">
              <a href="./inquiry.html">문의하기</a>
            </li>
            <li>
              <a href="">고장신고</a>
            </li>
          </ul>
          <div className="list-wp">
            <div className="list-top">
              <b>Total 14</b> / 3 page
            </div>
            <ol className="list inquiry-list">
              <li>
                <a href="./inquiry_view.html">
                  <h3>No.14</h3>
                  <h2>
                    <img src="/img/ev/ev_lock.png" alt="" />
                    <span>문의드립니다.</span>
                  </h2>
                  <span className="name">이*재</span>
                  <p>2022-11-30</p>
                </a>
              </li>
              <li>
                <a href="./inquiry_view.html">
                  <h3>No.13</h3>
                  <h2>
                    <div className="re">Re</div>
                    <span>답변이 완료되었습니다.</span>
                  </h2>
                  <span className="name">관리자</span>
                  <p>2022-11-30</p>
                </a>
              </li>
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

export default InquiryForm;
