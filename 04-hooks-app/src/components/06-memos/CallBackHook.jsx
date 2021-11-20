import React, { useCallback, useState } from 'react';
import '../02-seEffect/effects.css'
import { Showinc } from './Showinc';

export const CallBackHook = () => {


    const [counter, setCounter] = useState(10);


    // const inc = () => {
    //     setCounter( counter + 1);
    // };


    const inc = useCallback((num) => {
        setCounter(e => e + num )
    }, [setCounter]);

    return (
        <div>
            <h1>UseCallbackHook: { counter }</h1>
            <hr />

            <Showinc inc={inc} />

        </div>
    )
}
