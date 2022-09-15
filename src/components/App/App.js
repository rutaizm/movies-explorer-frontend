
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
import './App.css';

function App() {
  return (
    <div className="app">     
    <Switch>
       <Route exact path="/">
        <Header page="main"/>
        <Main/>
        <Footer/> 
      </Route>
       <Route path="/movies">
        <Header/>
        <Movies/>
        <Footer/> 
      </Route>      
      <Route path="/saved-movies">
        <Header/>
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
      
    </div>
  );
}

export default App;
