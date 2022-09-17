import { PrivateRoute, Icon, BalanceForm } from 'components';
import { Link, NavLink } from 'react-router-dom';
import icons from 'images/icons.svg';

import s from '../index.module.css';

const getActive = ({ isActive }) => (isActive ? s.active : s.navLink);

const Incomes = () => {
    return (
        <PrivateRoute>
            <div className={s.container}>
                <Link to="/reports" className={s.link}>
                    Reports
                    <Icon className={s.icon} width="20" height="20" href={`${icons}#chart`} />
                </Link>
                <BalanceForm />
                <div className={s.nav}>
                    <NavLink className={getActive} to="/expenses">
                        Expenses
                    </NavLink>
                    <NavLink className={getActive} to="/incomes">
                        Incomes
                    </NavLink>
                </div>
            </div>
        </PrivateRoute>
    );
};

export default Incomes;
