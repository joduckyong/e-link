import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAccessEvToken, setEvUserNo, setRefreshEvToken } from '../../../../storage/EvCookie';

function KakaoRedirect() {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  // 컴포넌트가 마운트되면 로그인 로직 실행
  useEffect(() => {
    async function Login() {
      const data = {
        url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&client_secret=${process.env.REACT_APP_KAKAO_SECRET}&code=${code}`,
      };

      const res = await axios({
        url: `${process.env.REACT_APP_API_URL}/api/ev/auth/token/kakao`,
        method: 'POST',
        data: data,
      });

      const ACCESS_TOKEN = JSON.stringify(res.data.data.access_token).replace(/"/g, '');

      if (ACCESS_TOKEN !== undefined) {
        // const REFRESH_TOKEN = JSON.stringify(res.data.data.refresh_token);
        localStorage.setItem('snsType', 'kakao');
        localStorage.setItem('snsToken', ACCESS_TOKEN);
        // setCookie('refreshToken', REFRESH_TOKEN);

        let data = {
          id: ACCESS_TOKEN,
          snsType: '2',
        };

        const user = await axios({
          url: `${process.env.REACT_APP_API_URL}/api/phone/phoneInfo/id/snsType`,
          method: 'POST',
          data: data,
        });

        if (user.data.data !== undefined) {
          // 추가 인증 필요

          let data = {
            login_type: 'kakao',
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

      let data = {
        id: ACCESS_TOKEN,
        snsType: '2',
      };

      const user = await axios({
        url: `${process.env.REACT_APP_API_URL}/api/phone/phoneInfo/id/snsType`,
        method: 'POST',
        data: data,
      });

      localStorage.setItem('snsType', 'kakao');
      localStorage.setItem('snsToken', ACCESS_TOKEN);

      if (user.data.data !== undefined) {
        let data = {
          login_type: 'kakao',
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

    if (localStorage.getItem('snsType') !== undefined && localStorage.getItem('snsType') === 'kakao') {
      snsLogin();
    } else {
      Login();
    }
  }, []);

  return;
}

export default KakaoRedirect;
