import axios from 'axios';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function NaverRedirect() {
  const code = new URL(window.location.href).searchParams.get('code');
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();

  // 컴포넌트가 마운트되면 로그인 로직 실행
  useEffect(() => {
    async function Login() {
      const data = {
        url: `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&client_secret=${process.env.REACT_APP_NAVER_SECRET}&code=${code}`,
      };

      const res = await axios({
        url: `${process.env.REACT_APP_API_URL}/api/ev/auth/token/naver`,
        method: 'POST',
        data: data,
      });

      const ACCESS_TOKEN = JSON.stringify(res.data.data.access_token);
      // const REFRESH_TOKEN = JSON.stringify(res.data.data.refresh_token);

      if (ACCESS_TOKEN !== undefined) {
        setCookie('accessToken', ACCESS_TOKEN);
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

export default NaverRedirect;
