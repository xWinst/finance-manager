import s from './Button.module.css';

const Button = ({ icon, text, onClick }) => {
    return (
        <button className={s.button} type="button" onClick={onClick}>
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
