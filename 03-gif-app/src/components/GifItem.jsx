import React from 'react'

const GifItem = ({id, title, url}) => {

    // console.log(img);
    return (
        <div className="card animate__animated animate__fadeInUp">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GifItem;
