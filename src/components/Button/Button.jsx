import s from './Button.module.css';

const Button = ({ icon = '', text, onClick, type = 'button' }) => {
    return (
        <button className={s.button} type={type} onClick={onClick}>
            {icon && (
                <svg width="18" height="18">
                    <use href={icon} />
                </svg>
            )}
            {text}
        </button>
    );
};

export default Button;
