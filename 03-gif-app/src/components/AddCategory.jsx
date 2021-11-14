import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
    
    const [input, setInput] = useState('');
    
    const change = (e) => {
        setInput(e.target.value);
    } ;

    const hsub = (e) =>{
        e.preventDefault();

        if (input.trim().length > 1) {
            
            setCategories( cate => [input, ...cate ]);
            setInput('');
        }
            
    };

    return (
        
        <form
            onSubmit={hsub}
        >
            <input
                type="text" 
                value={ input }
                onChange={(e)=>{change(e)}}
            />
            
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
