import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './TodoReducer'

import './styles.css'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'


const init = () => {

    // return[{

    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done:false
    // }];

    return JSON.parse(localStorage.getItem('todos')) || [];
}





export const TodoApp = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    
    // console.log(todos);

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos]);


    const hDelete = (todoId) => {

        console.log(todoId);
        const action = {
            type: 'borrar',
            payload: todoId
        };

        dispatch( action );
    };


    const hToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });

    };


   
    const hAddTodo = (newTodo) => {
        

        dispatch({
            type: 'add',
            payload: newTodo
        });
    };
    
    return (
        <div>
            <h1>ToDo App ({todos.length}) </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} hDelete={hDelete} hToggle={hToggle}/>
                </div>
                <div className="col-5">
                    <TodoAdd 
                        hAdd={hAddTodo}
                    />
                </div>
            </div>



        </div>
    )
}
