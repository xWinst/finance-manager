import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);

    return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
