import React from 'react';
import ContentBox from '../ContentBox';
import timesContent from '../../constants/times-content';
import './Times.css';





const Times = () => {
  return (
    <div className="times-wrapper">
      {timesContent.map(story => (
            <ContentBox title={story.title} text={story.text} image={story.image} source={story.source} />
          ))}
    </div>
  )
}

export default Times;