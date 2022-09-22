import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { deleteTransaction } from 'redux/transactionOperation';
import { removeTransaction } from 'redux/userReducers';
import { Icon, Modal } from 'components';
import icons from 'images/icons.svg';
import s from './TransactionList.module.css';
import allCategories from 'database/categories';

const TransactionList = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [id, setId] = useState();
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    let selector, color, sign, categories;

    if (pathname === '/expenses') {
        selector = state => state.user.expenses.expenses;
        color = '#e7192e';
        sign = '- ';
        categories = allCategories.expenses;
    } else {
        selector = state => state.user.incomes.incomes;
        color = '#407946';
        sign = '';
        categories = allCategories.incomes;
    }

    const transactions = useSelector(selector);
    const transactionsList = transactions.slice().sort((a, b) => b.date.localeCompare(a.date));

    const formatedDate = date => {
        const array = date.split('-');
        return `${array[2]}.${array[1]}.${array[0]}`;
    };

    const delTransaction = id => {
        setId(id);
        setIsShowModal(true);
    };

    const close = () => {
        setIsShowModal(false);
    };

    const confirm = () => {
        dispatch(deleteTransaction(id));
        dispatch(removeTransaction(id));
        setIsShowModal(false);
    };

    const translateCategory = category => categories[category];

    return (
        <div className={s.container}>
            <div className={s.header}>
                <span className={s.dateHeader}>Date</span>
                <span className={s.dscrHeader}>Description</span>
                <span className={s.categoryHeader}>Category</span>
                <span className={s.sumHeader}>Sum</span>
            </div>
            <ul className={s.list}>
                {transactionsList.map(transaction => (
                    <li className={s.transaction} key={transaction._id}>
                        <div className={s.info}>
                            <p className={s.text}>{transaction.description}</p>
                            <div className={s.thumb}>
                                <p className={s.date}>{formatedDate(transaction.date)}</p>
                                <p className={s.category}>{translateCategory(transaction.category)}</p>
                            </div>
                        </div>
                        <p className={s.amount} style={{ color: `${color}` }}>
                            {sign + transaction.amount.toFixed(2)} <span>&nbsp;&#8372;</span>
                        </p>
                        <button className={s.icon} onClick={() => delTransaction(transaction._id)}>
                            <Icon href={`${icons}#basket`} width="18" height="18" />
                        </button>
                    </li>
                ))}
            </ul>
            {isShowModal && <Modal text="Are you sure?" onClose={close} onConfirm={confirm} />}
        </div>
    );
};

export default TransactionList;
