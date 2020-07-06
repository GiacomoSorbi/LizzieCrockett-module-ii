import React from 'react';
//imports the component ContentBox for use in the Life component
import ContentBox from '../ContentBox';
//imports the array lifeContent, which contains the relevant JSON data to be rendered in the ContentBox component
import lifeContent from '../../constants/life-content';

//the component rendering the page about Aphra Behn's life
const Life = () => {
  return (
    <div className="innerpage-wrapper">
      <h1 className="page-title">The life of Aphra Behn</h1>
      {/*performs the map() array method on each item in the lifeContent array, 
      rendering an instance of ContentBox for each one, with props taken from the object in that array item*/}
      {lifeContent.map(story => (
          <ContentBox title={story.title} text={story.text} image={story.image} source={story.source} />
        ))}
    </div>
  );
};

//exports the Life component for use elsewhere
export default Life;