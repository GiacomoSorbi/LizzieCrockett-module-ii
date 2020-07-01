import React from 'react';
import ContentBox from '../ContentBox';
import lifeContent from '../../constants/life-content';

const Life = () => {
  return (
    <div className="innerpage-wrapper">
      <h1 className="page-title">The life of Aphra Behn</h1>
      {lifeContent.map(story => (
          <ContentBox title={story.title} text={story.text} image={story.image} source={story.source} />
        ))}
    </div>
  );
};


export default Life;