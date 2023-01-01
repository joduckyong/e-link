import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { getCookieToken, removeCookieToken } from '../../storage/Cookie';
import { DELETE_TOKEN } from '../../store/Auth';
// import { logoutUser } from '../../api/Users';

function Logout() {
  // store에 저장된 Access Token 정보를 받아 온다
  // const { accessToken } = useSelector((state) => state.authToken);

  // console.log('accessToken == ' + accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Cookie에 저장된 Refresh Token 정보를 받아 온다
  const refreshToken = getCookieToken();

  console.log('refreshToken == ' + refreshToken);

  async function logout() {
    // 백으로부터 받은 응답
    // const data = await logoutUser({ refreshToken: refreshToken }, accessToken);

    // if (data.status) {
    // store에 저장된 Access Token 정보를 삭제
    dispatch(DELETE_TOKEN());
    // Cookie에 저장된 Refresh Token 정보를 삭제
    removeCookieToken();
    return navigate('/admin/login');
    // }
  }

  // 해당 컴포넌트가 요청된 후 한 번만 실행되면 되기 때문에 useEffect 훅을 사용
  useEffect(() => {
    logout();
  }, []);

  return (
    <>
      <Link to="/admin/login" />
    </>
  );
}

export default Logout;
