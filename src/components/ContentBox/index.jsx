import React from 'react';
import TextBox from '../TextBox';
import ImageBox from '../ImageBox';

const ContentBox = ({title, text, image, source}) => {
    return (
        <div className="content-wrapper">
        <TextBox title={title}  text={text}/>
        <ImageBox image={image} source={source} />
      </div>
    )
}

export default ContentBox;