import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { encrypt } from '../../../../api/crypto';
import axios from 'axios';
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

  const [ckpw1, setCkpw1] = useState(false);
  const [ckpw2, setCkpw2] = useState(false);
  const [ckpw3, setCkpw3] = useState(false);
  const [ckpw4, setCkpw4] = useState(false);

  const [ckpw1_1, setCkpw1_1] = useState(false);
  const [ckpw2_1, setCkpw2_1] = useState(false);
  const [ckpw3_1, setCkpw3_1] = useState(false);
  const [ckpw4_1, setCkpw4_1] = useState(false);

  const [passwd, setPasswd] = useState('');
  const [rePasswd, setRePasswd] = useState('');

  const [userNm, setUserNm] = useState('');
  const [userNmCk, setUserNmCk] = useState(false);
  const [addressCk, setAddressCk] = useState(false);
  const [addressDetail, setAddressDetail] = useState('');
  const [addressDetailCk, setAddressDetailCk] = useState(false);

  const [telno, setTelno] = useState('');
  const [telnoCk, setTelnoCk] = useState(false);
  const [telnoCk2, setTelnoCk2] = useState(false);
  // const [telcom, setTelcom] = useState('');
  // const [gender, setGender] = useState('');
  // const [brth, setBrth] = useState('');
  // const [ci, setCi] = useState('');

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
  const phonePopup = (e) => {
    e.preventDefault();

    if (telno.length === 11) {
      setTelnoCk(false);
    } else {
      setTelnoCk(true);
      return;
    }

    window.open(process.env.REACT_APP_API_URL + '/api/phone/popup2?type=I', 'width=0,height=0,location=no,status=no,scrollbars=yes', '_blank');
  };

  //비밀번호 유효성 검사
  const checkPassword = (e) => {
    // setPasswd(e.target.value);

    var eng = passwd.search(/[a-z]/gi);
    var num = passwd.search(/[0-9]/g);
    var spe = passwd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    // console.log('eng : ' + eng);
    // console.log('num : ' + num);
    // console.log('spe : ' + spe);
    // console.log('passwd.length : ' + passwd.length);

    if (eng === -1) {
      setCkpw1(false);
    } else {
      setCkpw1(true);
    }
    if (num === -1) {
      setCkpw2(false);
    } else {
      setCkpw2(true);
    }
    if (spe === -1) {
      setCkpw3(false);
    } else {
      setCkpw3(true);
    }
    if (passwd.length >= 8 && passwd.length <= 15) {
      setCkpw4(true);
    } else {
      setCkpw4(false);
    }
  };

  //비밀번호 유효성 검사
  const checkPassword2 = (e) => {
    // setRePasswd(e.target.value);

    var eng = rePasswd.search(/[a-z]/gi);
    var num = rePasswd.search(/[0-9]/g);
    var spe = rePasswd.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    // console.log('eng2 : ' + eng);
    // console.log('num2 : ' + num);
    // console.log('spe2 : ' + spe);
    // console.log('rePasswd.length : ' + rePasswd.length);

    if (eng === -1) {
      setCkpw1_1(false);
    } else {
      setCkpw1_1(true);
    }
    if (num === -1) {
      setCkpw2_1(false);
    } else {
      setCkpw2_1(true);
    }
    if (spe === -1) {
      setCkpw3_1(false);
    } else {
      setCkpw3_1(true);
    }
    if (rePasswd.length >= 8 && rePasswd.length <= 15) {
      setCkpw4_1(true);
    } else {
      setCkpw4_1(false);
    }
  };

  // 이메일 유효성 검사
  const checkEmail = (e) => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 형식에 맞는 경우 true 리턴

    if (email === '') {
      setEmailCheck('X');
      return;
    } else {
      setEmailCheck('');
    }
    setEmailCheck2(regExp.test(e.target.value));
    console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value));
  };

  // 아이디 중복검사
  const emailDuplicated = async (e) => {
    e.preventDefault();

    if (email === '') {
      setEmailCheck('X');
      return;
    } else {
      setEmailCheck('');
    }
    const data = {
      url: '/auth/isEmailDuplicated',
      eml: email,
    };

    const res = await axios({
      url: `${process.env.REACT_APP_API_URL}/api/ev/auth/isEmailDuplicated`,
      method: 'POST',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
    });

    const result = JSON.stringify(res.data.data).replace(/"/g, '');
    console.log('result : ' + result);
    setEmailCheck(result);
  };

  // 이름 등록
  const userChange = (e) => {
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
    if (addressDetail === '') {
      setAddressDetailCk(true);
    } else {
      setAddressDetailCk(false);
    }
  };
  // 회원가입
  const signupUserInfo = async (e) => {
    e.preventDefault();

    console.log('email : ' + email);
    console.log('emailCheck : ' + emailCheck);
    console.log('emailCheck2 : ' + emailCheck2);

    if (email === '') {
      setEmailCheck('X');
      return;
    }
    if (emailCheck !== 'N') {
      setEmailCheck('O');
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

    const res = await axios({
      url: `${process.env.REACT_APP_API_URL}/api/phone/phoneInfo/${telno}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
    });

    console.log('data : ' + res.data.data);

    if (res.data.data !== undefined) {
      const dataBrth = await JSON.stringify(res.data.data.brth).replace(/"/g, '');
      const dataCi = await JSON.stringify(res.data.data.ci).replace(/"/g, '');
      const dataGender = await JSON.stringify(res.data.data.gender).replace(/"/g, '');
      const dataTelcom = await JSON.stringify(res.data.data.telcom).replace(/"/g, '');
      const dataTelNo = await JSON.stringify(res.data.data.telno).replace(/"/g, '');

      // setBrth(dataBrth);
      // setCi(dataCi);
      // setGender(dataGender);
      // setTelcom(dataTelcom);
      // setTelno(dataTelNo);
      if (dataCi !== '') {
        signupUser(dataBrth, dataCi, dataGender, dataTelcom, dataTelNo);
      }
    } else {
      setTelnoCk2(true);
    }
  };

  const signupUser = async (dataBrth, dataCi, dataGender, dataTelcom, dataTelNo) => {
    // e.preventDefault();

    const data = {
      url: '/auth/signupUser',
      userNm: userNm,
      eml: email,
      pswd: passwd,
      telno: dataTelNo,
      gender: dataGender,
      brth: dataBrth,
      addr: enroll_company.address,
      daddr: addressDetail,
      telcom: dataTelcom,
      ci: dataCi,
      roleId: 'elinkuser',
    };

    const res = await axios({
      url: `${process.env.REACT_APP_API_URL}/api/ev/auth/signupUser`,
      method: 'POST',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
    });

    console.log('data : ' + JSON.stringify(res.data));

    if (res.data !== '' && JSON.stringify(res.data.data.status) === 200) {
      const result = JSON.stringify(res.data.data.principal);
      console.log('result : ' + result);

      if (result !== '') {
        navigate('/ev/join3', { replace: true });
      }
    } else {
      await axios({
        url: `${process.env.REACT_APP_API_URL}/api/phone/phoneDel/${telno}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
        },
      });
    }
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
              <input type="text" placeholder="이메일을 입력해주세요. " onChange={(e) => setEmail(e.target.value)} onKeyUp={checkEmail} />
              <button className="border-btn" onClick={emailDuplicated}>
                중복확인
              </button>
              {emailCheck === 'Y' ? (
                <p className="red">사용할 수 없는 이메일입니다. </p>
              ) : emailCheck === 'N' && emailCheck2 ? (
                <p className="blue">사용가능한 이메일입니다.</p>
              ) : emailCheck === 'N' && !emailCheck2 ? (
                <p className="red">이메일 유효 하지 않습니다.</p>
              ) : emailCheck === 'O' ? (
                <p className="red">중복확인을 해주세요.</p>
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
                type="password"
                placeholder="비밀번호를 입력해주세요. "
                onChange={(e) => setPasswd(e.target.value)}
                onKeyUp={checkPassword}
                value={passwd}
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
                  {!ckpw4 ? <img src="/img/ev/ev_check_no.png" alt="" /> : ckpw4 ? <img src="/img/ev/ev_check_orange.png" alt="" /> : ''}
                  8~15자리
                </li>
              </ul>
              {ckpw1 && ckpw2 && ckpw3 && ckpw4 ? (
                <p className="blue">사용가능한 비밀번호입니다. </p>
              ) : !ckpw1 && !ckpw2 && !ckpw3 && !ckpw4 ? (
                ''
              ) : (
                <p className="red">사용할 수 없는 비밀번호입니다. </p>
              )}
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>비밀번호 확인
            </h3>
            <div className="input-wp">
              <input
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해주세요. "
                onChange={(e) => setRePasswd(e.target.value)}
                onKeyUp={checkPassword2}
                value={rePasswd}
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
                  {!ckpw4_1 ? <img src="/img/ev/ev_check_no.png" alt="" /> : ckpw4_1 ? <img src="/img/ev/ev_check_orange.png" alt="" /> : ''}
                  8~15자리
                </li>
              </ul>
              {passwd === rePasswd && passwd !== '' && rePasswd !== '' ? (
                <p className="blue">비밀번호가 일치합니다. </p>
              ) : passwd !== rePasswd && passwd !== '' && rePasswd !== '' ? (
                <p className="red">비밀번호가 일치하지 않습니다. </p>
              ) : (
                ''
              )}
            </div>
            <h3 className="mini-ttl">
              <span className="orange">*</span>이름
            </h3>
            <div className="input-wp">
              <input
                type="text"
                name="userNm"
                placeholder="이름을 입력해주세요."
                value={userNm}
                onChange={(e) => setUserNm(e.target.value)}
                onKeyUp={userChange}
              />
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
              <input type="text" placeholder="주소" name="address" onChange={handleInput} value={enroll_company.address} readOnly />
              {addressCk && <p className="red">주소를 입력해주세요.</p>}
              <input
                type="text"
                placeholder="상세주소"
                onChange={(e) => setAddressDetail(e.target.value)}
                onKeyUp={addressDetailChange}
                value={addressDetail}
              />
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
