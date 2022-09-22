import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const getActive = ({ isActive }) => (isActive ? s.active : s.navLink);

const Navigation = () => {
    return (
        <div className={s.nav}>
            <NavLink className={getActive} to="/expenses">
                Expenses
            </NavLink>
            <NavLink className={getActive} to="/incomes">
                Incomes
            </NavLink>
        </div>
    );
};

export default Navigation;
