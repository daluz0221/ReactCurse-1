import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import {types} from '../../types/types'



export const LoginScreen = () => {

    const { dispatch} = useContext(AuthContext);

   

    const navigate = useNavigate();

    const hlogin = () => {
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Luis Temporal'
            }
        })
        const local = localStorage.getItem('lastPath') || '/';
          navigate(local,{
              replace: true
          });
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />


            <button
                className="btn btn-outline-primary"
                onClick={hlogin}
            > 
                Login
            </button>

        </div>
    )
}
