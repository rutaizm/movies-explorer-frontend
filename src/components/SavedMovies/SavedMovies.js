import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({savedMovies, onLike, onDelete}) {

    const [searchValue, setSearchValue] = React.useState(''); 
  const [foundedCards, setFoundedCards] = React.useState([]);
  const [shortMovies, setShortMovies] =  React.useState([]);  
  const [renderLoading, setRenderLoading] =React.useState(false); 
  const [isNoMoviesMessage, setIsNoMoviesMessage] = React.useState('');
  function getShortMovies() {
        const film = savedMovies.filter(item => item.duration < 40);
        setShortMovies(film);        
    }

    function handleError(arr) {
        arr.length === 0 ? setIsNoMoviesMessage('Ничего не найдено') : setIsNoMoviesMessage('');
    }  

    function onSearch() {
        if (searchValue.length === 0) {
            setRenderLoading(false);
            return
        } else {          
            const filteredMovies = savedMovies.filter(item => item.nameRU.toLowerCase().includes(searchValue.toLowerCase())); 
            handleError(filteredMovies);  
            setRenderLoading(false);
            setFoundedCards(filteredMovies); 
            console.log(filteredMovies)   
            return console.log(foundedCards)                 
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
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                onSearch = {onSearch}
                isChecked={isChecked}
                setRenderLoading={setRenderLoading}
            />
            <MoviesCardList
                foundedCards={savedMovies}
                onLike={onLike}
                onDelete={onDelete} 
                
            />
        </>
    )
}

export default SavedMovies;