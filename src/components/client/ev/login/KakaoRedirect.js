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

      const ACCESS_TOKEN = JSON.stringify(res.data.data.access_token);

      if (ACCESS_TOKEN !== undefined) {
        // const REFRESH_TOKEN = JSON.stringify(res.data.data.refresh_token);
        localStorage.setItem('snsType', 'kakao');
        localStorage.setItem('snsToken', ACCESS_TOKEN);
        // setCookie('refreshToken', REFRESH_TOKEN);

        const user = await axios({
          url: `${process.env.REACT_APP_API_URL}/api/phone/phoneInfo/${ACCESS_TOKEN}`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Accept: 'application/json',
          },
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
          navigate('/ev/join1', { replace: true });
        }
      }
    }
    Login();
  }, []);

  return;
}

export default KakaoRedirect;
