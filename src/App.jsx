import React from 'react'
import DateRange from './components/DateRange'
import EventFilter from './components/EventFilter'
import GoogleMap from './components/GoogleMap'

function App() {  
  return (
    <>
      <GoogleMap />
      <DateRange />
      <EventFilter />
    </>
  )
}

export default App