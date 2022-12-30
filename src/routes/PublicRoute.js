// import { Navigate } from 'react-router';
import { useLocation, useNavigate } from 'react-router-dom';

import { CheckToken } from '../auth/CheckTokenl';

export default function PublicRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = CheckToken(location.key);

  if (isAuth === 'Success') {
    // return <Navigate to="/admin/main/popup" state={{ from: location }} />;
    return navigate('/admin/main/popup');
  }

  return children;
}
