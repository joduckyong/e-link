import { useNavigate } from 'react-router-dom';
import { removeCookieEvToken } from '../../../../storage/EvCookie';

const LogoutForm = () => {
  const navigate = useNavigate();
  const evLogout = async () => {
    await removeCookieEvToken();
    return navigate('/ev/index');
  };

  evLogout();
};

export default LogoutForm;
