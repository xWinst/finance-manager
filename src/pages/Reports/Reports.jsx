import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Chart, Icon } from 'components';
import { getStatistics } from 'redux/statisticsOperation';
import allCategories from 'database/categories';
import months from 'database/months';
import icons from 'images/icons.svg';
import s from '../index.module.css';
// import { useWidth } from 'hooks/useWidth';

const monthKeys = Object.keys(months);
const formated = number => new Intl.NumberFormat('uk', { minimumFractionDigits: 2 }).format(number).replace(',', '.');

const Reports = () => {
    const statistics = useSelector(state => state.statistics);
    const balance = useSelector(state => state.user.userData.balance);

    const [month, setMonth] = useState(new Date().getMonth());
    const [typeBalance, setTypeBalance] = useState('expenses');
    const [category, setCategory] = useState();

    // const width = useWidth();
    const dispatch = useDispatch();
    const categories = allCategories[typeBalance];
    const getName = key => categories[key].split(/,| /)[0].toLowerCase();
    const currentStatistics = statistics[typeBalance].data || {};
    const keyCurrent = Object.keys(currentStatistics);

    useEffect(() => {
        dispatch(getStatistics((month + 1).toString().padStart(2, '0')));
    }, [dispatch, month]);

    if (keyCurrent.length && !currentStatistics[category]) setCategory(keyCurrent[0]);

    const changeMonth = step => {
        setMonth((month + step + 12) % 12);
    };

    const changeTypeBalance = () => {
        typeBalance === 'expenses' ? setTypeBalance('incomes') : setTypeBalance('expenses');
    };

    const selectCategory = key => {
        setCategory(key);
    };
    // console.log('Statistics: ', statistics); ///////////////////
    // console.log('currentStatistics: ', currentStatistics); ///////////////////
    // console.log('category ', category);
    // console.log('keyCurrent: ', keyCurrent);

    return (
        <div className={s.container}>
            <Link className={s.goBack} to="/expenses">
                <Icon href={`${icons}#goBack`} width="24" height="24" />
            </Link>
            <p className={s.text}>Current period:</p>
            <div className={s.period}>
                <button className={s.button} type="button" onClick={() => changeMonth(-1)}>
                    <Icon href={`${icons}#arrowLeft`} width="7" height="17" />
                </button>
                <span className={s.month}>{months[monthKeys[month]]}</span>
                <button className={s.button} type="button" onClick={() => changeMonth(1)}>
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

            {keyCurrent.length === 0 ? (
                <p className={s.ad}>No {typeBalance} in this month</p>
            ) : (
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
            )}

            <div className={s.chartsContainer}>
                {keyCurrent.length > 0 && currentStatistics[category] && (
                    <Chart chartData={currentStatistics[category]} />
                )}
            </div>
        </div>
    );
};

export default Reports;
