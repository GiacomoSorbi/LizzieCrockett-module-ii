import React from 'react';
import './Footer.css';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer"><span id="clio-ident"><span role="img" aria-label="copyright symbol">©️</span> <a href="http://clioscompany.co.uk/">Clio's Company</a> {currentYear}</span>  <span id="cass-ident">Kindly supported by the <a href="https://sirjohncassfoundation.com/"> Sir John Cass Foundation </a> </span> </footer>
    )
}

export default Footer;

