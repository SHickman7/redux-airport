import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import AirlineList from '../AirlineList/AirlineList';
import AirlineForm from '../AirlineForm/AirlineForm';

function App() {


  const reduxStore = useSelector(store => store);

  // const dispatch = useDispatch();

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   dispatch({
  //     type:  "AIRLINELIST_ADD",
  //     payload: newAirline
  //   });

  //   setNewAirline ('');

  // }

  // const [newAirline, setNewAirline] = useState ('');

  return (
    <>
    <div>
      <h1>Redux Airport</h1>
      <AirlineForm />
      <br></br>
      <AirlineList />
    </div>
    </>
  );
}

export default App;
