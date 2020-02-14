import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="header__logo-box">
            <Link to={"#"}>
                <div className="header__logo-symbol">V</div>
                <div className="header__logo-text">
                    Victor <span>Onwuzor</span>
                </div>
            </Link>
        </div>

        <div className="header__navigation">
            {/* <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label className="navigation__button">
                <span className="navigation__icon"></span>
            </label>
            <div className="navigation__background"></div> */}
            <nav className="header__navigation-nav">
                <ul className="header__navigation-list">
                    <li className="header__navigation-item">
                        <a href="#" className="header__navigation-link">About Me</a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="#" className="header__navigation-link">Resume</a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="#" className="header__navigation-link">Portfolio</a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="#" className="header__navigation-link">Blog</a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="#" className="header__navigation-link">Contact</a>
                    </li>
                </ul>
            </nav>        
        </div>
    </header>
);

export default Header;
