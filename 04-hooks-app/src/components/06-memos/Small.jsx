import React, {memo} from 'react'

export const Small = memo(({value}) => {


    console.log('ota es');
    return (
        <small>
            {value}
        </small>
    )
})
