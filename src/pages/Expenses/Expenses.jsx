import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PrivateRoute, TransactionInputForm, Navigate, Icon } from 'components';
import { addExpense } from 'redux/transactionOperation';
import icons from 'images/icons.svg';
import categories from 'database/expensesCategories';

import s from '../index.module.css';

const Expenses = () => {
    const [isShowInputForm, setIsShowInputForm] = useState(false);
    const expenses = useSelector(state => state.user.expenses);

    const toggleInpurForm = () => {
        setIsShowInputForm(state => !state);
    };

    // useEffect(() => {
    //     console.log('RENDER');
    // });

    return (
        <PrivateRoute>
            <div className={s.container}>
                {isShowInputForm ? (
                    <TransactionInputForm onClick={toggleInpurForm} categories={categories} operation={addExpense} />
                ) : (
                    <>
                        <ul>
                            {expenses.map(expense => (
                                <li>
                                    <div>
                                        <p>{expense.description}</p>
                                        <div>
                                            <p>{expense.date}</p>
                                            <p>{expense.category}</p>
                                        </div>
                                    </div>
                                    <p>{expense.amount}</p>
                                    <Icon href={`${icons}#arrowDown`} width="18" height="18" />
                                </li>
                            ))}
                        </ul>
                        <Navigate onClick={toggleInpurForm} text={'Add expenses'} />
                    </>
                )}
            </div>
        </PrivateRoute>
    );
};

export default Expenses;
