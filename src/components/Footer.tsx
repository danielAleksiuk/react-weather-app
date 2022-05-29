import React from 'react';
import '../scss/Footer.scss';
import * as CONSTANTS from '../consts';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <h1 className="footer__title"> 
                Developed by 
                <a href={"mailto:" + CONSTANTS.PERSONAL_EMAIL}> Daniel Aleksiuk</a>
            </h1>
        </footer>
    )
}

export default Footer;
