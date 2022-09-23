
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile.css/Profile';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NotFound from './NotFound/NotFound';
import './App.css';

function App() {

  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = React.useState(false);

  function openBurgerMenu() {
    setBurgerMenuIsOpen(true);
  }

function burgerMenuIsClosed() {
  setBurgerMenuIsOpen(false);
}

  return (
    <div className="app">     
    <Switch>
       <Route exact path="/">
        <Header 
          page="main"
          isOpen={openBurgerMenu}
        />
        <Main/>       
        <Footer/> 
      </Route>
       <Route path="/movies">
       <BurgerMenu
          isOpen={burgerMenuIsOpen}
          isClose={burgerMenuIsClosed}
        />
        <Header
           isOpen={openBurgerMenu}
        />       
        <Movies/>
        <Footer/> 
      </Route>      
      <Route path="/saved-movies">
      <BurgerMenu
          isOpen={burgerMenuIsOpen}
          isClose={burgerMenuIsClosed}
        />
        <Header 
          isOpen={openBurgerMenu}
        />
        <SavedMovies/>
        <Footer/> 
      </Route>      
      <Route path="/profile">
        <Header/>
        <Profile/>
      </Route>
      </Switch>       
      <Route path="/signin">
        <Login/>
      </Route>     
      <Route path="/signup">
        <Register/>
      </Route> 
      <Route path="/404">
        <NotFound/>  
      </Route>     
    </div>
  );
}

export default App;
