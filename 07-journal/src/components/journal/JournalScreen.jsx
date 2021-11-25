import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { Nothing } from './Nothing'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {

    const {active} = useSelector(state => state.notes)


    return (
        
        <div className='journal__main-content animate__animated animate__fadeIn animate__faster'>
            <Sidebar />

            <main style={{width: '100%'}}>
                
                {
                    ( active ) 
                    ? 
                    <NoteScreen />
                    :
                    <Nothing  />
                }
            </main>
        </div>
    )
}
