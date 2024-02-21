import './AirlineList.css'
import { useSelector } from 'react-redux';

function AirlineList (){

    const airlineList = useSelector(store => store.airlineList)

    return(
        <>
        <table>
            <th>Airlines</th>
                {airlineList.map((airline, index) => (<tr key= {index}>{airline}</tr>))}
        </table>

        </>
    )
}

export default AirlineList;