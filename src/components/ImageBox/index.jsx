import React from 'react';
import './ImageBox.css'

const ImageBox = ({ details, source }) => {
    return (
    <figure className="image-box">
        <img src={source} alt={details} />
        <figcaption><i>{details}</i></figcaption>
    </figure>
    )
}

export default ImageBox;