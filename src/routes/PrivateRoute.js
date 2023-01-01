import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { CheckToken } from '../auth/CheckTokenl';

export default function PrivateRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = CheckToken(location.key);

  if (isAuth === 'Failed') {
    return navigate('/admin/login');
  }

  return <Outlet />;
}
