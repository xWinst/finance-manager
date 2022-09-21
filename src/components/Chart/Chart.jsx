const Chart = ({ chartData }) => {
    const keys = Object.keys(chartData);

    const array = keys.map(key => ({ category: key, price: chartData[key] })).sort((a, b) => b.price - a.price);
    array.shift();
    const maxPrice = array[0].price;

    console.log('array: ', array);

    return (
        <ul>
            {array.map(({ category, price }) => (
                <li style={{ width: '100%' }}>
                    <p>{category}</p>
                    <div style={{ width: (price / maxPrice) * 280, height: 15, backgroundColor: '#ff0000' }}></div>
                </li>
            ))}
        </ul>
    );
};

export default Chart;
