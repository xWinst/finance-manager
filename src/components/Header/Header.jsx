// import { NavLink } from 'react-router-dom';
import icons from 'images/icons.svg';
import s from './Header.module.css';

const Header = () => {
    const isMobile = window.innerWidth < 767;

    return (
        <header className={s.container}>
            <svg width="90" height="32">
                <use href={`${icons}#logo`} />
            </svg>
            <div className={s.userThumb}>
                <div className={s.avatar}>u</div>
                {isMobile ? (
                    <svg width="16" height="16">
                        <use href={`${icons}#logout`} />
                    </svg>
                ) : (
                    <div className={s.thumb}>
                        <span>User Name</span>
                        <div className={s.line}></div>
                        <button className={s.button} type="button">
                            Exit
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
