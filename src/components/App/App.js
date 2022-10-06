
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
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import './App.css';
import auth from '../../utils/MainApi';
import api from '../../utils/MoviesApi';
import { BASE_URL } from '../../utils/constant';

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
  const [savedMovies, setSavedMovies] =React.useState([]);  

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

  function handleSaveMovie(film) {
    const token = localStorage.getItem('jwt');
    console.log(film)
    console.log(token)
    auth.saveMovie(
      {
        country: film.country || '-',
        director: film.director ,
        duration: film.duration,
        year: film.year,
        description: film.description,
        image: BASE_URL + film.image.url,
        trailerLink: film.trailerLink,
        thumbnail: BASE_URL + film.image.formats.thumbnail.url,
        movieId: film.id,
        nameRU: film.nameRU || '-',
        nameEN: film.nameEN || '-',
      }, token
    )
      .then((newSavedMovie) =>
        setSavedMovies(newSavedMovie),
      )
      .catch((err) => {
        console.log(err)
    })
  }

  function handleDeleteMovie(film) {
    const token = localStorage.getItem('jwt');
    auth.deleteMovie(film._id, token)
      .then(() => {
        setSavedMovies((cards) => cards.filter((item) => item._id !== film._id));
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
    handleShowSavedMovies();    
  }, [loggedIn]);

  // React.useEffect(() => {
  //   if (loggedIn) 
  //   localStorage.setItem('allMovies', JSON.stringify(movies));
  // }, [movies]);

function handleShowSavedMovies(){
  const token = localStorage.getItem('jwt');
  auth.getSavedMovies(token)
      .then((res) => {
       setSavedMovies(res)
      })
        .catch((err) => {
          console.log(err)
      })
}     

  React.useEffect(() => { 
    if (movies.length === 0) {
    api.getMovies()
    .then((films) => {
        localStorage.setItem('allMovies', JSON.stringify(films));
        setMovies(films);
     })
    .catch((err) => {
        console.log(err)
    });}
  }, []);

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
              onLike={handleSaveMovie}
              savedMovies={savedMovies}
              onDelete={handleDeleteMovie}
              // setSearchValue= {setSearchValue}
              // searchValue={searchValue}
              // onSearch={onSearch} 
              // isChecked={isChecked} 
              // setRenderLoading={setRenderLoading} 
              // renderLoading={renderLoading} 
              // foundedCards={foundedCards}
              // isNoMoviesMessage={isNoMoviesMessage}
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
            <SavedMovies
              savedMovies={savedMovies}
              onLike={handleSaveMovie}
              onDelete={handleDeleteMovie}
    //           setSearchValue= {setSearchValue}
    //           searchValue={searchValue}
    //           onSearch={onSearch} 
    // isChecked={isChecked} 
    // setRenderLoading={setRenderLoading} 
    // renderLoading={renderLoading} 
    // foundedCards={foundedCards}
    // isNoMoviesMessage={isNoMoviesMessage}
            />
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
