import React, { useRef } from 'react'

import '../02-seEffect/effects.css'

export const FocusScreen = () => {

    const inputref = useRef();
    // console.log(ref);

    const hclick = () => {


        inputref.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />


            <input type="text"
                ref={inputref}
                className='form-control'
                placeholder='Su nombre'
            />

            <button className='btn btn-outline-primary mt-5'
                onClick={hclick}
            >
                Focus
            </button>
        </div>
    )
}
