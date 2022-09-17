import { Icon } from 'components';
import s from './Button.module.css';

const Button = ({ icon, text, onClick }) => {
    return (
        <button className={s.button} type="button" onClick={onClick}>
            {icon && <Icon width="18" height="18" href={icon} />}
            {text}
        </button>
    );
};

export default Button;
