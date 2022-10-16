import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {filterMovies} from '../../utils/movieFunction';

function SavedMovies({setRenderLoading, requestSavesMovies, savedMovies, isChecked, onDelete, onClick, isNoMoviesMessage, setIsNoMoviesMessage}) {

    const [foundedSavedCards, setFoundedSavedCards] = React.useState([]);
    const [displayedMovies, setDisplayedMovies] = React.useState([]);
    const [searchActive, setSearchActive] = React.useState(false);

    function handleError(arr) {
        if (arr.length === 0) {
          arr.length === 0 ? setIsNoMoviesMessage('Ничего не найдено') : setIsNoMoviesMessage('');
          setFoundedSavedCards([]);
        }
    }
       
  function handleSearchSavedMovies(request) {
    setSearchActive(true)
    setIsNoMoviesMessage('')
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
      setFoundedSavedCards(filteredSavedMovies);
      setRenderLoading(false); 
      }
  } 

  React.useEffect(() => {
    if (!searchActive) {
      setDisplayedMovies(savedMovies);
    }
    if (searchActive){
      setDisplayedMovies(foundedSavedCards)
    }
  }, [savedMovies, foundedSavedCards])

    return(
        <>
            <SearchForm             
                 onSearch = {handleSearchSavedMovies}
                 isChecked={isChecked}
                 request={requestSavesMovies}
            />
            <MoviesCardList
                cardsToRender={displayedMovies}
                onDelete={onDelete} 
                onClick={onClick}
                isNoMoviesMessage={isNoMoviesMessage}
                setRenderLoading={setRenderLoading}
            />
        </>
    )
}

export default SavedMovies;