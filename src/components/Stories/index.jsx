import React from 'react';
import {
  BrowserRouter as Router, Link, Switch, Route
} from "react-router-dom";
import VideoContainer from '../VideoContainer';
import './Stories.css';
import storiesList from '../../constants/storieslist.js';

const Stories = () => {


  return (
    <Router>
      <div className="stories-wrapper">
      <div className="menu">
        <h1 className="title">Here are some stories</h1>
    
        {storiesList.map(story => (
          <span className="story-link">
          <Link to={story.path}>{story.name}</Link>
        </span>
        ))}
        
        <Switch>
          {storiesList.map(story => (
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