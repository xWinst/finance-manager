import { Icon } from 'components';
import icons from 'images/icons.svg';
import s from './Tooltip.module.css';

const Tooltip = ({ onClick }) => {
    return (
        <div className={s.container}>
            <Icon className={s.icon} href={`${icons}#close`} width="14" height="14" onClick={onClick} />
            <div className={s.triangle} />
            <p className={s.text}>
                Hello! You can enter the current balance of your account until you have added any transactions
            </p>
        </div>
    );
};

export default Tooltip;
