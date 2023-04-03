import React from 'react';

const FindForm = () => {
  return (
    <>
      <section className="ev-find-sect">
        <article className="txt-wp active">
          <div className="ttl-wp">
            <h1>
              ELVIS 충전소 찾기<div className="mo-close"></div>
            </h1>
            <div className="search-wp">
              <input type="text" />
              <button className="sbtn">
                <img src="/img/common/ico-search.svg" alt="" />
              </button>
            </div>
          </div>
          <ul className="tab-link">
            <li className="active">충전소명(8)</li>
            <li>지역명(50)</li>
          </ul>
          <ul className="tab-cont">
            <li className="active">
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="orange">
                <div className="cir"></div>충전가능(완속2)
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="blue">
                <div className="cir"></div>충전대기
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="gray">
                <div className="cir"></div>점검중
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="orange">
                <div className="cir"></div>충전가능(완속2)
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="blue">
                <div className="cir"></div>충전대기
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="orange">
                <div className="cir"></div>충전가능(완속2)
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="orange">
                <div className="cir"></div>충전가능(완속2)
              </h3>
            </li>
            <li>
              <h2>송파레미니스아파트 102동</h2>
              <p>서울특별시 송파구 성내천로 6 (오금동, 송파레미니스) </p>
              <h3 className="gray">
                <div className="cir"></div>점검중
              </h3>
            </li>
          </ul>
        </article>

        <article className="map-wp">
          <img src="/img/ev/evf_map.png" alt="" />
          <div className="cir-wp">
            <div className="num orange" style={{ width: '40px', height: '40px' }}>
              4
            </div>
            <div className="num orange big" style={{ width: '70px', height: '70px' }}>
              10
            </div>
            <div className="num gray" style={{ width: '30px', height: '30px' }}>
              1
            </div>
            <div className="num blue" style={{ width: '50px', height: '50px' }}>
              5
            </div>
          </div>
          <ul className="cir-type">
            <li>
              <div className="cir orange"></div>충전가능
            </li>
            <li>
              <div className="cir blue"></div>충전대기
            </li>
            <li>
              <div className="cir gray"></div>점검중
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default FindForm;
