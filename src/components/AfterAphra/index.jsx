import React from 'react';
//imports the component ContentBox for use in the AfterAphra component
import ContentBox from '../ContentBox';
//imports the array afterAphraContent, which contains the JSON data to be rendered in the ContentBox component
import afterAphraContent from '../../constants/afteraphra-content';

//The component rendering the page about event after Aphra Behn's life 
const AfterAphra= () => {
  return (
    <div className="innerpage-wrapper">
      <h1 className="page-title">What happened after Aphra?</h1>
         {/*performs the map() array method on each item in the afterAphraContent array, 
      rendering an instance of ContentBox for each one, with props taken from the object in that array item*/}
      {afterAphraContent.map(story => (
            <ContentBox title={story.title} text={story.text} image={story.image} source={story.source} />
          ))}
    </div>
  )
}

//exports the AfterAphra component for use elsewhere
export default AfterAphra;