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

  //  console.log('code ==' + access_token[1]);
  setCookie('accessToken', access_token[1]);

  navigate('/ev/mypage1', { replace: true });
}

export default GoogleRedirect;
