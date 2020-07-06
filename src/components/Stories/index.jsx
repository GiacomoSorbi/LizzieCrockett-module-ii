import React from 'react';
//imports the methods required to create a sub-menu in the component
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
//imports the component VideoContainer for use in the Stories component
import VideoContainer from '../VideoContainer';
import './Stories.css';
//imports the array storiesContent, which contains the JSON data for rendering in the ContentBox component
import storiesContent from '../../constants/stories-content.js';

//The component rendering the page with video stories performed by actors
//routing with fix to ensure successful deployment to Github Pages 
const Stories = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="innerpage-wrapper">
        <h1 className="page-title">Aphra, by her friends</h1>
        <div className="menu">
          <p>These were all real people who lived and worked in London and knew Aphra Behn well. <br />
        Click on the links to hear their stories and memories.</p>
           {/*performs the map() array method on each item in the storiesContent array, rendering a link for each one.
            Path information and text to display is taken from the object data in the array*/}
          {storiesContent.map(story => (
            <span className="story-link">
              <Link to={story.path}>{`${story.name}, ${story.occupation}`}</Link>
            </span>
          ))}

          <Switch>
            {/*performs the map() method on each item in the storiesContent array again, 
             rendering a VideoContainer component for each link created above.
            Route path information and props for VideoContainer are taken from the object data in the array*/}
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

//exports the Stories component for use elsewhere
export default Stories;