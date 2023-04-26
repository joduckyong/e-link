import React, { useState } from 'react';
import Post from '../../../../api/Post';

const Join2Form = () => {
  const [enroll_company, setEnroll_company] = useState({
    zonecode: '',
    address: '',
  });

  const [user, setUser] = useState({
    userNm: '',
    eml: '',
    pswd: '',
    telno: '',
    gender: '',
    brth: '',
    addr: '',
    daddr: '',
    telCom: '',
    ci: '',
    roleId: '',
  });

  const [email, setEmail] = useState('');
  const [emailCheck, setEmailCheck] = useState('');
  const [emailCheck2, setEmailCheck2] = useState(true);

  const [ckpw, setCkpw] = useState(false);
  const [ckpw1, setCkpw1] = useState(false);
  const [ckpw2, setCkpw2] = useState(false);
  const [ckpw3, setCkpw3] = useState(false);

  const [ckpw_1, setCkpw_1] = useState(false);
  const [ckpw1_1, setCkpw1_1] = useState(false);
  const [ckpw2_1, setCkpw2_1] = useState(false);
  const [ckpw3_1, setCkpw3_1] = useState(false);

  const [passwd, setPasswd] = useState('');
  const [rePasswd, setRePasswd] = useState('');
  const [userNm, setUserNm] = useState('');
  const [addressDetail, setAddressDetail] = useState('');

  const [telno, setTelno] = useState('');
  const [telcom, setTelcom] = useState('');
  const [gender, setGender] = useState('');
  const [brth, setBrth] = useState('');
  const [ci, setCi] = useState('');

  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };

  // 우편번호
  const handleComplete = (data) => {
    data.preventDefault();
    setPopup(!popup);
  };

  // 휴대폰인증
  const phonePopup = () => {
    window.open(process.env.REACT_APP_API_URL + '/api/phone/popup2', 'width=100,height=100,location=no,status=no,scrollbars=yes', '_blank');
  };

  //비밀번호 유효성 검사
  const checkPassword = (e) => {
    //  8 ~ 15자 영문, 숫자, 특수문자 조합
    var regExp1 = /^(?=.*[a-zA-Z])$/;
    var regExp2 = /^(?=.*[0-9])$/;
    var regExp3 = /^(?=.*[!@#$%^*+=-])$/;
    var regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

    setCkpw1(regExp1.test(e.target.value));
    setCkpw2(regExp2.test(e.target.value));
    setCkpw3(regExp3.test(e.target.value));
    setCkpw(regExp.test(e.target.value));
    // 형식에 맞는 경우 true 리턴
    console.log('비밀번호 유효성 검사 :: ', regExp.test(e.target.value));
  };

  //비밀번호 유효성 검사
  const checkPassword2 = (e) => {
    //  8 ~ 15자 영문, 숫자, 특수문자 조합
    var regExp1 = /^(?=.*[a-zA-Z])$/;
    var regExp2 = /^(?=.*[0-9])$/;
    var regExp3 = /^(?=.*[!@#$%^*+=-])$/;
    var regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    // 형식에 맞는 경우 true 리턴
    setCkpw1_1(regExp1.test(e.target.value));
    setCkpw2_1(regExp2.test(e.target.value));
    setCkpw3_1(regExp3.test(e.target.value));
    setCkpw_1(regExp.test(e.target.value));
    console.log('비밀번호 유효성 검사 :: ', regExp.test(e.target.value));
  };

  // 이메일 유효성 검사
  const checkEmail = (e) => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴
    setEmailCheck2(regExp.test(e.target.value));
    console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value));
  };

  // 아이디 중복검사
  const emailDuplicated = (e) => {
    e.preventDefault();

    if (email === '') {
      setEmailCheck('');
      return;
    }
    const data = {
      url: '/auth/isEmailDuplicated',
      eml: email,
    };

    fetch(process.env.REACT_APP_API_URL + '/api/ev/auth/isEmailDuplicated', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const result = JSON.stringify(res.data).replace(/"/g, '');
        setEmailCheck(result);
      });
  };

  // 회원가입
  const signupUser = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      userNm: userNm,
      eml: email,
      pswd: passwd,
      telno: telno,
      gender: gender,
      brth: brth,
      addr: enroll_company.address,
      daddr: addressDetail,
      telcom: telcom,
      ci: ci,
      roleId: 'elinkuser',
    });
  };

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
              <input type="text" placeholder="아이디를 입력해주세요. " onChange={(e) => setEmail(e.target.value)} onBlur={checkEmail} />
              <button className="border-btn" onClick={emailDuplicated}>
                중복확인
              </button>
              {emailCheck === 'Y' ? (
                <p className="red">사용할 수 없는 아이디입니다. </p>
              ) : emailCheck === 'N' && emailCheck2 ? (
                <p className="blue">사용가능한 아이디입니다.</p>
              ) : emailCheck === 'N' && !emailCheck2 ? (
                <p className="red">이메일 유효 하지 않습니다.</p>
              ) : (
                ''
              )}
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>비밀번호
            </h3>
            <div className="input-wp">
              <input type="text" placeholder="비밀번호를 입력해주세요. " onChange={(e) => setPasswd(e.target.value)} onBlur={checkPassword} />
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
              <input
                type="text"
                placeholder="비밀번호를 다시 한 번 입력해주세요. "
                onChange={(e) => setRePasswd(e.target.value)}
                onBlur={checkPassword2}
              />
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
              <input type="text" placeholder="이름을 입력해주세요." onChange={(e) => setUserNm(e.target.value)} />
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>휴대폰 번호
            </h3>
            <div className="input-wp input-btn-wp">
              <input type="text" placeholder="휴대폰 번호를 입력해주세요." />
              <button className="border-btn" onClick={phonePopup}>
                인증코드 전송
              </button>
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
              <input type="text" placeholder="우편번호" name="zonecode" value={enroll_company.zonecode} />
              <button className="border-btn" onClick={handleComplete}>
                우편번호 검색
              </button>
              {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
              <input type="text" placeholder="주소" name="address" onChange={handleInput} value={enroll_company.address} />
              <input type="text" placeholder="상세주소" />
              <p className="red">상세주소를 입력해주세요.</p>
            </div>
            {/* <h3 className="mini-ttl">
              <span className="orange">*</span>회원카드 발급
            </h3>
            <div className="radio-wp">
              <label htmlFor="card01">
                <input type="radio" id="card01" name="card" checked />
                <span className="radioimg"></span>신규 카드 발급
              </label>
              <label htmlFor="card02">
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
            </div> */}
            <button className="orange-btn" onClick={signupUser}>
              가입하기
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Join2Form;
