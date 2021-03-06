import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn, faMediumM, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => (
    <footer className="footer">
        <div className="footer__social">
            <ul className="footer__social-list">
                <li className="footer__social-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/victoronwuzor" className="footer__social-link">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li className="footer__social-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/victoronwuzor" className="footer__social-link">
                     <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>
                <li className="footer__social-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/onwuvic" className="footer__social-link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li className="footer__social-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@victoronwuzor" className="footer__social-link">
                        <FontAwesomeIcon icon={faMediumM} />
                    </a>
                </li>
                <li className="footer__social-item">
                    <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/5954989/okwyvic" className="footer__social-link">
                        <FontAwesomeIcon icon={faStackOverflow} />
                    </a>
                </li>
            </ul>
        </div>
        <div className="footer__copyright">
            <p>© 2020 Design and Develop by <strong>Victor Onwuzor</strong>.</p>
        </div>
    </footer>
);

export default Footer;
