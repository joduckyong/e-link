import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setRefreshEvToken = (refreshToken, expireDate) => {
  // const today = new Date();
  // const expireDate = today.setDate(today.getDate() + 1);

  return cookies.set('refreshEvToken', refreshToken, {
    // sameSite: 'elink',
    path: '/',
    expires: new Date(expireDate),
  });
};

export const getCookieEvToken = () => {
  const token = cookies.get('refreshEvToken');
  return token;
};

export const removeCookieEvToken = () => {
  return cookies.remove('refreshEvToken', { path: '/' });
};
