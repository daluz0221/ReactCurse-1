import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)

    const hPicture = () => {
      document.querySelector('#fileSelector').click();
    }
    
    const hfChange = (e) => {
      const file = e.target.files[0];
      if (file) {
          dispatch( startUploading( file ) );
      }
    }

    const hsave = () => {
      dispatch( startSaveNote(active) )
    }

    return (
        <div className='notes__apbar'>
            <span>28 de agosto 2020</span>

            <input 
                id="fileSelector"
                type="file" 
                name="file" 
                style={{
                    display: 'none'
                }}    
                onChange={hfChange}
            />

            <div>
                <button 
                    className='btn'
                    onClick={hPicture}
                >
                    Imagen
                </button>
                <button 
                    className="btn"
                    onClick={hsave}
                >
                    Guardar
                </button>
            </div>
        </div>
    )
}
