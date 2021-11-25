import { getAuth } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";






export const startNewNote = () => {
    return async(dispatch, getState) =>{

        const {uid} = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }


        const doc = await addDoc(collection(db, `${ uid }`, 'journal/notes'), newNote);
       

        dispatch( newNoteAdd( doc.id, newNote ) );
        dispatch( activeNote( doc.id, newNote ) );


    }
}





export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id, 
        ...note
    }
});

export const newNoteAdd = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id, 
        ...note
    }
});

export const startLoadNotes = (uid) =>{
    return async(dispatch) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );
    }
}



export const setNotes = (payload) => ({
    type: types.notesLoad,
    payload
});



export const startSaveNote = (note) => {
    return async(dispatch, getState) => {
        
        const {uid} = getState().auth;

        if (!note.url) {
            delete note.url
        }

        const noteToSave = {...note}
        delete noteToSave.id

        const noteRef = doc(db, `${uid}/journal/notes/${note.id}`)
        await updateDoc(noteRef, noteToSave);

        dispatch( refreshNote( note.id, noteToSave ) );

        Swal.fire('Saved', note.title, 'success')
    }
}


export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})



export const startUploading = (file) => {
  return async(dispatch, getState) =>{

    const {active} = getState().notes;

    Swal.fire({
        title: 'Cargando...',
        text: 'Porfavor espere...',
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen:() => {
          Swal.showLoading();
        }
    });

    const fileUrl = await fileUpload( file );
    active.url = fileUrl;

    dispatch( startSaveNote( active ) )

    Swal.close();
  }
}


export const startDeleting = (id) => {
  return async(dispatch, getState) => {

    const uid = getState().auth.uid;
    const noteRef = doc(db, `${uid}/journal/notes/${id}`);
    await deleteDoc(noteRef);

    dispatch( deleteNote( id ) );

  }
}


export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id
})



export const noteLogout = () => ({
    type: types.notesLogoutClean,

})