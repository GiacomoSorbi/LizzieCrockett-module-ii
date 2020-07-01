import React from 'react';
import ContentBox from '../ContentBox';
import afterAphraContent from '../../constants/afteraphra-content';



const AfterAphra= () => {
  return (
    <div className="innerpage-wrapper">
      <h1 className="page-title">What happened after Aphra?</h1>
      {afterAphraContent.map(story => (
            <ContentBox title={story.title} text={story.text} image={story.image} source={story.source} />
          ))}
    </div>
  )
}


export default AfterAphra;