import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DateSelector = ({ passedDateProp }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleChange = (date) => {
        // convert to YYYY-MM-DD
        const year = date.getFullYear()
        let month = (date.getMonth() + 1);
        let day = date.getDate();
        if (month < 10) {
            month = `0${month}`
        }
        if (day < 10) {
            day = `0${day}`
        }
        let formattedDate = `${year}-${month}-${day}`
        setSelectedDate(formattedDate)
        passedDateProp(formattedDate)
    }
    return (
        <ReactDatePicker dateFormat="yyyy/MM/dd" selected={selectedDate} onChange={handleChange} />
    )
}
export default DateSelector