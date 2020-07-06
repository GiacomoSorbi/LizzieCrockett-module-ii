import React from 'react';
import './Footer.css';

const Footer = () => {
    //sets a variable to store the current year at all times
    const currentYear = new Date().getFullYear();
    /*renders the footer with accessibility requirements met (role and aria-label attributes set) 
    and the currentYear variable used to render the current year, no matter when the site is viewed */
    return (
        <footer className="footer"><span id="clio-ident"><span role="img" aria-label="copyright symbol">©️</span> <a href="http://clioscompany.co.uk/">Clio's Company</a> {currentYear}</span>  <span id="cass-ident">Kindly supported by the <a href="https://sirjohncassfoundation.com/"> Sir John Cass Foundation </a> </span> </footer>
    )
}

//exports the Footer conponent for use elsewhere
export default Footer;

