import React from 'react';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegister } from '../../actions/auth';



export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const {msgError} = useSelector(state => state.ui);

    


    const [values, change] = useForm({
        name:'Luis',
        email:'luisfe23@hotmail.com',
        password: '123456',
        password2: '123456'
    });

    const {name, email, password, password2} = values;

    const hRegister = (e) => {
        e.preventDefault();
        
        if (isFormValid()) {
            dispatch( startRegister(email, password, name) )
        }

    }


    const isFormValid = () => {

        if (name.trim().length === 0) {
           
            dispatch( setError('name is required') );
            return false;
        }else if(!validator.isEmail(email)){
            dispatch( setError('Email is not valid') );
          
            return false
        }else if (password !== password2 || password.length < 5){
            dispatch( setError('la contra debe tener almenos 5 caracteres') );

            return false
        }

    
        dispatch( removeError());
        return true;
    }


    return (
        <>
            <h3 className='auth__title'>Register</h3>

            <form 
            className='animate__animated animate__fadeIn animate__faster'
            onSubmit={hRegister}>

                {       msgError &&
                        (<div className="auth__alert-error">
                            {msgError}
                        </div>)
                }
                <input 
                    type="text"
                    placeholder='Name'
                    name="name" 
                    className='auth__input'   
                    autoComplete='off'
                    value={name}
                    onChange={change}
                />
                <input 
                    type="text"
                    placeholder='Email'
                    name="email" 
                    className='auth__input'   
                    autoComplete='off'
                    value={email}
                    onChange={change}
                />
                <input 
                    type="password"
                    placeholder='Password'
                    name="password" 
                    className='auth__input' 
                    autoComplete='off'  
                    value={password}
                    onChange={change}
                />
                <input 
                    type="password"
                    placeholder='Confirm password'
                    name="password2" 
                    className='auth__input' 
                    autoComplete='off' 
                    value={password2} 
                    onChange={change}
                />

                <button
                    type='submt'
                    className='btn btn-primary btn-block mb-5'
                    
                >
                    Register
                </button>

                
               

                <Link 
                    to="/auth/login"
                    className='link'
                >
                    Already registered?
                </Link>

            </form>

        </>
    )
}
