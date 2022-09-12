import './Header.css';
import { ReactComponent as Logo }from '../../images/logo.svg';
import EntryButton from './EntryButton/EntryButton';


function Header() {
    return (
      <header className='header'>
        <Logo className='header__logo' alt='логотип в шапке сайта'/>
        <EntryButton/>
      </header>
    );
}

export default Header;