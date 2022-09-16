import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import icons from 'images/icons.svg';
import s from './Header.module.css';

const Header = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const user = useSelector(state => state.auth.userData?.email);
    const userName = user?.slice(0, user.indexOf('@'));
    const avatarLetter = userName?.slice(0, 1);
    const isMobile = window.innerWidth < 767;

    const dispatch = useDispatch();

    const exit = () => {
        dispatch(logOut());
    };

    return (
        <header className={s.container}>
            <div className={s.thumb}>
                <Link to="/">
                    <svg width="90" height="32">
                        <use href={`${icons}#logo`} />
                    </svg>
                </Link>
                {isLoggedIn && (
                    <div className={s.userThumb}>
                        <div className={s.avatar}>{avatarLetter}</div>
                        {isMobile ? (
                            <svg className={s.exit} width="16" height="16" onClick={exit}>
                                <use href={`${icons}#logout`} />
                            </svg>
                        ) : (
                            <div className={s.thumb}>
                                <span>{userName}</span>
                                <div className={s.line}></div>
                                <button className={s.button} type="button" onClick={exit}>
                                    Exit
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
