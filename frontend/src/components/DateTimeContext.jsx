import React, { createContext, useState, useContext } from 'react';

const DateTimeContext = createContext();

export const DateTimeProvider = ({ children }) => {
  const [Datetime, setDatetime] = useState('October 1, 2023');
  const [Country, setCountry] = useState('All');
  const [CivilianTargeting, setCivilianTargeting] = useState(false);
  const [Actor, setActor] = useState('Choose...');
  const [Event, setEvent] = useState('Choose...');
  const [Fatalities, setFatalities] = useState('All');

  return (
    <DateTimeContext.Provider value={{ Datetime, setDatetime, Country, setCountry, CivilianTargeting, setCivilianTargeting, Actor, setActor, Event, setEvent, Fatalities, setFatalities }}>
      {children}
    </DateTimeContext.Provider>
  );
};

export const useDateTime = () => {
  const context = useContext(DateTimeContext);
  if (!context) {
    throw new Error('useDateTime must be used within a DateTimeProvider');
  }
  return context;
};
