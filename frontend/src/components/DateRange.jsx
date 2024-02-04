import React, { useState } from 'react';
import { useDateTime } from './DateTimeContext';
import { search } from './EventFilter';
import 'bootstrap/dist/css/bootstrap.min.css';

function DateRange() {
  const { Datetime, setDatetime, Country, setCountry, CivilianTargeting, setCivilianTargeting, Actor, setActor, Event, setEvent, Fatalities, setFatalities } = useDateTime();
  const [date, setDate] = useState(0);
  const handleDateChange = async (event) => {
    setDate(event.target.value);
    await search(setDatetime, setCountry, setCivilianTargeting, setActor, setEvent, setFatalities, convertNumberToDate(date), Country, CivilianTargeting, Actor, Event, Fatalities);
  };

  const convertNumberToDate = (num) => {
    const startDate = new Date('2023-10-01'); 
    const targetDate = new Date(startDate.getTime() + num * 24 * 60 * 60 * 1000);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return targetDate.toLocaleDateString('en-US', options);
  };

  return (
    <nav class="navbar navbar-light bg-light position-fixed bottom-0 container-fluid justify-content-center bg-transparent mb-5">
        <div className='container justify-content-center bg-black bg-opacity-25 rounded-4 p-2'>
            <label htmlFor="Date" class="form-label h5 text-light">Date: {convertNumberToDate(date)}</label>
            <input type="range" class="form-range" min="1" max="111" step="1" id="Date" value={date} onChange={handleDateChange}/>
        </div>
    </nav>
  )
}

export default DateRange