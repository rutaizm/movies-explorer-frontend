
import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
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
import InfoTooltip from '../InfoToolTip/InfoToolTip';
import './App.css';
import auth from '../../utils/MainApi';
import api from '../../utils/MoviesApi';
import { BASE_URL } from '../../utils/constant';
import {getShortMovies, setLike, filterMovies} from '../../utils/movieFunction';

function App() {

  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(undefined);
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const [movies, setMovies] = React.useState(localStorage.getItem('allMovies') ?
      JSON.parse(localStorage.getItem('allMovies')) : []);
  const [savedMovies, setSavedMovies] =React.useState(
      localStorage.getItem('savedMovies') ?
      JSON.parse(localStorage.getItem('savedMovies')) :
      []);

  const [foundedCards, setFoundedCards] = React.useState([]);
  const [shortMovies, setShortMovies]= React.useState([]);
 
  const [isNoMoviesMessage, setIsNoMoviesMessage] = React.useState('');
  const [renderLoading, setRenderLoading] =React.useState(false); 
  const [toolTip, setToolTip] = React.useState(true); 
  const [message, setMessage] = React.useState('');

  function handleRegistration(data) {    
    auth.register(data.name, data.password, data.email)
      .then((data) => {
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        openToolTip();
        setMessage(err);
      });               
  }

  function handleLogin(data){
    auth.login(data.password, data.email)
      .then((data) =>{
        setLoggedIn(true);
        localStorage.setItem('jwt', data.token); 
        history.push("/movies");
        openToolTip();
      })
      .catch((err) => {
        openToolTip();
        setMessage(err);
      });      
  }

  
  function handleEditProfile(user) {
    const token = localStorage.getItem('jwt');
    auth.editProfileInfo(user.name, user.email, token)
      .then((res) => {
        setCurrentUser(res)
    })
    .catch((err) => {
      openToolTip();
      setMessage(err);
    })
  }

  function handleLogout() {
    setLoggedIn(false);
    localStorage.clear();
    history.push("/");
  }

  function handleSaveMovie(film) {
    const isLiked = savedMovies.some(i => i.movieId === film.id);
    const savedCard = savedMovies.find(i => i.movieId === film.id);
    const token = localStorage.getItem('jwt');
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
      }, token, isLiked, savedCard?._id
    )
        .then((newSavedMovie) => {
          if (isLiked) {
            setSavedMovies((state) => state.filter((m) => m.movieId !== film.id))
          }
          if (JSON.parse(localStorage.getItem('savedMovies')) > 0) {
            const savedFilm = JSON.parse(localStorage.getItem('savedMovies'));
            const filterSavedFilm = savedFilm.filter((m) => m.movieId !== film.movieId);
            setSavedMovies(filterSavedFilm)
            localStorage.setItem('savedMovies', JSON.stringify(filterSavedFilm));
          } else {
            setSavedMovies([...savedMovies, newSavedMovie])
          }
        })
        .catch((err) => {
          openToolTip();
          setMessage(err);
        })
  }

  function handleDeleteMovie(film) {
    const token = localStorage.getItem('jwt');
    const savedCard = savedMovies.find(i => i.movieId === film.id);
    auth.deleteMovie(film._id, token, savedCard?._id,)
        .then(() => {
          setSavedMovies((cards) => cards.filter((item) => item._id !== film._id));
          handleShowSavedMovies()
        })
        .catch((err) => {
          openToolTip();
          setMessage(err);
        })
  }
    
  function openBurgerMenu() {
    setBurgerMenuIsOpen(true);
  }

  function closeBurgerMenu() {
    setBurgerMenuIsOpen(false);
  }

  function openToolTip() {
    setToolTip(true);
    setTimeout(() => {setToolTip(false)}, 3000);
  }

  function closeToolTip() {
    setToolTip(false);
  }

  function handleError(arr) {
    if (arr.length === 0) {
      arr.length === 0 ? setIsNoMoviesMessage('Ничего не найдено') : setIsNoMoviesMessage('');
    }
}

  function handleSearch(request) {
      setIsNoMoviesMessage('')
      setRenderLoading(true)
        if (request.length === 0) { 
          setRenderLoading(false);           
          return
        } 
        if (JSON.parse(localStorage.getItem('isChecked')) === null) {
            const filteredMovies = filterMovies(request, movies); 
            handleError(filteredMovies);             
            const arr = setLike(filteredMovies, savedMovies);
            setFoundedCards(arr);
            setRenderLoading(false);            
        } 
        if (JSON.parse(localStorage.getItem('isChecked'))) {        
            const allShortMovies = getShortMovies(movies);
            const filteredShortMovies = filterMovies(request, allShortMovies); 
            handleError(filteredShortMovies); 
            const arr = setLike(filteredShortMovies, savedMovies);
            setFoundedCards(arr);
            setRenderLoading(false); 
        }
  } 

  function handleSearchSavedMovies(request) {
    setRenderLoading(true)
    if (request.length === 0) { 
      setRenderLoading(false);           
      return
    } if (savedMovies === null) {
        handleError(savedMovies);             
        setRenderLoading(false);            
    } else  {       
      const filteredSavedMovies = filterMovies(request, savedMovies); 
      handleError(filteredSavedMovies); 
      setSavedMovies(filteredSavedMovies);
      setRenderLoading(false); 
      }
  } 

  function handleShowSavedMovies() {
    const token = localStorage.getItem('jwt');
    auth.getSavedMovies(token)
        .then((res) => {
          setSavedMovies(res)
        })
        .catch((err) => {
          console.log(err)
        })
  }     

  function handleCheckToken() {
    const token = localStorage.getItem('jwt');
      if (token) {
        auth.checkToken(token)
            .then((data) => {
                setLoggedIn(true);           
                setCurrentUser(data); 
            }) 
            .catch((err) => console.log(err)); 
    }
  }

React.useEffect(() => {
  if (localStorage.getItem('jwt')) {
    handleCheckToken();
    console.log(loggedIn)
  } else {
    setLoggedIn(false)
  }
}, [loggedIn]);

React.useEffect(() => {
  setSavedMovies(savedMovies);
  if (loggedIn) {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }
  }, [savedMovies]);

  React.useEffect(() => { 
    setMovies(movies)
    if (loggedIn && JSON.parse(localStorage.getItem('allMovies')) === null) {
    api.getMovies()
        .then((films) => {
          localStorage.setItem('allMovies', JSON.stringify(films));
          setMovies(films);
        })
        .catch((err) => {
            console.log(err)
        });
    }
  }, [loggedIn]);

  if (loggedIn === undefined) return null;

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">       
        <Switch>  

          <ProtectedRoute 
            exact path="/movies"
            loggedIn={loggedIn}>
            <BurgerMenu
                isOpen={burgerMenuIsOpen}
                isClose={closeBurgerMenu}/>
            <Header
              isOpen={openBurgerMenu}/>  
            <Movies
              foundedCards={foundedCards}
              onLike={handleSaveMovie}
              savedMovies={savedMovies}
              onDelete={handleDeleteMovie}
              onSearch={handleSearch} 
              renderLoading={renderLoading} 
              isNoMoviesMessage={isNoMoviesMessage}/>
            <Footer/> 
          </ProtectedRoute> 

          <ProtectedRoute 
            exact path="/saved-movies"
            loggedIn={loggedIn}>
            <BurgerMenu
                isOpen={burgerMenuIsOpen}
                isClose={closeBurgerMenu}/>
            <Header 
              isOpen={openBurgerMenu}
            />
            <SavedMovies
              savedMovies={savedMovies}
              onLike={handleSaveMovie}
              onDelete={handleDeleteMovie}
              onSearch={handleSearchSavedMovies}           
              renderLoading={renderLoading} 
              // isNoMoviesMessage={isNoMoviesMessage}
            />
            <Footer/> 
          </ProtectedRoute>


          <ProtectedRoute 
            exact path="/profile"
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

          <Route exact path="/">
            <Header 
              page="main"
            />
            <Main/>
            <Footer/>   
          </Route>   
        
          <Route exact path="/signup">
            <Register
              onRegistration = {handleRegistration}
            />
          </Route> 

          <Route exact path="/signin">
            <Login
              onLogin = {handleLogin}
            />
          </Route>
              
          <Route path="*" component={NotFound}/>

        </Switch> 

        <InfoTooltip
          isOpen={toolTip}
          onClose={closeToolTip}
          message={message}
        /> 
      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;
