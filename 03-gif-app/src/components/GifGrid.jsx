import React from 'react'
import PropTypes from 'prop-types'
import GifItem from './GifItem';
import { useFetch } from '../hooks/useFetch';
// import { getImg } from '../helpers/getImg';

const GifGrid = ({category}) => {
    

    const {data, loading} = useFetch(category);

   

    


    

    
    
    
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className="card-grid">
        
                    {
                        data.map(img=>{
                            return <GifItem
                            key={img.id}
                            {...img}
                            
                            />
                        })
                    }
            
            </div>
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid;
