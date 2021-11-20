import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../01-useState/counter.css'

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    console.log(counter);

    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);


    
    const { quote } = !!data && data[0];
    
   

    return (
        <div>
            <h1>Layout Effect</h1>

            
            <figure className="text-end">
                <blockquote className="blockquote">
                    <p>{quote}</p>
                </blockquote>
                
            </figure>

            
           

            <button 
                className="btn btn-primary"
                onClick={increment}    
            >
                Siguiente quote
            </button>


        </div>
    )
}
