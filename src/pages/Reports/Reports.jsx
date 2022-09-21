import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'components';
import { getStatistics } from 'redux/statisticsOperation';
import allCategories from 'database/categories';
import months from 'database/months';
import icons from 'images/icons.svg';
import s from '../index.module.css';

const rusMonth = Object.keys(months);

// const formated = number => number?.toFixed(2).toLocaleString('ru-RU').replace(',', '.');
const formated = number => new Intl.NumberFormat('uk', { minimumFractionDigits: 2 }).format(number).replace(',', '.');

const Reports = () => {
    const statistics = useSelector(state => state.statistics);
    const balance = useSelector(state => state.user.userData.balance);
    const [month, setMonth] = useState(new Date().getMonth());
    const [typeBalance, setTypeBalance] = useState('expenses');

    const dispatch = useDispatch();
    const categories = allCategories[typeBalance];
    const getName = key => categories[key].split(/,| /)[0].toLowerCase();

    let currentStatistics = statistics[typeBalance].data || {};
    console.log('currentStatistics: ', currentStatistics); ///////////////////

    let keyCurrent = Object.keys(currentStatistics);

    const [category, setCategory] = useState(keyCurrent[0]);

    useEffect(() => {
        dispatch(getStatistics((month + 1).toString().padStart(2, '0')));
    }, [dispatch, month]);

    useEffect(() => {
        console.log('RENDER'); //////////////
    });

    const getPreviousMonth = () => {
        month === 0 ? setMonth(11) : setMonth(state => state - 1);
    };

    const getNextMonth = () => {
        month === 11 ? setMonth(0) : setMonth(state => state + 1);
    };

    const changeTypeBalance = () => {
        if (typeBalance === 'expenses') {
            setTypeBalance('incomes');
            currentStatistics = statistics.incomes.data;
        } else {
            setTypeBalance('expenses');
            currentStatistics = statistics.expenses.data;
        }
        keyCurrent = Object.keys(currentStatistics);
        setCategory(keyCurrent[0]);
    };

    const selectCategory = key => {
        setCategory(key);
    };

    return (
        <div className={s.container}>
            <Link className={s.goBack} to="/expenses">
                <Icon href={`${icons}#goBack`} width="24" height="24" />
            </Link>
            <p className={s.text}>Current period:</p>
            <div className={s.period}>
                <button className={s.button} type="button" onClick={getPreviousMonth}>
                    <Icon href={`${icons}#arrowLeft`} width="7" height="17" />
                </button>
                <span className={s.month}>{months[rusMonth[month]]}</span>
                <button className={s.button} type="button" onClick={getNextMonth}>
                    <Icon href={`${icons}#arrowRight`} width="7" height="17" />
                </button>
            </div>
            <p className={s.topic}>Balance:</p>
            <p className={s.balance}>{`${balance.toFixed(2)} UAH`}</p>
            <div className={s.totalThumb}>
                <div className={s.total}>
                    <p>Expenses:</p>
                    <p className={s.value} style={{ color: '#e7192e' }}>
                        - {formated(statistics.expenses.total)} &#8372;
                    </p>
                </div>
                <div className={s.total}>
                    <p>Incomes:</p>
                    <p className={s.value} style={{ color: '#407946' }}>
                        + {formated(statistics.incomes.total)} &#8372;
                    </p>
                </div>
            </div>
            <div>
                <button className={s.button} type="button" onClick={changeTypeBalance}>
                    <Icon href={`${icons}#arrowLeft`} width="7" height="17" />
                </button>
                <span className={s.item}>{typeBalance}</span>
                <button className={s.button} type="button" onClick={changeTypeBalance}>
                    <Icon href={`${icons}#arrowRight`} width="7" height="17" />
                </button>
            </div>
            <ul className={s.categories}>
                {keyCurrent.map((key, index) => (
                    <li
                        className={key === category ? s.active : s.category}
                        key={key}
                        onClick={() => selectCategory(key)}
                    >
                        <p className={s.price}>{formated(currentStatistics[key].total)}</p>
                        <Icon href={`${icons}#${getName(key)}`} width="56" height="56" />
                        <p className={s.categoryName}>{categories[key]}</p>
                    </li>
                ))}
            </ul>

            <div>{statistics.toString()}</div>
        </div>
    );
};

export default Reports;
