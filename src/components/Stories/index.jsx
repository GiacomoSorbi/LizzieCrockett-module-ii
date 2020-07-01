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
      <div className="innerpage-wrapper">
      <h1 className="page-title">Aphra, by her friends</h1>
      <div className="menu">
        <p>These are all real people who lived and worked in London and knew Aphra Behn well. <br /> 
        Click on the links to hear their stories and memories.</p>
    
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