
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import auth from '../../utils/MainApi';
import './App.css';

function App() {

  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = React.useState(false);

  function handleRegistration(data) {
    auth.register(data.name, data.password, data.email)
        .then((data) => {
            setLoggedIn(true);
            history.push("/movies");
        })
        .catch((err) => {
            console.log(err);
         });               
}

function handleLogin(data){
    auth.login(data.password, data.email)
        .then((data) =>{
            setLoggedIn(true);
            history.push("/movies");
        })
        .catch((err) => {
            console.log(err);
        });      
}
  
  function openBurgerMenu() {
    setBurgerMenuIsOpen(true);
  }

  function closeBurgerMenu() {
    setBurgerMenuIsOpen(false);
  }

  return (
    <div className="app">       
      <Switch>
        <Route exact path="/">
          <Header 
            page="main"
          />
          <Main/>
          <Footer/>   
        </Route>   
      
        <Route path="/signup">
          <Register
            onRegistration = {handleRegistration}
          />
        </Route> 

        <Route path="/signin">
          <Login
            onLogin = {handleLogin}
          />
        </Route>

        <Route path="/profile">
          <Profile/>
        </Route>
        
        <Route path="/movies">
          <BurgerMenu
              isOpen={burgerMenuIsOpen}
              isClose={closeBurgerMenu}
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
              isClose={closeBurgerMenu}
          />
          <Header 
            isOpen={openBurgerMenu}
          />
          <SavedMovies/>
          <Footer/> 
        </Route>      
      
      </Switch>        
      <Route path="/404">
        <NotFound/>  
      </Route>     
    </div>
  );
}

export default App;
