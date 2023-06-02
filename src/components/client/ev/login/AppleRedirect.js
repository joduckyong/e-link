import axios from 'axios';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function AppleRedirect() {
  const code = new URL(window.location.href).searchParams.get('code');
  const [cookies, setCookie] = useCookies();
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

      const ACCESS_TOKEN = JSON.stringify(res.data.data.access_token).replace(/"/g, '');
      const REFRESH_TOKEN = JSON.stringify(res.data.data.refresh_token).replace(/"/g, '');

      console.log('res : ' + JSON.stringify(res));
      console.log('res : ' + JSON.stringify(res.data.data.access_token));
      console.log('res : ' + JSON.stringify(res.data.data.refresh_token));

      setCookie('accessToken', ACCESS_TOKEN);
      setCookie('refreshToken', REFRESH_TOKEN);
    }
    Login();
    navigate('/ev/mypage1', { replace: true });
  }, []);

  return;
}

export default AppleRedirect;
