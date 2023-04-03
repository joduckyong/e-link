import React from 'react';

const Join2Form = () => {
  return (
    <>
      <section className="ev-sub-sect">
        <form className="join-wp">
          <h1>ELVIS 회원가입</h1>
          <ol className="order-wp">
            <li>약관동의</li>
            <li className="active">정보입력</li>
            <li>가입완료</li>
          </ol>
          <div className="gray-mini-box">ELVIS 서비스는 만 14세 이상 이용가능합니다.</div>
          <div className="detail-wp">
            <h3 className="mini-ttl">
              <span className="orange">*</span>아이디
            </h3>
            <div className="input-wp input-btn-wp">
              <input type="text" placeholder="아이디를 입력해주세요. " />
              <button className="border-btn">중복확인</button>
              {/* <!-- <p className="red">사용할 수 없는 아이디입니다. </p> --> */}
              <p className="blue">사용가능한 아이디입니다.</p>
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>비밀번호
            </h3>
            <div className="input-wp">
              <input type="text" placeholder="비밀번호를 입력해주세요. " />
              <ul className="confirm-wp">
                <li>
                  <img src="/img/ev/ev_check_orange.png" alt="" />
                  영문
                </li>
                <li>
                  <img src="/img/ev/ev_check_orange.png" alt="" />
                  숫자
                </li>
                <li>
                  <img src="/img/ev/ev_check_orange.png" alt="" />
                  특수문자
                </li>
                <li>
                  <img src="/img/ev/ev_check_orange.png" alt="" />
                  8~15자리
                </li>
              </ul>
              <p className="red">사용할 수 없는 비밀번호입니다. </p>
              {/* <!-- <p className="blue">사용가능한 비밀번호입니다. </p> --> */}
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>비밀번호 확인
            </h3>
            <div className="input-wp">
              <input type="text" placeholder="비밀번호를 다시 한 번 입력해주세요. " />
              <ul className="confirm-wp">
                <li>
                  <img src="/img/ev/ev_check_orange.png" alt="" />
                  영문
                </li>
                <li>
                  <img src="/img/ev/ev_check_no.png" alt="" />
                  숫자
                </li>
                <li>
                  <img src="/img/ev/ev_check_no.png" alt="" />
                  특수문자
                </li>
                <li>
                  <img src="/img/ev/ev_check_no.png" alt="" />
                  8~15자리
                </li>
              </ul>
              <p className="red">비밀번호가 일치하지 않습니다. </p>
              {/* <!-- <p className="blue">비밀번호가 일치합니다. </p> --> */}
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>이름
            </h3>
            <div className="input-wp">
              <input type="text" placeholder="이름을 입력해주세요." />
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>휴대폰 번호
            </h3>
            <div className="input-wp input-btn-wp">
              <input type="text" placeholder="휴대폰 번호를 입력해주세요. (입력 시 - 자동 생성)" />
              <button className="border-btn">인증코드 전송</button>
              <p className="blue">인증번호가 발송되었습니다.</p>
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>인증번호
            </h3>
            <div className="input-wp input-btn-wp">
              <input type="text" placeholder="" />
              <button className="border-btn">확인</button>
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>주소
            </h3>
            <div className="input-wp input-btn-wp">
              <input type="text" placeholder="우편번호" />
              <button className="border-btn">우편번호 검색</button>
              <input type="text" placeholder="주소" />
              <input type="text" placeholder="상세주소" />
              <p className="red">상세주소를 입력해주세요.</p>
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>회원카드 발급
            </h3>
            <div className="radio-wp">
              <label for="card01">
                <input type="radio" id="card01" name="card" checked />
                <span className="radioimg"></span>신규 카드 발급
              </label>
              <label for="card02">
                <input type="radio" id="card02" name="card" />
                <span className="radioimg"></span>카드 발급 필요 없음
              </label>
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>간편결제
            </h3>
            <div className="input-wp input-btn-wp">
              <input type="text" placeholder="충전요금 결제시 사용됩니다." />
              <button className="border-btn">등록 및 변경</button>
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>제조사
            </h3>
            <div className="input-wp">
              <select name="" id="">
                <option value="">제조사를 선택해주세요.</option>
              </select>
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>보유 차종
            </h3>
            <div className="input-wp">
              <select name="" id="">
                <option value="">제조사를 선택해주세요.</option>
              </select>
            </div>
            <h3 className="mini-ttl">차량 번호</h3>
            <div className="input-wp">
              <input type="text" placeholder="차량 번호를 입력해주세요." />
            </div>
            <button className="orange-btn">가입하기</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Join2Form;
