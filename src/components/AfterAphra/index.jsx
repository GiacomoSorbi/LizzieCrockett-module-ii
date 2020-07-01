import React from 'react';
import ContentBox from '../ContentBox';
import afterAphraContent from '../../constants/afteraphra-content';
import './AfterAphra.css';



const AfterAphra= () => {
  return (
    <div className="afteraphra-wrapper">
      {afterAphraContent.map(story => (
            <ContentBox title={story.title} text={story.text} image={story.image} source={story.source} />
          ))}
    </div>
  )
}


export default AfterAphra;