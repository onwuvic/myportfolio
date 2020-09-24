import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
            {/* <i className="header__navigation-icon">ICON</i> */}
            <FontAwesomeIcon className="header__navigation-icon" icon={faBars} size="3x" />
            {/* <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label className="navigation__button">
                <span className="navigation__icon"></span>
            </label>
            <div className="navigation__background"></div> */}
            <nav className="header__navigation-nav">
                <ul className="header__navigation-list">
                    <li className="header__navigation-item">
                        <NavLink exact to="/" className="header__navigation-link">About Me</NavLink>
                    </li>
                    <li className="header__navigation-item">
                        <NavLink to="/resume" className="header__navigation-link">Resume</NavLink>
                    </li>
                    <li className="header__navigation-item">
                        <NavLink to={"/blog"} className="header__navigation-link">Blog</NavLink>
                    </li>
                    <li className="header__navigation-item">
                        <NavLink to={"/contact"} className="header__navigation-link">Contact</NavLink>
                    </li>
                </ul>
            </nav>        
        </div>
    </header>
);

export default Header;
