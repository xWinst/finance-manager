import { useState } from 'react';
import { PrivateRoute, TransactionInputForm, Navigate } from 'components';
import { addIncome } from 'redux/transactionOperation';
import categories from 'database/incomesCategories';

import s from '../index.module.css';

const Incomes = () => {
    const [isShowInputForm, setIsShowInputForm] = useState(false);

    const toggleInpurForm = () => {
        setIsShowInputForm(state => !state);
    };
    return (
        <PrivateRoute>
            <div className={s.container}>
                {isShowInputForm ? (
                    <TransactionInputForm onClick={toggleInpurForm} categories={categories} operation={addIncome} />
                ) : (
                    <Navigate onClick={toggleInpurForm} text={'Add incomes'} />
                )}
            </div>
        </PrivateRoute>
    );
};

export default Incomes;
