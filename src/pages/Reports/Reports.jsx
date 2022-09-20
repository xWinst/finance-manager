import { Link } from 'react-router-dom';
import { Icon } from 'components';
import icons from 'images/icons.svg';
import s from '../index.module.css';

const Reports = () => {
    return (
        <div className={s.container}>
            <Link className={s.goBack} to="/expenses">
                <Icon href={`${icons}#goBack`} width="24" height="24" />
            </Link>
            <p className={s.text}>Current period:</p>
            <div className={s.period}>
                <button className={s.button} type="button">
                    <Icon href={`${icons}#arrowLeft`} width="7" height="17" />
                </button>
                <span className={s.month}>PERIOD</span>
                <button className={s.button} type="button">
                    <Icon href={`${icons}#arrowRight`} width="7" height="17" />
                </button>
            </div>
            <p className={s.topic}>Balance:</p>
            <p className={s.balance}>25000.00 UAH</p>
            <div className={s.totalThumb}>
                <div className={s.total}>
                    <p>Expenses:</p>
                    <p className={s.value} style={{ color: '#e7192e' }}>
                        - 18 000.00<span>&nbsp;&#8372;</span>
                    </p>
                </div>
                <div className={s.total}>
                    <p>Incomes:</p>
                    <p className={s.value} style={{ color: '#407946' }}>
                        + 45 000.00<span>&nbsp;&#8372;</span>
                    </p>
                </div>
            </div>
            <div>
                <button className={s.button} type="button">
                    <Icon href={`${icons}#arrowLeft`} width="7" height="17" />
                </button>
                <span className={s.item}>Expenses</span>
                <button className={s.button} type="button">
                    <Icon href={`${icons}#arrowRight`} width="7" height="17" />
                </button>
            </div>
            <ul></ul>
        </div>
    );
};

export default Reports;
