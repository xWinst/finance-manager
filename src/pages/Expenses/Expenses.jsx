import { useState } from 'react';
import { TransactionInputForm, TransactionInfo } from 'components';
import { addExpense } from 'redux/transactionOperation';

import s from '../index.module.css';

const Expenses = () => {
    const [isShowInputForm, setIsShowInputForm] = useState(false);

    const toggleComponent = () => {
        setIsShowInputForm(state => !state);
    };

    return (
        <div className={s.container}>
            {isShowInputForm ? (
                <TransactionInputForm onClick={toggleComponent} operation={addExpense} />
            ) : (
                <TransactionInfo onClick={toggleComponent} text={'Add expenses'} />
            )}
        </div>
    );
};

export default Expenses;
