import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useWidth } from 'hooks/useWidth';
import { logOut } from 'redux/userOperations';
import { Icon, Modal } from 'components';
import icons from 'images/icons.svg';
import s from './Header.module.css';

const Header = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const user = useSelector(state => state.user.userData?.email);

    const [isShowModal, setIsShowModal] = useState(false);
    const dispatch = useDispatch();
    const width = useWidth();
    const userName = user?.slice(0, user.indexOf('@'));
    const avatarLetter = userName?.slice(0, 1);

    const close = () => {
        setIsShowModal(false);
    };

    const exit = () => {
        setIsShowModal(true);
    };

    const confirm = () => {
        dispatch(logOut());
        setIsShowModal(false);
    };

    return (
        <>
            <header className={s.container}>
                <div className={s.thumb}>
                    <Link to="/">
                        <Icon width="90" height="32" href={`${icons}#logo`} />
                    </Link>
                    {isLoggedIn && (
                        <div className={s.userThumb}>
                            <div className={s.avatar}>{avatarLetter}</div>
                            {width < 768 ? (
                                <Icon
                                    className={s.exit}
                                    width="16"
                                    height="16"
                                    href={`${icons}#logout`}
                                    onClick={exit}
                                />
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
            {isShowModal && <Modal text="Do you really want to leave?" onClose={close} onConfirm={confirm} />}
        </>
    );
};

export default Header;
