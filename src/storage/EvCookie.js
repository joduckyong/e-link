import { Cookies } from 'react-cookie';
import axios from 'axios';

const cookies = new Cookies();

// access token
export const setAccessEvToken = (accessEvToken, expireDate) => {
  const date = new Date();
  date.setSeconds(expireDate);

  return cookies.set('accessEvToken', accessEvToken, {
    path: '/',
    // secure: true,
    // httpOnly: true,
    expires: date,
  });
};

export const getCookieEvToken = () => {
  let token = cookies.get('accessEvToken');

  // console.log('token : ' + token);
  if (token === undefined) {
    async function refreshToken() {
      const data = {
        url: '/auth/oauth/token',
        scope: 'mobileclient',
        grant_type: 'refresh_token',
        refresh_token: getCookieRefreshEvToken(),
      };
      const res = await axios({
        url: `${process.env.REACT_APP_API_URL}/api/ev/auth`,
        method: 'POST',
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json',
        },
      });

      setAccessEvToken(res.data.data.access_token, res.data.data.expires_in);
      // setEvUserNo(res.data.data.USER_NO, res.data.data.expires_in);
      setRefreshEvToken(res.data.data.refresh_token);
      token = res.data.data.access_token;
    }
    refreshToken();
  }
  return token;
};

export const removeCookieEvToken = () => {
  return cookies.remove('accessEvToken', { path: '/' });
};

// EvUserNo
export const setEvUserNo = (evUserNo) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);

  return cookies.set('evUserNo', evUserNo, {
    path: '/',
    // secure: true,
    // httpOnly: true,
    expires: date,
  });
};

export const getCookieEvUserNo = () => {
  const token = cookies.get('evUserNo');
  return token;
};

export const removeCookieEvUserNo = () => {
  return cookies.remove('evUserNo', { path: '/' });
};

// refresh token
export const setRefreshEvToken = (refreshToken) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);

  return cookies.set('refreshEvToken', refreshToken, {
    path: '/',
    // secure: true,
    // httpOnly: true,
    expires: date,
  });
};

export const getCookieRefreshEvToken = () => {
  const token = cookies.get('refreshEvToken');
  return token;
};

export const removeRefreshCookieEvToken = () => {
  return cookies.remove('refreshEvToken', { path: '/' });
};
