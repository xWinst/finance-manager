import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Calendar, Select, Button, Icon } from 'components';
import allCategories from 'database/categories';
import message from 'helpers/Message';
import icons from 'images/icons.svg';
import s from './TransactionInputForm.module.css';

const TransactionInputForm = ({ onClick, operation }) => {
    const [date, setDate] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [amount, setAmount] = useState();
    const [initial, setInitial] = useState(new Date());
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    let text, textColor, categories;

    if (pathname === '/expenses') {
        text = 'Expenses';
        textColor = '#e7192e';
        categories = allCategories.expenses;
    } else {
        text = 'Incomes';
        textColor = '#407946';
        categories = allCategories.incomes;
    }

    const getDate = date => {
        const year = date.toLocaleString('default', { year: 'numeric' });
        const month = date.toLocaleString('default', { month: '2-digit' });
        const day = date.toLocaleString('default', { day: '2-digit' });

        setDate(year + '-' + month + '-' + day);
    };

    const getCategory = category => {
        setCategory(category);
    };

    const changeDescription = event => {
        setDescription(event.target.value);
    };

    const changeAmount = event => {
        const { value } = event.target;
        if (!Number(value) && value) return;
        setAmount(value.trim());
    };

    const blurAmount = () => {
        const value = parseFloat(amount);
        if (value) setAmount(`${value.toFixed(2)} UAH`);
    };

    const focusAmount = () => {
        setAmount('');
    };

    const addTransaction = () => {
        const data = { date, description, category, amount: parseFloat(amount) };
        let errorText = description === '' ? 'Please add a description. <br>' : '';
        errorText += !category ? '    Please choose a category. <br>' : '';
        errorText += amount < 1 ? 'Amount must be greater than or equal to 1.' : '';

        if (errorText) {
            message.warning('Please fill in all fields', errorText);
            return;
        }
        dispatch(operation(data));
        message.sucsess('Transaction added successfully');
        reset();
    };

    const reset = () => {
        setInitial(new Date());
        setDescription('');
        setAmount('');
    };

    return (
        <div className={s.inputContainer}>
            <button className={s.goBack} type="button" onClick={onClick}>
                <Icon href={`${icons}#goBack`} width="24" height="24" />
            </button>
            <p className={s.text} style={{ color: `${textColor}` }}>
                {text}
            </p>
            <form className={s.form}>
                <Calendar getDate={getDate} initial={initial} />
                <input
                    className={s.input}
                    placeholder="Product description"
                    value={description}
                    onChange={changeDescription}
                />
                <Select categories={categories} getCategory={getCategory} initial={initial} />
                <div className={s.priceContainer}>
                    <input
                        className={s.price}
                        placeholder="00.00 UAH"
                        value={amount}
                        onChange={changeAmount}
                        onBlur={blurAmount}
                        onFocus={focusAmount}
                    />
                    <Icon className={s.calcIcon} href={`${icons}#calculator`} width="20" height="20" />
                </div>
                <div className={s.btnsContainer}>
                    <Button text="Input" onClick={addTransaction} />
                    <Button text="Clear" onClick={reset} />
                </div>
            </form>
        </div>
    );
};

export default TransactionInputForm;
