
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile.css/Profile';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import NotFound from './NotFound/NotFound';
import auth from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './App.css';
import api from '../../utils/MoviesApi';

function App() {

  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState(
    localStorage.getItem('allMovies') ?
    JSON.parse(localStorage.getItem('allMovies')) :
    []
  );

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

  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    history.push("/");
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

  React.useEffect(() => {
    if (loggedIn) 
    localStorage.setItem('allMovies', JSON.stringify(movies));
  }, [movies]);

  React.useEffect(() => { 
    if (movies.length === 0) {
    api.getMovies()
    .then((films) => {
        localStorage.setItem('allMovies', films);
        setMovies(films);
     })
    .catch((err) => {
        console.log(err)
    });}
  }, []);

    // function handleSearch() {
    //   api.getMovies()
    //     .then((res) => {
    //       const [movies] = res;
    //       setMovies(movies);
    //   })
    //     .catch((err) => {
    //         console.log(err)
    //   });
    //   console.log(movies);      
    // }

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
            <BurgerMenu
              isOpen={burgerMenuIsOpen}
              isClose={closeBurgerMenu}
            />
            <Header
              isOpen={openBurgerMenu}
            />  
            <Profile
              onEditProfile={handleEditProfile}
              onLogout={handleLogout}
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
            <Movies
              movies={movies}
            />
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
