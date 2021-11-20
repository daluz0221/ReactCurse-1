import React from 'react'

export const Showinc = React.memo(({inc}) => {


    console.log('me generé');


    return (
        <button
            className='btn btn-primary'
            onClick={ () => {
                inc(5);
            }}
        >
            Incrementar
        </button>
    )
})
