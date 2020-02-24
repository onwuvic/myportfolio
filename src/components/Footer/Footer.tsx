import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <div className="footer__social">
            <ul className="footer__social-list">
                <li className="footer__social-item">
                    <Link to={"#"} className="footer__social-link">Twitter</Link>
                </li>
                <li className="footer__social-item">
                    <Link to={"#"} className="footer__social-link">LinkedIn</Link>
                </li>
                <li className="footer__social-item">
                    <Link to={"#"} className="footer__social-link">GitHub</Link>
                </li>
                <li className="footer__social-item">
                    <Link to={"#"} className="footer__social-link">Medium</Link>
                </li>
            </ul>
        </div>
        <div className="footer__copyright">
            <p>© 2020 All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
