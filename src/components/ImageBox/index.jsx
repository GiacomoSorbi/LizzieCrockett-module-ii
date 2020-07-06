import React from 'react';
import './ImageBox.css'

const ImageBox = ({ image, source }) => {
      /*props passed from each instance of ImageBox,
  so component renders differently based on the data provided.
  Props destructured with {} to make the process less "clunky"*/  
    return (
    <figure className="image-box">
        {/*props above rendered here as meaningful content*/}
        <img src={source} alt={image} />
        <figcaption><i>{image}</i></figcaption>
    </figure>
    )
}

//exports the ImageBox component for use elsewhere
export default ImageBox;