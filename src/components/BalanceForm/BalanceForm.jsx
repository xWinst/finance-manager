import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserBalance } from 'redux/userOperations';
import s from './BalanceForm.module.css';

const BalanceForm = () => {
    const userBalance = useSelector(state => state.user.userData.balance);
    const [balance, setBalance] = useState(`${userBalance.toFixed(2)} UAH`);
    const [enteredBalance, setEnteredBalance] = useState(userBalance);
    const dispath = useDispatch();

    useEffect(() => {
        setBalance(`${userBalance.toFixed(2)} UAH`);
    }, [userBalance]);

    const onChange = e => {
        const { value } = e.target;
        if (!Number(value)) return;
        setBalance(value);
        setEnteredBalance(value);
    };

    const onFocus = () => {
        setBalance('');
    };

    const onBlur = e => {
        setBalance(`${userBalance.toFixed(2)} UAH`);
    };

    const onSubmit = e => {
        e.preventDefault();
        const value = Number(enteredBalance).toFixed(2);
        dispath(setUserBalance(Number(value)));
        e.target.balance.blur();
    };

    return (
        <div className={s.container}>
            <p className={s.title}>Balance:</p>
            <form className={s.form} onSubmit={onSubmit}>
                <input
                    className={s.balance}
                    name="balance"
                    value={balance}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    disabled={false}
                />
                <button type="submit" className={s.button}>
                    Confirm
                </button>
            </form>
        </div>
    );
};

export default BalanceForm;
