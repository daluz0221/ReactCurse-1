import React from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';

const FormWCH = () => {

    const [state, change] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = state;

    const hsubmit = (e) => {
        e.preventDefault();
        console.log(state);
    };

    

    return (
        <form onSubmit={hsubmit}>
          <h1>Form with custom Hook</h1>  
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

        <div className="form-group">
            <input 
                type="password"
                name="password"
                className="form-control"
                placeholder="Tu contraseña"
                autoComplete="off"
                value={password}
                onChange={change}
            />
        </div>

        <button type="submit" className="btn btn-primary">Guardar</button>

        </form>
    )
}

export default FormWCH;
