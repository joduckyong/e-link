import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// access token
export const setAccessEvToken = (accessEvToken, expireDate) => {
  return cookies.set('accessEvToken', accessEvToken, {
    path: '/',
    expires: new Date(expireDate),
  });
};

export const getCookieEvToken = () => {
  const token = cookies.get('accessEvToken');
  return token;
};

export const removeCookieEvToken = () => {
  return cookies.remove('accessEvToken', { path: '/' });
};

// refresh token
export const setRefreshEvToken = (refreshToken, expireDate) => {
  return cookies.set('refreshEvToken', refreshToken, {
    path: '/',
    expires: new Date(expireDate),
  });
};

export const getCookieRefreshEvToken = () => {
  const token = cookies.get('refreshEvToken');
  return token;
};

export const removeRefreshCookieEvToken = () => {
  return cookies.remove('refreshEvToken', { path: '/' });
};
