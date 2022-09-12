import { NavLink } from 'react-router-dom';
import './EntryButton.css';

function EntryButton() {
    return (
        <nav className='entry-button'>
            <div className='entry-button__signup'>Регистрация</div>
            <div className='entry-button__signin'>Войти</div>
        </nav>
    );
}

export default EntryButton;

