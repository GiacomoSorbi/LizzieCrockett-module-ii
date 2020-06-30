import React from 'react';
import ContentBox from '../ContentBox';
import workContent from '../../constants/work-content';
import './Work.css';




const Work = () => {
  return (
      <div className="work-wrapper">
        {workContent.map(story => (
            <ContentBox title={story.title} text={story.text} image={story.image} source={story.source} />
          ))}
      </div>
    );
}

export default Work;