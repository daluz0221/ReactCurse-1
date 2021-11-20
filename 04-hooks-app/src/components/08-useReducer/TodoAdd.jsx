import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({hAdd}) => {


    const [{description}, change, reset] = useForm({
        description: ''

    });

    const hsubmit = (e) => {
        e.preventDefault();

        if (description.trim().length < 1) {
            return;
        };

        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done:false
        };

        

        hAdd(newTodo);

        reset();
    };

    return (
        <>
            <h4>Agregar ToDo</h4>
            <hr />
            <form onSubmit={hsubmit}>
                <input type="text"
                    name='description'
                    placeholder='Aprender...'
                    autoComplete='off'
                    className='form-control'
                    value={description}
                    onChange={change}
                />

                <div className="d-grid gap-2 mt-2">
                    <button className="btn btn-outline-primary" type="submit">Agregar</button>
                </div>
            </form>
        </>
    )
}
