import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setAccessToken = (accessToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 1);

  return cookies.set('accessToken', accessToken, {
    // sameSite: 'elink',
    path: '/',
    expires: new Date(expireDate),
    // secure: true,
    // httpOnly: true,
  });
};

export const getCookieToken = () => {
  const token = cookies.get('accessToken');
  return token;
};

export const removeCookieToken = () => {
  return cookies.remove('accessToken', { path: '/' });
};
