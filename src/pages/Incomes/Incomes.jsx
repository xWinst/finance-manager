import { useState } from 'react';
import { TransactionInputForm, TransactionInfo } from 'components';
import { addIncome } from 'redux/transactionOperation';

import s from '../index.module.css';

const Incomes = () => {
    const [isShowInputForm, setIsShowInputForm] = useState(false);

    const toggleComponent = () => {
        setIsShowInputForm(state => !state);
    };

    return (
        <div className={s.container}>
            {isShowInputForm ? (
                <TransactionInputForm onClick={toggleComponent} operation={addIncome} />
            ) : (
                <TransactionInfo onClick={toggleComponent} text={'Add incomes'} />
            )}
        </div>
    );
};

export default Incomes;
