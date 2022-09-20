import { Link, NavLink } from 'react-router-dom';
import { Icon, BalanceForm, TransactionList } from 'components';
import icons from 'images/icons.svg';
import s from './TransactionInfo.module.css';

const getActive = ({ isActive }) => (isActive ? s.active : s.navLink);

const TransactionInfo = ({ onClick, text }) => {
    return (
        <>
            <div className={s.container}>
                <Link to="/reports" className={s.link}>
                    Reports
                    <Icon className={s.icon} width="20" height="20" href={`${icons}#chart`} />
                </Link>
                <BalanceForm />
                <button className={s.btn} type="button" onClick={onClick}>
                    {text}
                </button>
            </div>

            <TransactionList />
            <div className={s.nav}>
                <NavLink className={getActive} to="/expenses">
                    Expenses
                </NavLink>
                <NavLink className={getActive} to="/incomes">
                    Incomes
                </NavLink>
            </div>
        </>
    );
};

export default TransactionInfo;
