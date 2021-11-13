import React, {useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value}) => {


    const [counter, setCounter] = useState(value);

    
    

    //HandleAdd
    const HandleAdd = () => {
        //Ambas forman dan el mismoresultado
        // setCounter( counter + 1 );

        //esta es en caso de no poder acceder directamente al counter
        setCounter((c)=> c + 1);
    };

    const HandleMinus= () => {
        setCounter(counter - 1);
    };

    const HandleReset = () => {
        setCounter(value)
    };

    return (
        <>
         <h1>CounterApp</h1>
         <h2>{ counter }</h2>   

        <button
            onClick={HandleAdd}
        >+1</button>
        <button
            onClick={HandleReset}
        >Reset</button>
        <button
            onClick={HandleMinus}
        >-1</button>

        </>
    )
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
