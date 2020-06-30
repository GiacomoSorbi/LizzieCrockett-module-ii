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
        <h1 className="title">Here are some stories</h1>
    
        {storiesContent.map(story => (
          <span className="story-link">
          <Link to={story.path}>{story.name}</Link>
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