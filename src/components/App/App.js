
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './App.css';

function App() {

  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

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
        localStorage.setItem('jwt', data.token); 
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
      });      
  }

  function handleCheckToken() {
    const token = localStorage.getItem('jwt');
      if (token) {
        auth.checkToken(token)
            .then((data) => {
                setLoggedIn(true);
                history.push("/movies"); 
                setCurrentUser(data);                  
            })
            .catch((err) => console.log(err)); 
    }
  }

  function handleEditProfile(user) {
    const token = localStorage.getItem('jwt');
    auth.editProfileInfo(user.name, user.email, token)
      .then((res) => {
        setCurrentUser(res)
    })
    .catch((err) => {
        console.log(err)
    })
  }
  
  function openBurgerMenu() {
    setBurgerMenuIsOpen(true);
  }

  function closeBurgerMenu() {
    setBurgerMenuIsOpen(false);
  }
  
  React.useEffect(() => {
    handleCheckToken();
}, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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

          <ProtectedRoute 
            path="/profile"
            loggedIn={loggedIn}
          >
            <Profile
              onEditProfile={handleEditProfile}
            />
          </ProtectedRoute>
          
          <ProtectedRoute 
            path="/movies"
            loggedIn={loggedIn}
          >
            <BurgerMenu
                isOpen={burgerMenuIsOpen}
                isClose={closeBurgerMenu}
            />
            <Header
              isOpen={openBurgerMenu}
            />       
            <Movies/>
            <Footer/> 
          </ProtectedRoute> 

          <ProtectedRoute 
            path="/saved-movies"
            loggedIn={loggedIn}
          >
            <BurgerMenu
                isOpen={burgerMenuIsOpen}
                isClose={closeBurgerMenu}
            />
            <Header 
              isOpen={openBurgerMenu}
            />
            <SavedMovies/>
            <Footer/> 
          </ProtectedRoute>      
        
        </Switch>        
        <Route path="/404">
          <NotFound/>  
        </Route>     
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
