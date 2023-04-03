import React from 'react';

const Join1Form = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <form className="join-wp">
          <h1>ELVIS 회원가입</h1>
          <ol className="order-wp">
            <li className="active">약관동의</li>
            <li>정보입력</li>
            <li>가입완료</li>
          </ol>
          <div className="gray-mini-box">ELVIS 서비스는 만 14세 이상 이용가능합니다.</div>
          <div className="agree-wp">
            <div className="agree all-agree">
              <label for="allagree">
                <input type="checkbox" id="allagree" />
                <span className="chkimg"></span>전체 약관동의 (선택 포함)
              </label>
            </div>
            <ul className="agree-list">
              <li className="agree">
                <div className="ttl">
                  <label for="agree-li01">
                    <input type="checkbox" id="agree-li01" />
                    <span className="chkimg"></span>
                    <b>[필수]</b> 서비스 이용약관
                  </label>
                  <div className="arrow"></div>
                </div>
                <div className="cont">
                  <b>제 1 조 (목적)</b>
                  본 약관은 엘에스이링크 주식회사(이하 ‘회사’)가 제공하는 “엘에스이링크(주) ELVIS 전기차 충전 서비스”를 이용함에 있어 서비스 이용자와
                  회사간의 권리, 의무 및 책임사항, 서비스 이용에 따른 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다.
                  <br />
                  <b>제 2 조 (약관의 효력 및 변경)</b>
                  ① 본 약관은 ELVIS 전기차 충전 서비스를 이용하고자 하는 모든 회원에 대하여 그 효력이 발생합니다. <br />
                  <br />
                  ② 본 약관의 내용은 엘에스이링크(주) 홈페이지 (https://www.lselink.com, 이하 ‘홈페이지’) 또는 ELVIS App을 통해 회원에게 공지되고,
                  이에 동의한 회원이 ELVIS 전기차 충전 서비스에 가입함으로써 효력이 발생합니다. <br />
                  <br />
                  ③ 회사는 필요하다고 인정되는 경우 본 약관을 변경할 수 있으며, 회사가 약관을 변경할 경우에는 적용일자 및 변경사유를 명시하여 제2항과
                  같은 방법으로 그 적용일자 30일 전 공지합니다. 다만, 회원에게 불리한 약관의 변경인 경우에는 그 적용일자 30일 전 공지하며, E-mail, SMS
                  등으로 회원에게 개별 통지합니다. 단, 회원의 연락처 미기재, 변경 후 미수정 등으로 인하여 개별 통지가 어려운 경우에 한하여 홈페이지에
                  게시하는 것으로 갈음할 수 있습니다. <br />
                  <br />④ 회원은 개정된 약관 사항에 동의하지 않을 권리가 있으며, 개정된 약관에 대해 동의하지 않을 경우, 회사는 본 서비스의 이용을
                  중단하고 이용계약을 해지할 수 있습니다. 단, 회사가 전항 단서에 따라 개정 약관을 공지 또는 통지하면서 회원에게 최소 30일 이상의 사전
                  유예 기간 내에 부동의 의사표시를 하지 않으면 개정된 약관에 동의한다는 의사표시가 표명된 것으로 간주한다는 뜻을 명확하게 공지 또는
                  고지하였음에도 회원이 회사에 명시적으로 거부 의사를 표시하지 않거나 이용계약을 해지하지 않은 경우 개정된 약관에 동의한 것으로
                  간주합니다.
                </div>
              </li>
              <li className="agree">
                <div className="ttl">
                  <label for="agree-li02">
                    <input type="checkbox" id="agree-li02" />
                    <span className="chkimg"></span>
                    <b>[필수]</b>필수 항목에 대한 개인정보 수집 및 이용 동의
                  </label>
                  <div className="arrow"></div>
                </div>
                <div className="cont"></div>
              </li>
              <li className="agree">
                <div className="ttl">
                  <label for="agree-li03">
                    <input type="checkbox" id="agree-li03" />
                    <span className="chkimg"></span>
                    <b>[필수]</b>위치기반서비스 이용약관 동의
                  </label>
                  <div className="arrow"></div>
                </div>
                <div className="cont"></div>
              </li>
              <li className="agree">
                <div className="ttl">
                  <label for="agree-li04">
                    <input type="checkbox" id="agree-li04" />
                    <span className="chkimg"></span>
                    <b>[필수]</b>선택 항목에 대한 개인정보 수집 및 이용 동의
                  </label>
                  <div className="arrow"></div>
                </div>
                <div className="cont"></div>
              </li>
              <li className="agree">
                <div className="ttl">
                  <label for="agree-li05">
                    <input type="checkbox" id="agree-li05" />
                    <span className="chkimg"></span>
                    <b>[필수]</b>선택 항목에 대한 개인정보 수집 및 이용 동의
                  </label>
                  <div className="arrow"></div>
                </div>
                <div className="cont"></div>
              </li>
              <li className="agree">
                <div className="ttl">
                  <label for="agree-li06">
                    <input type="checkbox" id="agree-li06" />
                    <span className="chkimg"></span>
                    <b>[필수]</b>마케팅 정보 수신 동의
                  </label>
                  <div className="arrow"></div>
                </div>
                <div className="cont"></div>
              </li>
            </ul>
            <button className="orange-btn">약관동의</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Join1Form;
