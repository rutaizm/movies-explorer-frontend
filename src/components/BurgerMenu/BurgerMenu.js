import { NavLink } from "react-router-dom";
import './BurgerMenu.css'

function BurgerMenu({isOpen, isClose}) {
    return(
        <section className={`burger__wrap ${isOpen && 'burger__wrap_active'}`}>
            <div className="burger__container">
            
            <nav className="burger__links">
            <button type="button" className="burger__close-button" onClick={isClose}/>
                <NavLink className='burger__link' to='/'>Главная</NavLink>
                <NavLink className='burger__link' to='/movies'>Фильмы</NavLink>
                <NavLink className='burger__link' to='/saved-movies'>Сохраненные&nbsp;фильмы</NavLink>
            </nav>
            <nav className="burger__profile">
                <NavLink className='burger__account' to='/profile'>Аккаунт</NavLink>
                <NavLink className='burger__profile-button' to='/profile'></NavLink>
            </nav>
            </div>
        </section>
    )
}

export default BurgerMenu;