import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';

const Join1SNSForm = () => {
  // 링크 연결
  const navigate = useNavigate();

  // 체크박스 선택값
  const [checkItems, setCheckItems] = useState([]);

  // 선택값
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      for (let i = 1; i < 7; i++) {
        idArray.push('agree-li0' + i);
      }
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const aggreBtn = (e) => {
    e.preventDefault();

    if (checkItems.includes('agree-li01') === false) {
      alert('[필수]서비스 이용약관을 선택 하세요');
      return;
    }
    if (checkItems.includes('agree-li02') === false) {
      alert('[필수]필수 항목에 대한 개인정보 수집 및 이용 동의을 선택 하세요');
      return;
    }
    if (checkItems.includes('agree-li03') === false) {
      alert('[필수]위치기반서비스 이용약관 동의을 선택 하세요');
      return;
    }
    if (checkItems.includes('agree-li04') === false) {
      alert('[필수]선택 항목에 대한 개인정보 수집 및 이용 동의을 선택 하세요');
      return;
    }
    if (checkItems.includes('agree-li05') === false) {
      alert('[필수]선택 항목에 대한 개인정보 수집 및 이용 동의을 선택 하세요');
      return;
    }
    if (checkItems.includes('agree-li06') === false) {
      alert('[필수]마케팅 정보 수신 동의을 선택 하세요');
      return;
    }

    navigate('/ev/join2Sns');
  };

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
              <label htmlFor="allagree">
                <input
                  type="checkbox"
                  id="allagree"
                  onChange={(e) => handleAllCheck(e.target.checked)}
                  checked={checkItems.length === 6 ? true : false}
                />
                <span className="chkimg"></span>전체 약관동의 (선택 포함)
              </label>
            </div>
            <ul className="agree-list">
              <li className={classnames('agree', { active: active1 })}>
                <div className="ttl">
                  <label htmlFor="agree-li01">
                    <input
                      type="checkbox"
                      id="agree-li01"
                      onChange={(e) => handleSingleCheck(e.target.checked, 'agree-li01')}
                      checked={checkItems.includes('agree-li01') ? true : false}
                    />
                    <span className="chkimg"></span>
                    <b>[필수]</b> 서비스 이용약관
                  </label>
                  <div className="arrow" onClick={() => setActive1(!active1)}></div>
                </div>
                <div className="cont" style={active1 ? { display: 'block' } : { display: 'none' }}>
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
              <li className={classnames('agree', { active: active2 })}>
                <div className="ttl">
                  <label htmlFor="agree-li02">
                    <input
                      type="checkbox"
                      id="agree-li02"
                      onChange={(e) => handleSingleCheck(e.target.checked, 'agree-li02')}
                      checked={checkItems.includes('agree-li02') ? true : false}
                    />
                    <span className="chkimg"></span>
                    <b>[필수]</b>필수 항목에 대한 개인정보 수집 및 이용 동의
                  </label>
                  <div className="arrow" onClick={() => setActive2(!active2)}></div>
                </div>
                <div className="cont" style={active2 ? { display: 'block' } : { display: 'none' }}></div>
              </li>
              <li className={classnames('agree', { active: active3 })}>
                <div className="ttl">
                  <label htmlFor="agree-li03">
                    <input
                      type="checkbox"
                      id="agree-li03"
                      onChange={(e) => handleSingleCheck(e.target.checked, 'agree-li03')}
                      checked={checkItems.includes('agree-li03') ? true : false}
                    />
                    <span className="chkimg"></span>
                    <b>[필수]</b>위치기반서비스 이용약관 동의
                  </label>
                  <div className="arrow" onClick={() => setActive3(!active3)}></div>
                </div>
                <div className="cont" style={active3 ? { display: 'block' } : { display: 'none' }}></div>
              </li>
              <li className={classnames('agree', { active: active4 })}>
                <div className="ttl">
                  <label htmlFor="agree-li04">
                    <input
                      type="checkbox"
                      id="agree-li04"
                      onChange={(e) => handleSingleCheck(e.target.checked, 'agree-li04')}
                      checked={checkItems.includes('agree-li04') ? true : false}
                    />
                    <span className="chkimg"></span>
                    <b>[필수]</b>선택 항목에 대한 개인정보 수집 및 이용 동의
                  </label>
                  <div className="arrow" onClick={() => setActive4(!active4)}></div>
                </div>
                <div className="cont" style={active4 ? { display: 'block' } : { display: 'none' }}></div>
              </li>
              <li className={classnames('agree', { active: active5 })}>
                <div className="ttl">
                  <label htmlFor="agree-li05">
                    <input
                      type="checkbox"
                      id="agree-li05"
                      onChange={(e) => handleSingleCheck(e.target.checked, 'agree-li05')}
                      checked={checkItems.includes('agree-li05') ? true : false}
                    />
                    <span className="chkimg"></span>
                    <b>[필수]</b>선택 항목에 대한 개인정보 수집 및 이용 동의
                  </label>
                  <div className="arrow" onClick={() => setActive5(!active5)}></div>
                </div>
                <div className="cont" style={active5 ? { display: 'block' } : { display: 'none' }}></div>
              </li>
              <li className={classnames('agree', { active: active6 })}>
                <div className="ttl">
                  <label htmlFor="agree-li06">
                    <input
                      type="checkbox"
                      id="agree-li06"
                      onChange={(e) => handleSingleCheck(e.target.checked, 'agree-li06')}
                      checked={checkItems.includes('agree-li06') ? true : false}
                    />
                    <span className="chkimg"></span>
                    <b>[필수]</b>마케팅 정보 수신 동의
                  </label>
                  <div className="arrow" onClick={() => setActive6(!active6)}></div>
                </div>
                <div className="cont" style={active6 ? { display: 'block' } : { display: 'none' }}></div>
              </li>
            </ul>
            <button className="orange-btn" onClick={aggreBtn}>
              약관동의
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Join1SNSForm;
