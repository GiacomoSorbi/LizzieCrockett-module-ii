import React from 'react';
//imports the component ContentBox for use in the Work component
import ContentBox from '../ContentBox';
//imports the array workContent, which has the relevant JSON data to be rendered in the ContentBox component
import workContent from '../../constants/work-content';

//The component rendering the page about Aphra Behn's work
const Work = () => {
  return (
      <div className="innerpage-wrapper">
        <h1 className="page-title">Aphra's works</h1>
       {/*performs the map() array method on each item in the lifeContent array, 
      rendering an instance of ContentBox for each one, with props taken from the object in that array item*/}
        {workContent.map(story => (
            <ContentBox title={story.title} text={story.text} image={story.image} source={story.source} />
          ))}
      </div>
    );
}

//exports the Work component for use elsewhere
export default Work;