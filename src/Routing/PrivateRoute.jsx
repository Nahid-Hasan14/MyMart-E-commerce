
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token")

  if (!token) {
    return <Navigate to="/signin-page" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;





// const token = localStorage.getItem("token")
//   return token ? children : <Navigate to={"/signin-page"}/>
