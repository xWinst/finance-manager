import { useWidth } from 'hooks/useWidth';
import s from './Chart.module.css';

const formated = number => new Intl.NumberFormat('uk', { minimumFractionDigits: 2 }).format(number).replace(',', '.');

const Chart = ({ chartData }) => {
    const width = useWidth();
    const keys = Object.keys(chartData);

    const array = keys.map(key => ({ category: key, price: chartData[key] })).sort((a, b) => b.price - a.price);
    array.shift();
    const maxPrice = array[0].price;

    return (
        <ul className={s.list}>
            {array.map(({ category, price }, index) => (
                <li key={category}>
                    <div className={s.description} style={{ width: (price / maxPrice) * Math.min(width - 40, 440) }}>
                        <p className={s.category}>{category}&nbsp;</p>
                        <p className={s.price}>{formated(price)}&nbsp;&#8372;</p>
                    </div>
                    <div
                        style={{
                            width: (price / maxPrice) * Math.min(width - 40, 440),
                            height: 15,
                            background: index % 3 === 0 ? '#FF751D' : '#FED9BF',
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                        }}
                    ></div>
                </li>
            ))}
        </ul>
    );
};

export default Chart;
