import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './components/HomePage';
import Life from './components/Life';
import Work from './components/Work';
import Times from './components/Times';
import Stories from './components/Stories';
import AfterAphra from './components/AfterAphra';
import Footer from './components/Footer';
import './App.css';



const App = () => {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="site-wrapper">
        <ul className="site-nav">
          <span className="reponsive-topline">
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



export default App;