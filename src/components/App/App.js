
import { Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import Login from '../Login';
// import Register from '../Register';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
// import SavedMovies from '../SavedMovies';
// import Profile from '../Profile';
import './App.css';

function App() {
  return (
    <div className="app">      
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
      {/*
      <Route path="/saved-movies">
        <SavedMovies/>
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
      <Route path="/signin">
        <Login/>
      </Route>
      <Route path="/signup">
        <Register/>
      </Route>*/}
      
    </div>
  );
}

export default App;
