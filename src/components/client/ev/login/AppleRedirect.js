import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAccessEvToken, setEvUserNo, setRefreshEvToken } from '../../../../storage/EvCookie';

function b64DecodeUnicode(str) {
  return decodeURIComponent(
    atob(str).replace(/(.)/g, function (m, p) {
      var code = p.charCodeAt(0).toString(16).toUpperCase();
      if (code.length < 2) {
        code = '0' + code;
      }
      return '%' + code;
    }),
  );
}

function base64_url_decode(str) {
  var output = str.replace(/-/g, '+').replace(/_/g, '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
    default:
      throw 'Illegal base64url string!';
  }

  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}

function AppleRedirect() {
  let code = new URL(window.location.href).toString().replace('#', '&');
  let token = code.split('&');
  let arrToken = token[2].split('=');
  let access_token = arrToken.toString().replace('id_token,', '');

  const navigate = useNavigate();
  let result = base64_url_decode(access_token.split('.')[1]);
  let jsonToken = JSON.parse(result);

  let ACCESS_TOKEN;
  for (var key in jsonToken) {
    if (key === 'sub') {
      ACCESS_TOKEN = jsonToken[key];
    }
  }

  useEffect(() => {
    if (ACCESS_TOKEN !== undefined) {
      async function Login() {
        let data = {
          id: ACCESS_TOKEN,
          snsType: '4',
        };

        const user = await axios({
          url: `${process.env.REACT_APP_API_URL}/api/phone/phoneInfo/id/snsType`,
          method: 'POST',
          data: data,
        });

        localStorage.setItem('snsType', 'apple');
        localStorage.setItem('snsToken', ACCESS_TOKEN);

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

          const access_token = await JSON.stringify(resData.data.data.access_token).replace(/"/g, '');
          const expires_in = await JSON.stringify(resData.data.data.expires_in).replace(/"/g, '');
          const USER_NO = await JSON.stringify(resData.data.data.user_name).replace(/"/g, '');
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

      async function snsLogin() {
        const ACCESS_TOKEN = localStorage.getItem('snsToken');

        let data = {
          id: ACCESS_TOKEN,
          snsType: '4',
        };

        const user = await axios({
          url: `${process.env.REACT_APP_API_URL}/api/phone/phoneInfo/id/snsType`,
          method: 'POST',
          data: data,
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
          const USER_NO = await JSON.stringify(resData.data.data.user_name).replace(/"/g, '');
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
    }
  }, []);

  return;
}

export default AppleRedirect;
