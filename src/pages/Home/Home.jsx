import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { LoginForm } from 'components';
import s from '../index.module.css';

const Home = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return isLoggedIn ? (
        <Navigate to="/expenses" />
    ) : (
        <section className={s.hero}>
            <div className={s.title}>
                Kapu<span className={s.sign}>s</span>ta{' '}
                {/* <span className={s.signn}>$</span> */}
            </div>
            <h1 className={s.slogan}>smart fifance</h1>
            <LoginForm />
        </section>
    );
};

export default Home;
