import { useDispatch } from 'react-redux';
import { useGoogleLogin } from '@moeindana/google-oauth';
import { useForm } from 'react-hook-form';
import { Button } from 'components';
import { logIn, registration } from 'redux/operations';
import icons from 'images/icons.svg';
import s from './LoginForm.module.css';

const LoginForm = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: 'onBlur' });
    const dispatch = useDispatch();

    const loginUser = user => {
        dispatch(logIn(user));
    };

    const registerUser = user => {
        dispatch(registration(user));
    };

    const loginWithGoogle = useGoogleLogin({
        onSuccess: tokenResponse => {
            const user = {
                email: tokenResponse.email,
                password: tokenResponse.id,
            };
            dispatch(registration(user));
        },
    });

    return (
        <form className={s.form}>
            <p className={s.text}>You can log in with your Google Account:</p>
            <Button icon={`${icons}#google`} text="Google" onClick={loginWithGoogle} />
            <p className={s.text2}>Or log in using an email and password, after registering:</p>
            <label className={s.label}>
                <span className={s.label__text}>Email</span>
                <input
                    className={s.input}
                    placeholder="your@email.com"
                    {...register('email', {
                        required: 'This is a required field',
                        pattern: {
                            value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                            message: 'Invalid email',
                        },
                    })}
                />
                <p className={s.error}>{errors?.email ? `* ${errors.email.message}` : <>&nbsp;</>}</p>
            </label>
            <label className={s.label}>
                <span className={s.label__text}>Password</span>
                <input
                    className={s.input}
                    type="password"
                    placeholder="Password"
                    {...register('password', {
                        required: 'This is a required field',
                        minLength: { value: 8, message: 'Password must contain 8 or more characters' },
                    })}
                />
                <p className={s.error}>{errors?.password ? `* ${errors.password.message}` : <>&nbsp;</>}</p>
            </label>
            <div className={s.thumb}>
                <Button text="Log in" onClick={handleSubmit(loginUser)} />
                <Button text="Registration" onClick={handleSubmit(registerUser)} />
            </div>
        </form>
    );
};

export default LoginForm;
