import { useDispatch } from 'react-redux';
import { useState } from 'react';

function AirlineForm(){

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

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder='Airline Name'
            value = {newAirline}
            onChange = {event => setNewAirline(event.target.value)} 
        />
        <button type="submit">Add Airline</button>
        </form>
        </>
    )
}

export default AirlineForm