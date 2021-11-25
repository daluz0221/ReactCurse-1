import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLogin } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'


export const LoginScreen = () => {


    const dispatch = useDispatch();
    const {ui} = useSelector(state => state);

    const { loading } = ui;

    const [ values, change] = useForm({
        email: 'luisfe23@hotmail.com',
        password: '123456'
    
    })

    const {email, password} = values;


    const hlogin = (e) => {
      e.preventDefault();
      dispatch( startLogin(email,password) );
    }

    const hgologin = () => {
      dispatch( startGoogleLogin());
    }

    return (
        <>
            <h3 className='auth__title'>Login</h3>

            <form 
            className='animate__animated animate__fadeIn animate__faster'
            onSubmit={hlogin}>
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

                <button
                    type='submit'
                    className='btn btn-primary btn-block'
                    disabled={loading}
                >
                    Login
                </button>

                
                <div className='auth__social-net'>
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick={hgologin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className='link'
                >
                    Create new account
                </Link>

            </form>

        </>
    )
}
