import { Cookies } from 'react-cookie';
// import axios from 'axios';

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

  if (token === undefined) {
    // const data = {
    //   url: '/auth/oauth/refreshToken',
    //   scope: 'webclient',
    //   refresh_token: getCookieRefreshEvToken(),
    // };
    // const res = axios({
    //   url: `${process.env.REACT_APP_API_URL}/auth/oauth/refreshToken`,
    //   method: 'POST',
    //   data: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json; charset=utf-8',
    //     Accept: 'application/json',
    //   },
    // });
    // setAccessEvToken(JSON.stringify(res.json.data.access_token), JSON.stringify(res.json.data.expires_in));
    // setEvUserNo(JSON.stringify(res.json.data.USER_NO), JSON.stringify(res.json.data.expires_in));
    // setRefreshEvToken(JSON.stringify(res.json.data.refresh_token));
    // token = res.data.access_token;
  }

  return token;
};

export const removeCookieEvToken = () => {
  return cookies.remove('accessEvToken', { path: '/' });
};

// EvUserNo
export const setEvUserNo = (evUserNo, expireDate) => {
  const date = new Date();
  date.setSeconds(expireDate);

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
