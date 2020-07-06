import React from 'react';
import './HomePage.css';

//the component rendering the main landing page of the site
const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <div className="intro-text">
        {/*separate sections to be rendered consecutively in animation (see HomePage.css)*/}
        <h1 id="playwright">Playwright</h1>
        <h1 id="poet">Poet</h1>
        <h1 id="spy">Spy</h1>
        <p id="intro">Born in obscurity, Aphra Behn was a celebrity by the end of her extraordinary life. <br />
      She lived and wrote in ways that would not be possible again for centuries, but her memory was almost
obliterated. <br />
Behn and her work are only now being rediscovered.</p>
      </div>
    </div>
  )
}

//exports the HomePage component for use elsewhere
export default HomePage;