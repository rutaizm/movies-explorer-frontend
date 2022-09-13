
// import { Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import Login from '../Login';
// import Register from '../Register';
import Header from '../Header/Header';
import Main from '../Main/Main';
// import Movies from '../Movies';
// import SavedMovies from '../SavedMovies';
// import Profile from '../Profile';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header/>
       {/* <Route exact path="/"> */}
        <Main/>
      {/* </Route> */}
      {/* <Route path="/movies">
        <Movies/>
      </Route>
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
      <Footer/> 
    </div>
  );
}

export default App;
