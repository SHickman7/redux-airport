import './AirlineList.css'
import { useSelector } from 'react-redux';

function AirlineList (){

    const airlineList = useSelector(store => store.airlineList)

    return(
        <>
        <table>
            <tbody>
                <tr>
                <th>Airlines</th>
                </tr>
                {airlineList.map((airline, index) => (<tr key= {index}>{airline}</tr>))}
            </tbody>
        </table>

        </>
    )
}

export default AirlineList;