import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isClose, setActive] = useState(true);

    const toggleClass = () => {
        setActive(!isClose);
    };
    
    return (
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
                <FontAwesomeIcon className="header__navigation-icon" icon={faBars} size="3x" onClick={toggleClass} />
        
                {/* Mobile side nav */}
                <div className={`side__nav animate ${isClose ? 'mobile-menu-hide': ''}`}>
                    The side nav
                </div>
                
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
}

export default Header;
