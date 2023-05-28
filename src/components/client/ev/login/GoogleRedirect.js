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
    localStorage.setItem('snsType', 'google');
    localStorage.setItem('snsToken', ACCESS_TOKEN);

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
        navigate('/ev/join1', { replace: true });
      }
    }
    Login();
  }
}

export default GoogleRedirect;
