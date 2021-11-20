import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css'

const CounterWCHook = () => {


    const {state, increment, decrement, reset} =useCounter(100);


    return (
        <>
            <h1>Counter with hook: {state}</h1>  
            <hr />

            <button onClick={()=>increment(2)} className="btn btn-success"> + 1</button>
            <button onClick={reset} className="btn btn-info"> reset</button>
            <button onClick={()=>decrement(2)} className="btn btn-warning"> - 1</button>

        </>
    )
}

export default CounterWCHook;
