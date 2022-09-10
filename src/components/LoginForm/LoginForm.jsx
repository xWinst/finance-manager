import { Button } from 'components';
import icons from 'images/icons.svg';
import s from './LoginForm.module.css';

const LoginForm = () => {
    const submitData = () => {};
    const saveData = () => {};

    return (
        <form className={s.form} onSubmit={submitData}>
            <p className={s.text}>You can log in with your Google Account:</p>
            <div className={s.google}>
                <Button
                    icon={`${icons}#google`}
                    text="Google"
                    onClick={() => {}}
                />
            </div>
            <p>Or log in using an email and password, after registering:</p>
            <label className={s.label}>
                <span className={s.label__text}>Email</span>
                <input
                    className={s.input}
                    type="text"
                    // value={user.email}
                    onChange={saveData}
                    name="email"
                    placeholder="your@email.com"
                    required
                />
            </label>
            <label className={s.label}>
                <span className={s.label__text}>Password</span>
                <input
                    className={s.input}
                    type="password"
                    // value={user.password}
                    onChange={saveData}
                    name="password"
                    placeholder="Password"
                    required
                />
            </label>
            <div className={s.thumb}>
                <Button text="Log in" onClick={() => {}} />
                <Button text="Registration" onClick={() => {}} />
            </div>
        </form>
    );
};

export default LoginForm;
