import axios from 'axios';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function GoogleRedirect() {
  let code = new URL(window.location.href).toString().replace('#', '&');
  let token = code.split('&');
  let access_token = token[1].split('=');
  const [cookies, setCookie] = useCookies();
  const navigate = useNavigate();

  setCookie('accessToken', access_token[1]);

  const ACCESS_TOKEN = access_token[1];
  if (ACCESS_TOKEN !== undefined) {
    setCookie('accessToken', ACCESS_TOKEN);

    async function Login() {
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
    Login();
  }
}

export default GoogleRedirect;
