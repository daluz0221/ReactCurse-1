import { useEffect, useState } from "react"
import { getImg } from "../helpers/getImg";


export const useFetch = (category) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect( () =>{
        getImg(category)
        .then(img => {

            setTimeout(() => {
                
                setState({
                    data: img,
                    loading: false
                })
            }, 2000);
        })
    }, [category])


    return state;

} 

