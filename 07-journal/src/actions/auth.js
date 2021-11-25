
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from "../types/types"
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2'
import { stringify } from '@firebase/util';
import { noteLogout } from './notes';


export const startLogin = (email, password) => {
    return (dispatch) => {

        dispatch( startLoading() );

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then( ({user})=>{
                dispatch( login(user.uid, user.displayName) );
                dispatch( finishLoading() );
            }).catch(err => {
                dispatch( finishLoading() );
                console.log(err);
                if (stringify(err).includes('auth/user-not-found')) {
                    Swal.fire('Error', 'No se encuentra ningún usuario con el correo ingresado', 'error')
                }else if(stringify(err).includes('auth/wrong-password')){
                    
                    Swal.fire('Error', 'La contraseña que ingresó es incorrecta', 'error')
                }
            })
        
    }
}

export const startRegister = ( email, password, name ) => {
    return (dispatch) =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then( async( {user} ) =>{
                await updateProfile(auth.currentUser,{
                    displayName: name
                })
                dispatch( login(user.uid, user.displayName) )
            }).catch(err =>{
                console.log(err);
                
                if (stringify(err).includes('auth/email-already-in-use')) {
                    Swal.fire('Error', 'El correo ingresado ya se encuentra registrado', 'error')
                }
            })
    }
}

export const startGoogleLogin = () =>{
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName))
            })
    }
}


export const login = (uid, displayName) =>{
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
  return async( dispatch ) => {
    const auth = getAuth();
    await signOut(auth);
    dispatch( logout() );
    dispatch( noteLogout() );
  }
}

export const logout = () => ({
  type: types.logout
})