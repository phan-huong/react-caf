import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';
import MainFooter from './MainFooter';

const NavFooter = () => {
    return <MainFooter>
        <div>&copy;Oktober 2021 - CAF Team</div>
        <div><a href="https://chris-andfriends.de/">chris and friends GmbH</a></div>
        <Link to="/">Datenschutz & Impressum</Link>
    </MainFooter>
}

export default NavFooter;