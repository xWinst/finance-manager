import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/userOperations';
import { Icon } from 'components';
import icons from 'images/icons.svg';
import s from './Header.module.css';

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const user = useSelector(state => state.user.userData?.email);
    const userName = user?.slice(0, user.indexOf('@'));
    const avatarLetter = userName?.slice(0, 1);
    const dispatch = useDispatch();

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const exit = () => {
        console.log('exit');
        dispatch(logOut());
    };

    return (
        <header className={s.container}>
            <div className={s.thumb}>
                <Link to="/">
                    <Icon width="90" height="32" href={`${icons}#logo`} />
                </Link>
                {isLoggedIn && (
                    <div className={s.userThumb}>
                        <div className={s.avatar}>{avatarLetter}</div>
                        {isMobile ? (
                            <Icon className={s.exit} width="16" height="16" href={`${icons}#logout`} onClick={exit} />
                        ) : (
                            <div className={s.userData}>
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
