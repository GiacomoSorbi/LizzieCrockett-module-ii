import React from 'react';
//imports the component ContentBox for use in the Times component
import ContentBox from '../ContentBox';
//imports the array timesContent, which stores the relevant JSON data to be rendered in the ContentBox component
import timesContent from '../../constants/times-content';

//The component rendering the page about Aphra Behn's times
const Times = () => {
  return (
    <div className="innerpage-wrapper">
      <h1 className="page-title">The times Aphra lived in</h1>
      {/*performs the map() array method on each item in the timesContent array, 
      rendering an instance of ContentBox for each one, with props taken from the object in that array item*/}
      {timesContent.map(story => (
            <ContentBox title={story.title} text={story.text} image={story.image} source={story.source} />
          ))}
    </div>
  )
}

//exports the Times component for use elsewhere
export default Times;