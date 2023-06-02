import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAccessEvToken, setEvUserNo, setRefreshEvToken } from '../../../../storage/EvCookie';

function NaverRedirect() {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  // 컴포넌트가 마운트되면 로그인 로직 실행
  useEffect(() => {
    async function Login() {
      let data = {
        url: `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&client_secret=${process.env.REACT_APP_NAVER_SECRET}&code=${code}`,
      };

      const res = await axios({
        url: `${process.env.REACT_APP_API_URL}/api/ev/auth/token/naver`,
        method: 'POST',
        data: data,
      });

      const ACCESS_TOKEN = JSON.stringify(res.data.data.access_token).replace(/"/g, '');
      // const REFRESH_TOKEN = JSON.stringify(res.data.data.refresh_token);

      if (ACCESS_TOKEN !== undefined) {
        localStorage.setItem('snsType', 'naver');
        localStorage.setItem('snsToken', ACCESS_TOKEN);
        // setCookie('refreshToken', REFRESH_TOKEN);

        const user = await axios({
          url: `${process.env.REACT_APP_API_URL}/api/phone/phoneInfo/${ACCESS_TOKEN}/1`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Accept: 'application/json',
          },
        });

        if (user.data.data !== undefined) {
          let data = {
            login_type: 'naver',
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
    }

    if (localStorage.getItem('snsType') === 'naver') {
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
  }, []);

  return;
}

export default NaverRedirect;
