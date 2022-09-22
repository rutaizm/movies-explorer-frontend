import './Header.css';
import { ReactComponent as Logo }from '../../images/logo.svg';
import EntryButton from './EntryButton/EntryButton';
import Navigation from '../Navigation/Navigation';


function Header({page, isOpen}) {

  if(page) {
    return (
        <header className='header header__pink'>
          <Logo className='header__logo' alt='логотип в шапке сайта'/>
          <EntryButton/>
        </header>
      );
    }
      return (
        <header className='header'>
          <Navigation
            isOpen={isOpen}
          />
        </header>      
    );
}

export default Header;