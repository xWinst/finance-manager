import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
//import s from '../index.module.css';

const Expenses = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return isLoggedIn ? <div> Expenses</div> : <Navigate to="/" />;
};

export default Expenses;
