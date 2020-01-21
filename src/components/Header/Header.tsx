import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="header__logo-box">
            <Link to={"#"}>
                <div className="header__logo-symbol">V</div>
                <div className="header__logo-text">Victor <span>Onwuzor</span></div>
            </Link>
        </div>
    </header>
);

export default Header;
