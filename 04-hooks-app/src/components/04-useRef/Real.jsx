import React, { useState } from 'react';


import '../02-seEffect/effects.css';
import { MultipleCustomHooks } from '../03-ejemplos/MultipleCustomHooks';


export const Real = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Real Case</h1>
            <hr />

            { show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary mt-5"
                onClick={() => {
                    setShow( !show )
                }}    
            >
                Show/Hide
            </button>

        </div>
    )
}
