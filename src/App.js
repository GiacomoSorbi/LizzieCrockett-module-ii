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
import AndAfter from './components/AndAfter';
import Footer from './components/Footer';
import './App.css';



const App = () => {

  return (
    <Router>
      <div className="site-wrapper">
        <ul className="site-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/life">Life</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/times">Times</Link>
          </li>
          <li>
            <Link to="/stories">Stories</Link>
          </li>
          <li>
            <Link to="/and-after">...And After</Link>
          </li>
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
          <Route path="/and-after">
            <AndAfter />
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
