import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Post from '../../../../api/Post';

const Join2Form = () => {
  const [enroll_company, setEnroll_company] = useState({
    zonecode: '',
    address: '',
  });

  const navigate = useNavigate();

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

  const [passwdCk, setPasswdCk] = useState('');

  const [userNm, setUserNm] = useState('');
  const [userNmCk, setUserNmCk] = useState(false);
  const [addressCk, setAddressCk] = useState(false);
  const [addressDetail, setAddressDetail] = useState('');
  const [addressDetailCk, setAddressDetailCk] = useState(false);

  const [telno, setTelno] = useState('');
  const [telnoCk, setTelnoCk] = useState(false);
  const [telnoCk2, setTelnoCk2] = useState(false);
  const [telcom, setTelcom] = useState('');
  const [gender, setGender] = useState('');
  const [brth, setBrth] = useState('');
  const [ci, setCi] = useState('');

  const [popup, setPopup] = useState(false);

  const handleInput = (e) => {
    setAddressCk(false);
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
  const phonePopup = (e) => {
    e.preventDefault();

    if (telno.length === 11) {
      setTelnoCk(false);
    } else {
      setTelnoCk(true);
      return;
    }

    window.open(process.env.REACT_APP_API_URL + '/api/phone/popup2', 'width=0,height=0,location=no,status=no,scrollbars=yes', '_blank');
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
    console.log('비밀번호 유효성 검사1 :: ', ckpw1);
    console.log('비밀번호 유효성 검사2 :: ', ckpw2);
    console.log('비밀번호 유효성 검사3 :: ', ckpw3);
    console.log('비밀번호 유효성 검사4 :: ', ckpw);
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

    if (passwd === rePasswd) {
      setPasswdCk(true);
    } else {
      setPasswdCk(false);
    }
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
      setEmailCheck('X');
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

  // 이름 등록
  const userChange = (e) => {
    setUserNm(e.target.value);
    if (userNm === '') {
      setUserNmCk(true);
    } else {
      setUserNmCk(false);
    }
  };

  // 핸드폰 등록
  const phoneChange = (e) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    setTelno(onlyNumber);
  };

  const addressDetailChange = (e) => {
    setAddressDetail(e.target.value);
    if (userNm === '') {
      setAddressDetailCk(true);
    } else {
      setAddressDetailCk(false);
    }
  };
  // 회원가입
  const signupUserInfo = (e) => {
    e.preventDefault();

    if (email === '') {
      setEmailCheck('X');
      return;
    }
    if (userNm === '') {
      setUserNmCk(true);
      return;
    }
    if (telno.length === 11) {
      setTelnoCk(false);
    } else {
      setTelnoCk(true);
      return;
    }
    if (enroll_company.address === '') {
      setAddressCk(true);
      return;
    } else {
      setAddressCk(false);
    }
    if (addressDetail === '') {
      setAddressDetailCk(true);
      return;
    } else {
      setAddressDetailCk(false);
    }
    fetch(process.env.REACT_APP_API_URL + '/api/phone/phoneInfo/' + telno, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log('res.data : ' + res.data);

        if (res.data !== undefined) {
          const dataBrth = JSON.stringify(res.data.brth).replace(/"/g, '');
          const dataCi = JSON.stringify(res.data.ci).replace(/"/g, '');
          const dataGender = JSON.stringify(res.data.gender).replace(/"/g, '');
          const dataTelcom = JSON.stringify(res.data.telcom).replace(/"/g, '');
          const dataTelNo = JSON.stringify(res.data.telno).replace(/"/g, '');

          setBrth(dataBrth);
          setCi(dataCi);
          setGender(dataGender);
          setTelcom(dataTelcom);
          setTelno(dataTelNo);
          signupUser(e);
        } else {
          setTelnoCk2(true);
        }
      });
  };

  const signupUser = (e) => {
    // e.preventDefault();
    const data = {
      url: '/auth/signupUser',
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
    };

    fetch(process.env.REACT_APP_API_URL + '/api/ev/auth/signupUser', {
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
        // const result = JSON.stringify(res.data).replace(/"/g, '');
        navigate('/ev/login', { replace: true });
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
              <span className="orange">*</span>이메일
            </h3>
            <div className="input-wp input-btn-wp">
              <input type="text" placeholder="이메일을 입력해주세요. " onChange={(e) => setEmail(e.target.value)} onBlur={checkEmail} />
              <button className="border-btn" onClick={emailDuplicated}>
                중복확인
              </button>
              {emailCheck === 'Y' ? (
                <p className="red">사용할 수 없는 이메일입니다. </p>
              ) : emailCheck === 'N' && emailCheck2 ? (
                <p className="blue">사용가능한 이메일입니다.</p>
              ) : emailCheck === 'N' && !emailCheck2 ? (
                <p className="red">이메일 유효 하지 않습니다.</p>
              ) : emailCheck === 'X' ? (
                <p className="red">이메일 입력하세요.</p>
              ) : (
                ''
              )}
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>비밀번호
            </h3>
            <div className="input-wp">
              <input
                type="text"
                placeholder="비밀번호를 입력해주세요. "
                onChange={(e) => setPasswd(e.target.value)}
                value={passwd}
                onBlur={checkPassword}
                maxlength={15}
              />
              <ul className="confirm-wp">
                <li>
                  {!ckpw1 ? <img src="/img/ev/ev_check_no.png" alt="" /> : ckpw1 ? <img src="/img/ev/ev_check_orange.png" alt="" /> : ''}
                  영문
                </li>
                <li>
                  {!ckpw2 ? <img src="/img/ev/ev_check_no.png" alt="" /> : ckpw2 ? <img src="/img/ev/ev_check_orange.png" alt="" /> : ''}
                  숫자
                </li>
                <li>
                  {!ckpw3 ? <img src="/img/ev/ev_check_no.png" alt="" /> : ckpw3 ? <img src="/img/ev/ev_check_orange.png" alt="" /> : ''}
                  특수문자
                </li>
                <li>
                  {!ckpw ? <img src="/img/ev/ev_check_no.png" alt="" /> : ckpw ? <img src="/img/ev/ev_check_orange.png" alt="" /> : ''}
                  8~15자리
                </li>
              </ul>
              {!ckpw ? <p className="red">사용할 수 없는 비밀번호입니다. </p> : ckpw ? <p className="blue">사용가능한 비밀번호입니다. </p> : ''}
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>비밀번호 확인
            </h3>
            <div className="input-wp">
              <input
                type="text"
                placeholder="비밀번호를 다시 한 번 입력해주세요. "
                onChange={(e) => setRePasswd(e.target.value)}
                value={rePasswd}
                onBlur={checkPassword2}
                maxlength={15}
              />
              <ul className="confirm-wp">
                <li>
                  {!ckpw1_1 ? <img src="/img/ev/ev_check_no.png" alt="" /> : ckpw1_1 ? <img src="/img/ev/ev_check_orange.png" alt="" /> : ''}
                  영문
                </li>
                <li>
                  {!ckpw2_1 ? <img src="/img/ev/ev_check_no.png" alt="" /> : ckpw2_1 ? <img src="/img/ev/ev_check_orange.png" alt="" /> : ''}
                  숫자
                </li>
                <li>
                  {!ckpw3_1 ? <img src="/img/ev/ev_check_no.png" alt="" /> : ckpw3_1 ? <img src="/img/ev/ev_check_orange.png" alt="" /> : ''}
                  특수문자
                </li>
                <li>
                  {!ckpw_1 ? <img src="/img/ev/ev_check_no.png" alt="" /> : ckpw_1 ? <img src="/img/ev/ev_check_orange.png" alt="" /> : ''}
                  8~15자리
                </li>
              </ul>
              {!passwdCk ? <p className="red">비밀번호가 일치하지 않습니다. </p> : passwdCk ? <p className="blue">비밀번호가 일치합니다. </p> : ''}
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>이름
            </h3>
            <div className="input-wp">
              <input type="text" name="userNm" placeholder="이름을 입력해주세요." value={userNm} onChange={userChange} />
              {userNmCk && <p className="red">이름을 입력해주세요.</p>}
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>휴대폰
            </h3>
            <div className="input-wp input-btn-wp input-btn-wp">
              <input
                type="text"
                name="telno"
                placeholder="휴대폰 등록 후 휴대폰 인증 버튼을 눌러주세요. "
                value={telno}
                onChange={phoneChange}
                maxlength={11}
              />
              <button className="border-btn" onClick={phonePopup}>
                휴대폰 인증
              </button>
              {telnoCk ? <p className="red">휴대폰 번호를 입력해주세요.</p> : telnoCk2 ? <p className="red">휴대폰 인증을 해주세요.</p> : ''}
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
              {addressCk && <p className="red">주소를 입력해주세요.</p>}
              <input type="text" placeholder="상세주소" onChange={addressDetailChange} value={addressDetail} />
              {addressDetailCk && <p className="red">상세주소를 입력해주세요.</p>}
            </div>
            <button className="orange-btn" onClick={signupUserInfo}>
              가입하기
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Join2Form;
