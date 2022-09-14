import './Navigation.css';
import { ReactComponent as Logo }from '../../images/logo.svg';

function Navigation() {
    return(
        <>
            <nav className='navigation__links'>
                <Logo className='header__logo'/>                    
                <div className='navigation__movies'>Фильмы</div>
                <div className='navigation__saved-movies'>Сохранённые фильмы</div>
            </nav>  
            <nav className='navigation__profile'>
                <div className='navigation__account'>Аккаунт</div>
                <div className='navigation__icon'></div>
            </nav>
        </>       
    )
}

export default Navigation;