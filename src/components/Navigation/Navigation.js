import { useEffect, useState } from 'react';
import './Navigation.css';
import '../BurgerMenu/BurgerMenu.css';
import Logo from '../Header/Logo/Logo';
import { NavLink } from 'react-router-dom';

function Navigation({isOpen}) {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

    function adaptScreen() {
      setIsMobile(window.innerWidth < 769);
    }
  
    useEffect(() => {
      window.addEventListener('resize', adaptScreen);
      return () => {
        window.removeEventListener('resize', adaptScreen);
      }
    }, []);
  
    return(
        <>
            { !isMobile && (
                <>
                    <nav className='navigation__links'>
                        <Logo/>                    
                        <NavLink to='/movies' className='navigation__movies'>Фильмы</NavLink>
                        <NavLink to='/saved-movies' className='navigation__saved-movies'>Сохранённые фильмы</NavLink>
                    </nav>  
                    <nav className='navigation__profile'>
                        <NavLink to='/profile' className='navigation__account'>Аккаунт</NavLink>
                        <NavLink to='/profile' className='navigation__icon'></NavLink>
                    </nav>
                </>
            )}

            {
                isMobile && (
                    <>
                    <nav className='navigation__links'>
                        <Logo/>
                    </nav>
                    <button className='burger__menu' onClick={isOpen}/>                    
                </>
            )}
        </>       
    )
}

export default Navigation;