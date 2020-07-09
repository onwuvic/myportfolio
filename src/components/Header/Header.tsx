import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="header__logo-box">
            <Link to={"/"}>
                <div className="header__logo-symbol">V</div>
                <div className="header__logo-text">
                    Victor <span>Onwuzor</span>
                </div>
            </Link>
        </div>

        <div className="header__navigation">
            <i className="header__navigation-icon">ICON</i>
            {/* <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label className="navigation__button">
                <span className="navigation__icon"></span>
            </label>
            <div className="navigation__background"></div> */}
            <nav className="header__navigation-nav">
                <ul className="header__navigation-list">
                    <li className="header__navigation-item">
                        <Link to="/" className="header__navigation-link">About Me</Link>
                    </li>
                    <li className="header__navigation-item">
                        <Link to="/resume" className="header__navigation-link">Resume</Link>
                    </li>
                    <li className="header__navigation-item">
                        <Link to="/portfolio" className="header__navigation-link">Portfolio</Link>
                    </li>
                    <li className="header__navigation-item">
                        <Link to={"/blog"} className="header__navigation-link">Blog</Link>
                    </li>
                    <li className="header__navigation-item">
                        <Link to={"/contact"} className="header__navigation-link">Contact</Link>
                    </li>
                </ul>
            </nav>        
        </div>
    </header>
);

export default Header;
