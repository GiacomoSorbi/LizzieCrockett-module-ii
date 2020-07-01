import React from 'react';
import ContentBox from '../ContentBox';
import workContent from '../../constants/work-content';




const Work = () => {
  return (
      <div className="innerpage-wrapper">
        <h1 className="page-title">Aphra's works</h1>
        {workContent.map(story => (
            <ContentBox title={story.title} text={story.text} image={story.image} source={story.source} />
          ))}
      </div>
    );
}

export default Work;