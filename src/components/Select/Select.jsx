import { useState, useEffect } from 'react';
import s from './Select.module.css';

const Select = ({ categories }) => {
    const keys = Object.keys(categories);
    const [isShow, setIsShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Product category');

    useEffect(() => {
        window.addEventListener('click', onClick);
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('click', onClick);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    const onClick = event => {
        if (event.target.name !== 'btn') {
            setIsShow(false);
        }
    };

    const onKeyDown = event => {
        if (event.code === 'Tab' || event.code === 'Escape') {
            setIsShow(false);
        }
    };

    const toggleVisibility = () => {
        setIsShow(state => !state);
    };

    const selectCategory = event => {
        setSelectedCategory(event.target.innerText);
        setIsShow(false);
    };

    ////// Стрелка вверх !!!!

    return (
        <div className={s.container}>
            <button className={s.select} name="btn" type="button" onClick={toggleVisibility}>
                {selectedCategory}
            </button>
            {isShow && (
                <ul className={s.list}>
                    {keys.map(key => (
                        <li key={key} className={s.item} name={key} onClick={selectCategory}>
                            {categories[key]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
