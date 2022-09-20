import { useState, useEffect } from 'react';
import { Icon } from 'components';
import icons from 'images/icons.svg';
import s from './Select.module.css';

const Select = ({ categories, getCategory, initial }) => {
    const [isShow, setIsShow] = useState(false);
    const [btnIcon, setBtnIcon] = useState(`${icons}#arrowDown`);
    const [btnColor, setBtnColor] = useState('#c7ccdc');
    const [selectedCategory, setSelectedCategory] = useState('Product category');
    const keys = Object.keys(categories);

    useEffect(() => {
        window.addEventListener('click', onClick);
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('click', onClick);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    useEffect(() => {
        setSelectedCategory('Product category');
        setBtnColor('#c7ccdc');
    }, [initial]);

    const onClick = event => {
        if (event.target.name !== 'btn') {
            setIsShow(false);
            setBtnIcon(`${icons}#arrowDown`);
        }
    };

    const onKeyDown = event => {
        if (event.code === 'Tab' || event.code === 'Escape') {
            setIsShow(false);
            setBtnIcon(`${icons}#arrowDown`);
        }
    };

    const showSelection = () => {
        setIsShow(state => !state);
        setBtnIcon(isShow ? `${icons}#arrowDown` : `${icons}#arrowUp`);
    };

    const selectCategory = event => {
        setSelectedCategory(event.target.innerText);
        setBtnColor('#52555f');
        setIsShow(false);
        getCategory(event.target.dataset.key);
    };

    return (
        <div className={s.container}>
            <button className={s.btn} name="btn" type="button" onClick={showSelection} style={{ color: `${btnColor}` }}>
                {selectedCategory}
                <Icon className={s.icon} href={btnIcon} width="12" height="7" />
            </button>
            {isShow && (
                <ul className={s.list}>
                    {keys.map(key => (
                        <li key={key} className={s.item} data-key={key} onClick={selectCategory}>
                            {categories[key]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
