import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TransactionInputForm, TransactionInfo, BalanceForm, Icon, Navigation, TransactionList } from 'components';
import { addExpense } from 'redux/transactionOperation';
import { useWidth } from 'hooks/useWidth';
import icons from 'images/icons.svg';

import s from '../index.module.css';

const Expenses = () => {
    const [isShowInputForm, setIsShowInputForm] = useState(false);
    const width = useWidth();

    const toggleComponent = () => {
        setIsShowInputForm(state => !state);
    };

    return width < 768 ? (
        <div className={s.container}>
            {isShowInputForm ? (
                <TransactionInputForm onClick={toggleComponent} operation={addExpense} />
            ) : (
                <TransactionInfo onClick={toggleComponent} text={'Add expenses'} />
            )}
        </div>
    ) : (
        <div className={s.container}>
            <div className={s.balanceThumb}>
                <BalanceForm />
                <Link to="/reports" className={s.link}>
                    Reports
                    <Icon className={s.icon} width="20" height="20" href={`${icons}#chart`} />
                </Link>
            </div>
            <Navigation />
            <TransactionInputForm onClick={toggleComponent} operation={addExpense} />
            <TransactionList />
        </div>
    );
};

export default Expenses;
