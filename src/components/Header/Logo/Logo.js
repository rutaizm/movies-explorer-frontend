import React from "react";
import logo from '../../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Logo() {
    return (
        <NavLink to="/" ><img src={logo} className='header__logo' alt='логотип в шапке сайта'/></NavLink>
    )
}

export default Logo;