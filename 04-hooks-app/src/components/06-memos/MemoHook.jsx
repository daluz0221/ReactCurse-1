import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPeado';
import { useCounter } from '../../hooks/useCounter';
import '../01-useState/counter.css'


export const MemoHook = () => {


    const  {counter, increment} = useCounter(5000);

    const [show, setShow] = useState(true);

    

    // Aquí el useMemo se graba el resultado de un función y solo cambia si el segundo parámetro cambia, aqui por ejemplo
    // solo ejecuta nuevamente el procesoPesado si el counter cambia, en caso de q no simplemente devuelve el resultado ya
    // memorizado, la función se fue para los helpers
    const memoProceso = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p>{ memoProceso }</p>

            <button
                className='btn btn-primary'
                onClick={increment}
            > 
                +1
            </button>

            <button
                className='btn btn-outline-primary ms-3'
                onClick={() => {
                    setShow( !show );
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
