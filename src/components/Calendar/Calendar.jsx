import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Icon } from 'components';
import icons from 'images/icons.svg';
import s from './Calendar.module.css';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ getDate }) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => getDate(date));

    return (
        <div className={s.container}>
            <Icon className={s.icon} href={`${icons}#calendar`} width="20" height="20" />
            <DatePicker
                maxDate={new Date()}
                selected={date}
                onChange={date => setDate(date)}
                className={s.datePicker}
                dateFormat="dd.MM.yyyy"
            />
        </div>
    );
};

export default Calendar;
