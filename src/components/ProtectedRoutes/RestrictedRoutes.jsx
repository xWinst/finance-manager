import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ children }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return isLoggedIn ? <Navigate to="/expenses" /> : children;
};

export default RestrictedRoute;
