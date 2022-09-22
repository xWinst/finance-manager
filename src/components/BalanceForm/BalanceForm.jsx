import { Tooltip } from 'components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserBalance } from 'redux/userOperations';
import s from './BalanceForm.module.css';

const BalanceForm = () => {
    const userBalance = useSelector(state => state.user.userData.balance);
    const transactions = useSelector(state => state.user.userData.transactions);
    const [balance, setBalance] = useState(`${userBalance.toFixed(2)} UAH`);
    const [enteredBalance, setEnteredBalance] = useState(userBalance);
    const [isShowTooltip, setIsShowTooltip] = useState(!userBalance && !transactions.length);
    const dispath = useDispatch();

    const canChangeBalans = transactions.length === 0;

    useEffect(() => {
        setBalance(`${userBalance.toFixed(2)} UAH`);
    }, [userBalance]);

    const onChange = e => {
        const { value } = e.target;
        if (!Number(value) && value) return;
        setBalance(value);
        setEnteredBalance(value);
    };

    const onFocus = () => {
        setBalance('');
    };

    const onBlur = () => {
        setBalance(`${userBalance.toFixed(2)} UAH`);
    };

    const onSubmit = e => {
        e.preventDefault();
        const value = Number(enteredBalance).toFixed(2);
        dispath(setUserBalance(Number(value)));
        e.target.balance.blur();
    };

    const closeTooltip = () => {
        setIsShowTooltip(false);
    };

    return (
        <div className={s.container}>
            <p className={s.title}>Balance:</p>
            <form className={s.form} onSubmit={onSubmit}>
                <input
                    className={s.balance}
                    name="balance"
                    value={balance}
                    maxLength="100"
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    disabled={!canChangeBalans}
                />
                <button type="submit" className={s.button} disabled={!canChangeBalans}>
                    Confirm
                </button>
            </form>
            {isShowTooltip && <Tooltip onClick={closeTooltip} />}
        </div>
    );
};

export default BalanceForm;
