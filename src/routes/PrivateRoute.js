import { Outlet, Navigate } from 'react-router';
import { useLocation, useNavigate } from 'react-router-dom';

import { CheckToken } from '../auth/CheckTokenl';

export default function PrivateRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = CheckToken(location.key);

  if (isAuth === 'Failed') {
    // return <Navigate to="/admin/login" state={{ from: location }} />;
    return navigate('/admin/login');
  }

  return <Outlet />;
}
