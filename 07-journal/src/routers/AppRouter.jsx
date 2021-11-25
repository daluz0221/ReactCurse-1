import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { login } from '../actions/auth';
import { startLoadNotes } from '../actions/notes';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {


    const dispatch = useDispatch();

    const [check, setCheck] = useState(true);

    const [logged, setLogged] = useState(false)

    useEffect(() => {
        
        const auth = getAuth();
        onAuthStateChanged(auth, async(user) => {
            
            if (user?.uid) {
                dispatch( login(user.uid, user.displayName) );
                setLogged(true);

                dispatch( startLoadNotes( user.uid ) );

            }else{
                setLogged(false);
            }

            setCheck(false)
        })
        
    }, [dispatch, setCheck, setLogged])


    if (check) {
        return (
            <div className="preloader"></div>
        )
    }

    
    return (
        <BrowserRouter>
            <Routes>


                <Route path="/auth/*" element={
                    <PublicRoute>
                        <AuthRouter />
                    </PublicRoute>
                } 
                
                />
                {/* <Route path="/auth/*" element={<AuthRouter />} /> */}

                

                <Route path="/*" element={
                    <PrivateRoute state={logged}>
                        <JournalScreen />
                    </PrivateRoute>
                } />
                {/* <Route path="/" element={<JournalScreen />} /> */}
            </Routes>
        </BrowserRouter>
      
    )
}
