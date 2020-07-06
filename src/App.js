import React from "react";
//imports the methods required to route this single-page app to appear as a multi-page site
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
/*imports the components being used for the main nav, and the footer.
These components are visible at all times on the web app*/ 
import HomePage from './components/HomePage';
import Life from './components/Life';
import Work from './components/Work';
import Times from './components/Times';
import Stories from './components/Stories';
import AfterAphra from './components/AfterAphra';
import Footer from './components/Footer';
import './App.css';


//the main body of the site

const App = () => {
  return (
    // routing with fix to ensure successful deployment to Github Pages 
    <Router basename={process.env.PUBLIC_URL}>
      <div className="site-wrapper">
        <ul className="site-nav">
          <span className="reponsive-topline">
            {/*creating navigation menu links*/}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/life">Life</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
          </span>
          <span className="reponsive-bottomline">
            <li>
              <Link to="/times">Times</Link>
            </li>
            <li>
              <Link to="/stories">Stories</Link>
            </li>
            <li>
              <Link to="/after-aphra">After Aphra</Link>
            </li>
          </span>
        </ul>

        <Switch>
          {/*renders the component when path matches the relevant path prop*/}
          <Route path="/life">
            <Life />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/times">
            <Times />
          </Route>
          <Route path="/stories">
            <Stories />
          </Route>
          <Route path="/after-aphra">
            <AfterAphra />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

//exports the App component for use in index.js (which will render the <App> content at the "root" div in index.html using document.getElementByID)
export default App;
