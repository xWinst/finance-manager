import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import months from 'database/months';
import s from './Summary.module.css';

const monthKeys = Object.keys(months);
const formated = number => new Intl.NumberFormat('uk', { minimumFractionDigits: 2 }).format(number).replace(',', '.');

const Summary = () => {
    const { pathname } = useLocation();
    const selector =
        pathname === '/expenses' ? state => state.user.expenses.monthsStats : state => state.user.incomes.monthsStats;
    const monthsStats = useSelector(selector);
    const actualMonths = monthKeys
        .map(key => ({ month: months[key], value: monthsStats[key] }))
        .filter(({ value }) => value !== 'N/A' && value !== 0);

    return (
        <ul className={s.list}>
            {actualMonths.length ? (
                actualMonths.map(month => (
                    <li className={s.item} key={month.month}>
                        <p>{month.month}</p>
                        <p>{formated(month.value)}</p>
                    </li>
                ))
            ) : (
                <li className={s.zeroItem}>
                    <p>No stats</p>
                </li>
            )}
            <li className={s.titleItem}>
                <p className={s.title}>Summary</p>
            </li>
        </ul>
    );
};

export default Summary;
