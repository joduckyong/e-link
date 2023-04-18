import axios from 'axios';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function KakaoRedirect() {
  const code = new URL(window.location.href).searchParams.get('code');
  const [cookies, setCookie] = useCookies();
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
      const REFRESH_TOKEN = JSON.stringify(res.data.data.refresh_token);

      // console.log('res : ' + JSON.stringify(res));
      // console.log('res : ' + JSON.stringify(res.data.data.access_token));
      // console.log('res : ' + JSON.stringify(res.data.data.refresh_token));

      setCookie('accessToken', ACCESS_TOKEN);
      setCookie('refreshToken', REFRESH_TOKEN);
    }
    Login();
    navigate('/ev/mypage1', { replace: true });
  }, []);

  return;
}

export default KakaoRedirect;
