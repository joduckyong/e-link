import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAccessEvToken, setEvUserNo, setRefreshEvToken } from '../../../../storage/EvCookie';

function AppleRedirect() {
  const code = new URL(window.location.href).searchParams.get('code');
  console.log('code : ' + code);

  let code2 = new URL(window.location.href).toString();
  console.log('code : ' + code2);

  const navigate = useNavigate();

  // 컴포넌트가 마운트되면 로그인 로직 실행
  useEffect(() => {
    async function Login() {
      const data = {
        url: `https://appleid.apple.com/auth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_APPLE_CLIENT_ID}&client_secret=${process.env.REACT_APP_APPLE_KEY_ID}&code=${code}`,
      };

      const res = await axios({
        url: `${process.env.REACT_APP_API_URL}/api/ev/auth/token/apple`,
        method: 'POST',
        data: data,
      });

      console.log('res : ' + JSON.stringify(res));
      const ACCESS_TOKEN = JSON.stringify(res.data.data.access_token).replace(/"/g, '');

      console.log('res : ' + JSON.stringify(res));
      console.log('res : ' + JSON.stringify(res.data.data.access_token));

      if (ACCESS_TOKEN !== undefined) {
        // const REFRESH_TOKEN = JSON.stringify(res.data.data.refresh_token);
        localStorage.setItem('snsType', 'apple');
        localStorage.setItem('snsToken', ACCESS_TOKEN);
        // setCookie('refreshToken', REFRESH_TOKEN);

        const user = await axios({
          url: `${process.env.REACT_APP_API_URL}/api/phone/phoneInfo/${ACCESS_TOKEN}/4`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Accept: 'application/json',
          },
        });

        if (user.data.data !== undefined) {
          // 추가 인증 필요

          let data = {
            login_type: 'apple',
            password: ACCESS_TOKEN,
            grant_type: 'password',
            scope: 'mobileclient',
            url: '/auth/oauth/token',
          };

          const resData = await axios({
            url: `${process.env.REACT_APP_API_URL}/api/ev/auth`,
            method: 'POST',
            data: data,
          });

          setAccessEvToken(JSON.stringify(resData.json.data.access_token), JSON.stringify(resData.json.data.expires_in));
          setEvUserNo(JSON.stringify(resData.json.data.USER_NO));
          setRefreshEvToken(JSON.stringify(resData.json.data.refresh_token));

          navigate('/ev/mypage1', { replace: true });
        } else {
          //회원가입
          navigate('/ev/join1Sns', { replace: true });
        }
      }
    }

    async function snsLogin() {
      const ACCESS_TOKEN = localStorage.getItem('snsToken');

      const user = await axios({
        url: `${process.env.REACT_APP_API_URL}/api/phone/phoneInfo/${ACCESS_TOKEN}/4`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
        },
      });

      localStorage.setItem('snsType', 'apple');
      localStorage.setItem('snsToken', ACCESS_TOKEN);

      if (user.data.data !== undefined) {
        let data = {
          login_type: 'apple',
          password: ACCESS_TOKEN,
          grant_type: 'password',
          scope: 'mobileclient',
          url: '/auth/oauth/token',
        };

        const resData = await axios({
          url: `${process.env.REACT_APP_API_URL}/api/ev/auth`,
          method: 'POST',
          data: data,
        });

        const access_token = await JSON.stringify(resData.data.data.access_token).replace(/"/g, '');
        const expires_in = await JSON.stringify(resData.data.data.expires_in).replace(/"/g, '');
        const USER_NO = await JSON.stringify(resData.data.data.USER_NO).replace(/"/g, '');
        const refresh_token = await JSON.stringify(resData.data.data.refresh_token).replace(/"/g, '');

        setAccessEvToken(access_token, expires_in);
        setEvUserNo(USER_NO);
        setRefreshEvToken(refresh_token);

        navigate('/ev/mypage1', { replace: true });
      } else {
        //회원가입
        navigate('/ev/join1Sns', { replace: true });
      }
    }

    if (localStorage.getItem('snsType') !== undefined && localStorage.getItem('snsType') === 'apple') {
      snsLogin();
    } else {
      Login();
    }
  }, []);

  return;
}

export default AppleRedirect;
