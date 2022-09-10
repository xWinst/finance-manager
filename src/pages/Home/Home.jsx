import { LoginForm } from 'components';
import s from '../index.module.css';

const Home = () => {
    return (
        <section className={s.hero}>
            <div className={s.title}>
                Kapu<span className={s.sign}>s</span>ta
            </div>
            <h1 className={s.slogan}>smart fifance</h1>
            <LoginForm />
        </section>
    );
};

export default Home;
