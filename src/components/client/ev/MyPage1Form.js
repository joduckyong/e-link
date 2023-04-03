import React from 'react';

const MyPage1Form = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <div className="costomer-wp mypage-wp">
          <h1>마이페이지</h1>
          <ul className="link-wp">
            <li className="active">
              <a href="./mypage1.html">이용내역</a>
            </li>
            <li>
              <a href="./mypage2.html">ELVIS 캐시</a>
            </li>
            <li>
              <a href="">커뮤니티</a>
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
                <li className="ttl">
                  <p>번호</p>
                  <p>이용시간</p>
                  <p>이용한 충전소</p>
                  <p>결제금액</p>
                  <p>충전량(KWh)</p>
                </li>
                <li>
                  <p>10</p>
                  <p>2023.03.07 00:18:00</p>
                  <p>송파래미니스</p>
                  <p>50,000</p>
                  <p>42.3</p>
                </li>
                <li>
                  <p>9</p>
                  <p>2023.03.07 00:18:00</p>
                  <p>송파래미니스</p>
                  <p>50,000</p>
                  <p>42.3</p>
                </li>
                <li>
                  <p>8</p>
                  <p>2023.03.07 00:18:00</p>
                  <p>송파래미니스</p>
                  <p>50,000</p>
                  <p>42.3</p>
                </li>
              </ol>
            </div>
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

export default MyPage1Form;
