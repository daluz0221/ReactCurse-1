import React, {useState} from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifApp = props => {

   

    const [categories, setCategories] = useState(['caitlyn']);

    // const add= () => {
    //     setCategories([...categories, 'bleach'])
    // };

    return (
        <>
            <h2>Gif-App</h2>
            <AddCategory setCategories={setCategories}/>

            <hr />
          

            <ol>
                {
                    categories.map( (category, i) => {
                        return <GifGrid 
                                key={category}
                                category={category} />
                    })
                }
            </ol>
        </>
    )
}

GifApp.propTypes = {

}

export default GifApp
