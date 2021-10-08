import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';
import MainHeader from './MainHeader';

const NavHeader = () => {
    return <MainHeader>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Services</Link>
        </ul>
    </MainHeader>
};

export default NavHeader;