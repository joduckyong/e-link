import React from 'react';
import { Link } from 'react-router-dom';

const MyPage2Form = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <div className="costomer-wp mypage-wp elvis-wp">
          <h1>마이페이지</h1>
          <ul className="link-wp">
          <li>
              <Link to="/ev/mypage1">이용내역</Link>
            </li>
            <li className="active">
              <Link to="">ELVIS 캐시</Link>
            </li>
            <li>
              <Link to="/ev/mypage3">커뮤니티</Link>
            </li>
          </ul>
          <form className="list-wp">
            <div className="cash-wp">
              <h4>
                ELVIS 캐시<span>|</span>
              </h4>
              <h3>1,050캐시</h3>
            </div>
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
            <div className="select-wp">
              <select name="" id="">
                <option value="">전체</option>
              </select>
            </div>
            <div className="usage-list-wp">
              <ol className="list usage-list">
                <li className="ttl">
                  <p>번호</p>
                  <p>일시</p>
                  <p>금액</p>
                  <p>이용구분</p>
                  <p>적립수단</p>
                </li>
                <li>
                  <p>10</p>
                  <p>2023.03.07 00:18:00</p>
                  <p className="orange">+ 1,000</p>
                  <p>충전</p>
                  <p>국민(0523)</p>
                </li>
                <li>
                  <p>9</p>
                  <p>2023.03.07 00:18:00</p>
                  <p className="gray">- 1,000</p>
                  <p>사용</p>
                  <p>국민(0523)</p>
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
          </form>
        </div>
      </section>
    </>
  );
};

export default MyPage2Form;
