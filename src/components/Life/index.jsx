import React from 'react';
import ContentBox from '../ContentBox';
import lifeContent from '../../constants/life-content';
import './Life.css';

const Life = () => {
  return (
    <div className="life-wrapper">
      {lifeContent.map(story => (
          <ContentBox title={story.title} text={story.text} image={story.image} source={story.source} />
        ))}
    </div>
  );
};


export default Life;