import { GoogleOAuthProvider } from '@moeindana/google-oauth';
import { LoginForm, RestrictedRoute } from 'components';
import s from '../index.module.css';

const Home = () => {
    return (
        <RestrictedRoute>
            <section className={s.hero}>
                <div className={s.thumb}>
                    <div className={s.title}>
                        Kapu<span className={s.sign}>s</span>ta{' '}
                    </div>
                    <h1 className={s.slogan}>smart fifance</h1>
                </div>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
                    <LoginForm />
                </GoogleOAuthProvider>
            </section>
        </RestrictedRoute>
    );
};

export default Home;
