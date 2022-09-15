import './Navigation.css';
import { ReactComponent as Logo }from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return(
        <>
            <nav className='navigation__links'>
                <Logo className='header__logo'/>                    
                <NavLink to='/movies' className='navigation__movies'>Фильмы</NavLink>
                <NavLink to='/saved-movies' className='navigation__saved-movies'>Сохранённые фильмы</NavLink>
            </nav>  
            <nav className='navigation__profile'>
                <NavLink to='/profile' className='navigation__account'>Аккаунт</NavLink>
                <NavLink to='/profile' className='navigation__icon'></NavLink>
            </nav>
        </>       
    )
}

export default Navigation;