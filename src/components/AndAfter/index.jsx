import React from 'react';
import ContentBox from '../ContentBox';
import andAfterContent from '../../constants/andafter-content';
import './AndAfter.css';



const AndAfter = () => {
  return (
    <div className="andafter-wrapper">
      {andAfterContent.map(story => (
            <ContentBox title={story.title} text={story.text} image={story.image} source={story.source} />
          ))}
    </div>
  )
}


export default AndAfter;