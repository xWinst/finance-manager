import { useNavigate } from 'react-router-dom';
import image from 'images/404PageNotFound.svg';

import { Button } from 'components';

import s from './PageNotFound.module.css';

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate('/', { replace: true });
    };

    return (
        <div className={s.container}>
            <div className={s.background}>
                <h2 className={s.title}>404 Page Not Found</h2>
                <img className={s.img} src={image} alt="Page Not Found" />
                <p className={s.text}>Oops! The page you're looking for doesn't exist.</p>
                <Button text={'Go home'} onClick={handleBtnClick} />
            </div>
        </div>
    );
};

export default PageNotFound;
