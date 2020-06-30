import React from 'react';
import './ImageBox.css'

const ImageBox = ({ image, source }) => {
    return (
    <figure className="image-box">
        <img src={source} alt={image} />
        <figcaption><i>{image}</i></figcaption>
    </figure>
    )
}

export default ImageBox;