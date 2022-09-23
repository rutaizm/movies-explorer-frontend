import { NavLink } from 'react-router-dom';
import './EntryButton.css';

function EntryButton() {
    return (
        <nav className='entry-button'>
            <NavLink to='/signup' className='entry-button__signup'>Регистрация</NavLink>
            <NavLink to='/signin' className='entry-button__signin'>Войти</NavLink>
        </nav>
    );
}

export default EntryButton;

