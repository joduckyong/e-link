import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setRefreshToken = (refreshToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 1);

  return cookies.set('refreshToken', refreshToken, {
    // sameSite: 'elink',
    path: '/',
    expires: new Date(expireDate),
    // secure: true,
    // httpOnly: true,
  });
};

export const getCookieToken = () => {
  const token = cookies.get('refreshToken');
  return token;
};

export const removeCookieToken = () => {
  return cookies.remove('refreshToken', { path: '/' });
};
