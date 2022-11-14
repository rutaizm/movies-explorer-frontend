import './Header.css';
import EntryButton from './EntryButton/EntryButton';
import Navigation from '../Navigation/Navigation';
import Logo from './Logo/Logo';

function Header({page, isOpen, loggedIn}) {

  if(page) {
    return (
      <>
      { !loggedIn &&
        <header className='header header__pink'>         
          <Logo/>        
          <EntryButton/>
        </header>
      }
      {
        loggedIn &&
          <header className='header header__pink'>     
            <Navigation/>
          </header>
      } 
      </>
      );
    }

      return (
            <header className='header '>
                <Navigation
                  isOpen={isOpen}
                />
              </header>
    );
  }


export default Header;