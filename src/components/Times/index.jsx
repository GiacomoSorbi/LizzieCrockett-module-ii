import React from 'react';
import ContentBox from '../ContentBox';
import timesContent from '../../constants/times-content';




const Times = () => {
  return (
    <div className="innerpage-wrapper">
      <h1 className="page-title">The times Aphra lived in</h1>
      {timesContent.map(story => (
            <ContentBox title={story.title} text={story.text} image={story.image} source={story.source} />
          ))}
    </div>
  )
}

export default Times;