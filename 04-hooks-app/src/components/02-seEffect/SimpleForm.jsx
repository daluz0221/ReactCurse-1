import React, {useEffect, useState} from 'react';

import './effects.css';
import Mensaje from './Mensaje';

const SimpleForm = () => {

    const [state, setstate] = useState({
        name: '',
        email: ''
    });

    const {name, email} =state;

    useEffect(()=>{
        // console.log('hey!');
    }, []);
    
    useEffect(()=>{
        // console.log('state cambió!');
    }, [state]);

    const change = ({target}) => {
        // console.log(e.target);
        setstate({
            ...state,
            [target.name]: target.value
        });
    };

    return (
        <>
          <h1>useEffect</h1>  
          <hr />

        <div className="form-group">
            <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={change}
            />
        </div>
        <div className="form-group">
            <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="Tu correo"
                autoComplete="off"
                value={email}
                onChange={change}
            />
        </div>

        { (name === '123') && <Mensaje />}

        </>
    )
}

export default SimpleForm;
