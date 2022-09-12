import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components';
import { logIn, register, googleAuth } from 'redux/operations';
import icons from 'images/icons.svg';
import s from './LoginForm.module.css';

const LoginForm = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const canLogin = useSelector(state => state.auth.canLogin);
    const dispatch = useDispatch();

    useEffect(() => {
        if (canLogin) dispatch(logIn(user));
    });

    const saveData = event => {
        const { name, value } = event.target;
        setUser(state => ({ ...state, [name]: value }));
    };
    const loginUser = event => {
        dispatch(logIn(user));
    };

    const registerUser = () => {
        dispatch(register(user));
    };

    const loginWithGoogle = () => {
        dispatch(googleAuth());
    };

    return (
        <form className={s.form}>
            <p className={s.text}>You can log in with your Google Account:</p>
            <div className={s.google}>
                <Button
                    icon={`${icons}#google`}
                    text="Google"
                    onClick={loginWithGoogle}
                />
            </div>
            <a href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&client_id=665888736356-aq6fvfmau6mupt4nfbms5tfch0u2698i.apps.googleusercontent.com&prompt=consent&redirect_uri=https://kapusta-backend.goit.global/auth/google-redirect&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile">
                google
            </a>
            <p>Or log in using an email and password, after registering:</p>
            <label className={s.label}>
                <span className={s.label__text}>Email</span>
                <input
                    className={s.input}
                    type="text"
                    value={user.email}
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
                    value={user.password}
                    onChange={saveData}
                    name="password"
                    placeholder="Password"
                    required
                />
            </label>
            <div className={s.thumb}>
                <Button text="Log in" onClick={loginUser} />
                <Button text="Registration" onClick={registerUser} />
            </div>
        </form>
    );
};

export default LoginForm;
