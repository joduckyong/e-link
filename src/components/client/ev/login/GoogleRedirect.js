import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setAccessEvToken, setEvUserNo, setRefreshEvToken } from '../../../../storage/EvCookie';

function GoogleRedirect() {
  let code = new URL(window.location.href).toString().replace('#', '&');
  let token = code.split('&');
  let access_token = token[1].split('=');
  const navigate = useNavigate();

  const ACCESS_TOKEN = access_token[1];

  if (ACCESS_TOKEN !== undefined) {
    async function Login() {
      localStorage.setItem('snsType', 'google');
      localStorage.setItem('snsToken', ACCESS_TOKEN);

      const user = await axios({
        url: `${process.env.REACT_APP_API_URL}/api/phone/phoneInfo/${ACCESS_TOKEN}/3`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
        },
      });

      if (user.data.data !== undefined) {
        // 추가 인증 필요

        let data = {
          login_type: 'google',
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

    if (localStorage.getItem('snsType') === 'google') {
      async function snsLogin() {
        let data = {
          login_type: localStorage.getItem('snsType'),
          password: localStorage.getItem('snsToken'),
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
      }
      snsLogin();
    } else {
      Login();
    }
  }
}

export default GoogleRedirect;
