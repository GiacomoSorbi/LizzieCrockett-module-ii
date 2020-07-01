import React from 'react';
import {
  BrowserRouter as Router, Link, Switch, Route
} from "react-router-dom";
import VideoContainer from '../VideoContainer';
import './Stories.css';
import storiesContent from '../../constants/stories-content.js';

const Stories = () => {


  return (
    <Router>
      <div className="stories-wrapper">
      <div className="menu">
        <h1 className="title">Memories of Aphra</h1>
        <p>These are all real people who lived and worked in London and knew Aphra Behn well. <br /> 
        Click on the links to hear their stories.</p>
    
        {storiesContent.map(story => (
          <span className="story-link">
          <Link to={story.path}>{`${story.name}, ${story.occupation}`}</Link>
        </span>
        ))}
        
        <Switch>
          {storiesContent.map(story => (
            <Route path={story.path}>
            <VideoContainer character={story} />
          </Route>
          ))}
        </Switch>
        </div>
      </div>
    </Router>
  );
}


export default Stories;