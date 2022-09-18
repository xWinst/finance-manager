import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { PrivateRoute, Icon, BalanceForm, Button, Calendar, Select } from 'components';
import categories from 'database/expensesCategories';
import icons from 'images/icons.svg';

import s from '../index.module.css';

const getActive = ({ isActive }) => (isActive ? s.active : s.navLink);

const Expenses = () => {
    const [isShowInputForm, setIsShowInputForm] = useState(false);
    const [date, setDate] = useState();

    const toggleInpurForm = () => {
        setIsShowInputForm(state => !state);
    };

    const getDate = date => {
        const year = date.toLocaleString('default', { year: 'numeric' });
        const month = date.toLocaleString('default', { month: '2-digit' });
        const day = date.toLocaleString('default', { day: '2-digit' });
        const formattedDate = day + '.' + month + '.' + year;

        setDate(formattedDate);
    };

    return (
        <PrivateRoute>
            <div className={s.container}>
                {isShowInputForm ? (
                    <div className={s.inputContainer}>
                        <button className={s.goBack} type="button" onClick={toggleInpurForm}>
                            <Icon href={`${icons}#goBack`} width="24" height="24" />
                        </button>
                        <p className={s.text}>Expenses</p>
                        <form className={s.form}>
                            <Calendar getDate={getDate} />
                            <input className={s.input} placeholder="Product description" />
                            <Select categories={categories} />
                            <div className={s.priceContainer}>
                                <input className={s.price} placeholder="00.00 UAH" />
                                <Icon className={s.calcIcon} href={`${icons}#calculator`} width="20" height="20" />
                            </div>
                            <div className={s.btnsContainer}>
                                <Button type="submit" text="Input" />
                                <Button text="Clear" />
                            </div>
                        </form>
                    </div>
                ) : (
                    <>
                        <Link to="/reports" className={s.link}>
                            Reports
                            <Icon className={s.icon} width="20" height="20" href={`${icons}#chart`} />
                        </Link>
                        <BalanceForm />
                        <button className={s.btn} type="button" onClick={toggleInpurForm}>
                            Add expenses
                        </button>
                        <div className={s.nav}>
                            <NavLink className={getActive} to="/expenses">
                                Expenses
                            </NavLink>
                            <NavLink className={getActive} to="/incomes">
                                Incomes
                            </NavLink>
                        </div>
                    </>
                )}
            </div>
        </PrivateRoute>
    );
};

export default Expenses;
