import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';
import {getShortMovies, setLike, onSearch, isChecked} from '../../utils/movieFunction';

function Movies({movies,savedMovies, onLike, onDelete, searchValue}) {

  const [foundedCards, setFoundedCards] = React.useState([]);
  const [shortMovies, setShortMovies] =  React.useState([]);  
  const [renderLoading, setRenderLoading] =React.useState(false); 
  const [isNoMoviesMessage, setIsNoMoviesMessage] = React.useState('');
  function getShortMovies() {
        const film = movies.filter(item => item.duration < 40);
        setShortMovies(film);        
    }

    function handleError(arr) {
        arr.length === 0 ? setIsNoMoviesMessage('Ничего не найдено') : setIsNoMoviesMessage('');
    }  

    // const filteredMovies = setLike(movies, savedMovies);
    // const foundedCards = onSearch(searchValue, filteredMovies);

    function setLike(filteredMovies, savedMovies) {
        return filteredMovies.map(film => {
            let isLike = false
            let _id = null
    
            savedMovies.forEach(likedFilm => {
                isLike = film.id === likedFilm.movieId
                if (isLike) _id = likedFilm._id
            })
    
            return { ...film, _id }
        })
    }
    

    function onSearch() {
        if (searchValue.length === 0) {
            setRenderLoading(false);
            return
        } else {          
            const filteredMovies = movies.filter(item => item.nameRU.toLowerCase().includes(searchValue.toLowerCase())); 
            handleError(filteredMovies);  
            setRenderLoading(false);
            
            const arr = setLike(filteredMovies, savedMovies);
            setFoundedCards(arr); 
            console.log(arr)
          }
    }

    function isChecked() {
        if (searchValue.length === 0) {
            setRenderLoading(false);
            return
        } else {        
            getShortMovies();
            const filteredShortMovies = shortMovies.filter(item => item.nameRU.toLowerCase().includes(searchValue.toLowerCase()));
            handleError(filteredShortMovies);
            setRenderLoading(false);
            setFoundedCards(filteredShortMovies);
        }
    }
   
    return(
        <>
            <SearchForm
                searchValue={searchValue}
                onSearch = {onSearch}
                isChecked={isChecked}
                setRenderLoading={setRenderLoading}
            />
            { renderLoading && 
                <div className='preloader__wrap'>
                    <Preloader/>
                </div>}
            {<MoviesCardList
                foundedCards={foundedCards}
                isNoMoviesMessage={isNoMoviesMessage}
                onLike={onLike}
                onDelete={onDelete}      
            /> }
        </>
    )
}

export default Movies;

 // const [searchValue, setSearchValue] = React.useState(''); 
    // const [foundedCards, setFoundedCards] = React.useState([]);
    // const [shortMovies, setShortMovies] =  React.useState([]);  
    // const [renderLoading, setRenderLoading] =React.useState(false); 
    // const [isNoMoviesMessage, setIsNoMoviesMessage] = React.useState('');
   
    // function getShortMovies() {
    //     const film = movies.filter(item => item.duration < 40);
    //     setShortMovies(film);        
    // }

    // function handleError(arr) {
    //     arr.length === 0 ? setIsNoMoviesMessage('Ничего не найдено') : setIsNoMoviesMessage('');
    // }  

    // function onSearch() {
    //     if (searchValue.length === 0) {
    //         setRenderLoading(false);
    //         return
    //     } else {          
    //         const filteredMovies = movies.filter(item => item.nameRU.toLowerCase().includes(searchValue.toLowerCase())); 
    //         handleError(filteredMovies);  
    //         setRenderLoading(false);
    //         setFoundedCards(filteredMovies); 
    //         console.log(filteredMovies)   
    //         return console.log(foundedCards)                 
    //       }
    // }

    // function isChecked() {
    //     if (searchValue.length === 0) {
    //         setRenderLoading(false);
    //         return
    //     } else {        
    //         getShortMovies();
    //         const filteredShortMovies = shortMovies.filter(item => item.nameRU.toLowerCase().includes(searchValue.toLowerCase()));
    //         handleError(filteredShortMovies);
    //         setRenderLoading(false);
    //         setFoundedCards(filteredShortMovies);
    //     }
    // }
