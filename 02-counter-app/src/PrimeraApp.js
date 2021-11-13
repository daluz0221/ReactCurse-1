import React from 'react'
// import React, {Fragment} from 'react'
import PropTypes from 'prop-types';


const PrimeraApp = ( {saludos, subtitle='soy un fan tuyo'} ) => {
    
 

   
    
    
    return (
        <>
        <h1>{ saludos }</h1>
        {/* <h1>{ JSON.stringify(saludo, null, 3) }</h1> */}
        <p>{ subtitle }</p>
        </>
    );
    
};

PrimeraApp.propTypes = {
    saludos: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitle: 'soy fan de mimosa'
}

export default PrimeraApp;
