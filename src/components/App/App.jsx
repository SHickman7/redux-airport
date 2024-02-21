import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AirlineTable from '../AirlineList/AirlineList'
import AirlineList from '../AirlineList/AirlineList';

function App() {


  const reduxStore = useSelector(store => store);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type:  "AIRLINELIST_ADD",
      payload: newAirline
    });

    setNewAirline ('');

  }

  const [newAirline, setNewAirline] = useState ('');

  return (
    <>
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Airline Name'
          value = {newAirline}
          onChange = {event => setNewAirline(event.target.value)} 
          />
        <button type="submit">Add Airline</button>
      </form>
      <br></br>
      <AirlineList />
    </div>
    </>
  );
}

export default App;
