import { Link, NavLink } from 'react-router-dom';
import { Icon, BalanceForm } from 'components';
import icons from 'images/icons.svg';
import s from './Navigate.module.css';

const getActive = ({ isActive }) => (isActive ? s.active : s.navLink);

const Navigate = ({ onClick, text }) => {
    return (
        <>
            <Link to="/reports" className={s.link}>
                Reports
                <Icon className={s.icon} width="20" height="20" href={`${icons}#chart`} />
            </Link>
            <BalanceForm />
            <button className={s.btn} type="button" onClick={onClick}>
                {text}
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
    );
};

export default Navigate;
