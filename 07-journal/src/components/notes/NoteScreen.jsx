import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();


    const {active:note} = useSelector(state => state.notes)
   
    const [values, change, reset] = useForm(note);

    const activeId = useRef(note.id);

    useEffect(() => {
        
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id
            
        }


    }, [note, reset])

    const { body, title, id } = values

    useEffect(() => {
        
        dispatch( activeNote(values.id, {...values}) )
        
    }, [values, dispatch])


    const hDelete = () => {
      dispatch( startDeleting( id ) );
    }




    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    type="text" 
                    name='title'
                    placeholder='Título asombrozo'
                    className='notes__title-input'   
                    autoComplete='off'
                    value={title}
                    onChange={change}
                />

                <textarea 
                    placeholder='¿Qué pasó hoy?'
                    name="body"
                    className='notes__textarea'
                    id="" cols="30" rows="10"
                    value={body}
                    onChange={change}
                
                ></textarea>

                {
                    (note.url) &&
                    <div className="notes_image">
                    <img 
                        // src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg"  
                        src={note.url}
                        alt="imagen" 
                    />
                </div>}
            </div>



                    <button
                        className='btn btn-danger'
                        onClick={hDelete}
                    >
                        Borrar
                    </button>

        </div>
    )
}
