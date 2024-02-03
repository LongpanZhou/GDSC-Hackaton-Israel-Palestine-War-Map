import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DateRange() {
  const [date, setDate] = useState(0);
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const convertNumberToDate = (num) => {
    const startDate = new Date('2023-10-01'); 
    const targetDate = new Date(startDate.getTime() + num * 24 * 60 * 60 * 1000);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return targetDate.toLocaleDateString('en-US', options);
  };

  return (
    <div>
      <label for="Date" class="form-label">Date: {convertNumberToDate(date)}</label>
      <input type="range" class="form-range" min="1" max="111" step="1" id="Date" value={date} onChange={handleDateChange}/>
    </div>
  )
}

export default DateRange