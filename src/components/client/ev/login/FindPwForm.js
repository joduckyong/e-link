import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { encrypt } from '../../../../api/crypto';

const FindIdForm = () => {
  const [telno, setTelno] = useState('');
  const [ci, setCi] = useState('');
  const [pswd, setPswd] = useState('');
  const [rePswd, setRepswd] = useState('');

  const [phoneCk, setPhoneCk] = useState(false);

  const [style, setStyle] = useState({ display: 'block' });
  const [style2, setStyle2] = useState({ display: 'none' });

  // 핸드폰 등록
  const phoneChange = (e) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, '');
    setTelno(onlyNumber);
  };

  // 휴대폰인증
  const phonePopup = (e) => {
    e.preventDefault();
    if (telno.length !== 11) {
      alert('휴대폰 번호를 입력해주세요.');
      return;
    }
    setPhoneCk(true);
    window.open(process.env.REACT_APP_API_URL + '/api/phone/popup2?type=V', 'width=0,height=0,location=no,status=no,scrollbars=yes', '_blank');
  };

  const signupUserInfo = async (e) => {
    e.preventDefault();

    if (telno.length !== 11) {
      alert('휴대폰 번호를 입력해주세요.');
      return;
    }

    if (!phoneCk) {
      alert('휴대폰 본인인증을 해주세요.');
      return;
    }

    const res = await axios({
      url: `${process.env.REACT_APP_API_URL}/api/phone/phoneInfo/${telno}/0`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
    });

    if (res.data !== undefined) {
      const dataCi = JSON.stringify(res.data.data.ci).replace(/"/g, '');
      setCi(dataCi);

      setStyle({ display: 'none' });
      setStyle2({ display: 'block' });
    } else {
      alert('휴대폰 본인인증을 해주세요.');
      return;
    }
  };

  const passChange = async (e) => {
    e.preventDefault();

    if (pswd !== rePswd) {
      alert('비밀 번호가 일치 하시 않습니다.');
      return;
    }

    const data = {
      url: '/auth/resetPassword',
      ci: ci,
      pswd: encrypt(pswd),
    };

    const res = await axios({
      url: `${process.env.REACT_APP_API_URL}/api/ev/auth/resetPassword`,
      method: 'POST',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
      },
    });

    if (res.data !== undefined) {
      const result = JSON.stringify(res.data.success);
      if (result !== undefined && result.replace(/"/g, '')) {
        alert('비밀번호가 변경 되었습니다.');
      }
    }
  };

  return (
    <>
      <section className="ev-sub-sect">
        <form className="findpw-wp" style={style}>
          <h1>비밀번호 찾기</h1>

          <div className="gray-box">
            <h3 className="mini-ttl">휴대폰</h3>
            <input type="text" placeholder="휴대폰번호를 입력해주세요." name="telno" value={telno} onChange={phoneChange} maxlength={11} />
            <button className="orange-btn" onClick={phonePopup}>
              휴대폰 본인인증
            </button>
            <button className="orange-btn" onClick={signupUserInfo}>
              비밀번호 변경
            </button>

            <div className="notice">
              <img src="/img/ev/ev_notice_ico.png" alt="!" />
              소셜 간편회원은 <br className="mo-br" />
              아이디/비밀번호 찾기가 제공되지 않습니다.
              <br />각 소셜 서비스를 통해 확인 부탁드립니다.
            </div>
          </div>
        </form>

        <form className="findid-wp" style={style2}>
          <h1>비밀번호 변경</h1>

          <div className="gray-box">
            <h3 className="mini-ttl">비밀번호</h3>
            <input type="password" placeholder="비밀번호를 입력해주세요." onChange={(e) => setPswd(e.target.value)} value={pswd} maxlength={15} />
            <h3 className="mini-ttl">비밀번호 확인</h3>
            <input
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해주세요. "
              onChange={(e) => setRepswd(e.target.value)}
              value={rePswd}
              maxlength={15}
            />
            <h3 className="mini-ttl"></h3>
            <button className="orange-btn" onClick={passChange}>
              비밀번호 변경
            </button>
            <h3 className="mini-ttl"></h3>
            <NavLink to="/ev/login" className="orange-btn">
              로그인
            </NavLink>
          </div>
        </form>
      </section>
    </>
  );
};

export default FindIdForm;
