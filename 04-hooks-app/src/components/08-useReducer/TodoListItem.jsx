import React from 'react'

export const TodoListItem = ({todo, index:i,hDelete, hToggle}) => {


    const {id, desc, done} = todo;

    return (
        <li
            key={id}
            className='list-group-item'
        >
            <p 
                className={`${done && 'complete'}`}
                onClick={() => hToggle(id)}    
            >{i +1}. {desc}</p>
            <button className="btn btn-danger"
                    onClick={() => {hDelete(id)}}
            >
                Borrar 
            </button>
        </li>
    )
}
