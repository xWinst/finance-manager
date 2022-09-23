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
                <li className={s.item} key={category}>
                    <div
                        className={s.description}
                        style={width < 768 ? { width: (price / maxPrice) * Math.min(width - 40, 440) } : {}}
                    >
                        <p className={s.category}>{category}&nbsp;</p>
                        <p className={s.price}>{formated(price)}&nbsp;&#8372;</p>
                    </div>
                    <div
                        className={s.chart}
                        style={
                            width < 768
                                ? {
                                      width: (price / maxPrice) * Math.min(width - 40, 440),
                                      height: 15,
                                      background: index % 3 === 0 ? '#FF751D' : '#FED9BF',
                                      borderRadius: '0 10px 10px 0',
                                  }
                                : {
                                      width: 38,
                                      height: (price / maxPrice) * 328,
                                      background: index % 3 === 0 ? '#FF751D' : '#FED9BF',
                                      borderRadius: '10px 10px 0 0',
                                  }
                        }
                    ></div>
                </li>
            ))}
        </ul>
    );
};

export default Chart;
