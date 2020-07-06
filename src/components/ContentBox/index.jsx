import React from 'react';
//imports the components TextBox and ImageBox for use in the ContentBox component
import TextBox from '../TextBox';
import ImageBox from '../ImageBox';

const ContentBox = ({title, text, image, source}) => {
  /*these props are passed from each individual instance of ContentBox,
  allowing the component to render differently based on the data provided.
  Props are destructured with {} to make the process less "clunky"*/   
    return (
        <div className="content-wrapper">
        {/*the props gathered above are rendered here in the nested components TextBox and ImageBox*/}
        <TextBox title={title}  text={text}/>
        <ImageBox image={image} source={source} />
      </div>
    )
}

//exports the ContentBox component for use elsewhere
export default ContentBox;