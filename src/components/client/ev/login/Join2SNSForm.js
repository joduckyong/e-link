import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Post from '../../../../api/Post';

const Join2SNSForm = () => {
  const [enroll_company, setEnroll_company] = useState({
    zonecode: '',
    address: '',
  });

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailCheck, setEmailCheck] = useState('');
  const [emailCheck2, setEmailCheck2] = useState(true);

  const [userNm, setUserNm] = useState('');
  const [userNmCk, setUserNmCk] = useState(false);
  const [addressCk, setAddressCk] = useState(false);
  const [addressDetail, setAddressDetail] = useState('');
  const [addressDetailCk, setAddressDetailCk] = useState(false);

  const [telno, setTelno] = useState('');
  const [telnoCk, setTelnoCk] = useState(false);
  const [telnoCk2, setTelnoCk2] = useState(false);
  const [snsType, setSnsType] = useState('0');
  const [snsToken, setSnsToken] = useState('');

  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('snsType') === 'naver') {
      setSnsToken(localStorage.getItem('snsToken').replace(/"/g, ''));
      setSnsType('1');
    } else if (localStorage.getItem('snsType') === 'kakao') {
      setSnsToken(localStorage.getItem('snsToken').replace(/"/g, ''));
      setSnsType('2');
    } else if (localStorage.getItem('snsType') === 'google') {
      setSnsToken(localStorage.getItem('snsToken').replace(/"/g, ''));
      setSnsType('3');
    } else if (localStorage.getItem('snsType') === 'apple') {
      setSnsToken(localStorage.getItem('snsToken').replace(/"/g, ''));
      setSnsType('4');
    }
  }, []);

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

    window.open(
      process.env.REACT_APP_API_URL + `/api/phone/popup2?type=I&snsType=${snsType}`,
      'width=0,height=0,location=no,status=no,scrollbars=yes',
      '_blank',
    );
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

    const data = {
      telno: telno,
      snsToken: snsToken,
      snsType: snsType,
    };

    const res = await axios({
      url: `${process.env.REACT_APP_API_URL}/api/phone/phoneInfo/telno/snsToken/snsType`,
      method: 'POST',
      data: data,
    });

    console.log('data : ' + JSON.stringify(res.data.data));

    if (res.data.data !== undefined) {
      const dataBrth = await JSON.stringify(res.data.data.brth).replace(/"/g, '');
      const dataCi = await JSON.stringify(res.data.data.ci).replace(/"/g, '');
      const dataGender = await JSON.stringify(res.data.data.gender).replace(/"/g, '');
      const dataTelcom = await JSON.stringify(res.data.data.telcom).replace(/"/g, '');
      const dataTelNo = await JSON.stringify(res.data.data.telno).replace(/"/g, '');

      console.log('dataBrth : ' + dataBrth);
      console.log('dataCi : ' + dataCi);
      console.log('dataGender : ' + dataGender);
      console.log('dataTelcom : ' + dataTelcom);
      console.log('dataTelNo : ' + dataTelNo);

      if (dataCi !== '') {
        await signupUser(dataBrth, dataCi, dataGender, dataTelcom, dataTelNo);
      }
    } else {
      await setTelnoCk2(true);
    }
  };

  const signupUser = async (dataBrth, dataCi, dataGender, dataTelcom, dataTelNo) => {
    // e.preventDefault();

    const data = {
      url: '/auth/signupUser',
      userNm: userNm,
      eml: email,
      telno: dataTelNo,
      gender: dataGender,
      brth: dataBrth,
      addr: enroll_company.address,
      daddr: addressDetail,
      telcom: dataTelcom,
      ci: dataCi,
      roleId: 'elinkuser',
      google: localStorage.getItem('snsType') === 'google' && snsToken,
      naver: localStorage.getItem('snsType') === 'naver' && snsToken,
      kakao: localStorage.getItem('snsType') === 'kakao' && snsToken,
      apple: localStorage.getItem('snsType') === 'apple' && snsToken,
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
    console.log('data.status : ' + JSON.stringify(res.data.data.status));

    let dataStatus = JSON.stringify(res.data.data.status);
    if (dataStatus !== 500) {
      const result = JSON.stringify(res.data.data.principal);
      console.log('result : ' + result);

      if (result !== undefined) {
        navigate('/ev/join3', { replace: true });
      } else {
        await axios({
          url: `${process.env.REACT_APP_API_URL}/api/phone/phoneDel/${telno}/${snsType}`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Accept: 'application/json',
          },
        });

        navigate('/ev/joinError', { replace: true });
      }
    } else {
      await axios({
        url: `${process.env.REACT_APP_API_URL}/api/phone/phoneDel/${telno}/${snsType}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
        },
      });

      navigate('/ev/joinError', { replace: true });
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

export default Join2SNSForm;
