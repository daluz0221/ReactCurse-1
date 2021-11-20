
import {useState, useEffect, useRef} from 'react'


export const useFetch = (url) => {
  

    const montado = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect( () => {

        return () => {
            montado.current = false;
        }

    }, []);


    useEffect(() => {
        
        fetch(url)
        .then( resp => resp.json())
        .then(data => {

           


            if(montado.current){

                setState({
                    loading: false,
                    error: null,
                    data
                });
            } else{
                console.log('no se llamó al setState');
            }
            
           

        });
        
    }, [url])

    return state;
};