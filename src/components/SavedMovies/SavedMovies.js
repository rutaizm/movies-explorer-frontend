import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {filterMovies} from '../../utils/movieFunction';

function SavedMovies({handleShowSavedMovies, setRenderLoading, requestSavesMovies, savedMovies, onLike,isChecked, onDelete, onClick, isNoMoviesMessage, setIsNoMoviesMessage}) {

    const [foundedSavedCards, setFoundedSavedCards] = React.useState(savedMovies);

    function handleError(arr) {
        if (arr.length === 0) {
          arr.length === 0 ? setIsNoMoviesMessage('Ничего не найдено') : setIsNoMoviesMessage('');
          setFoundedSavedCards([]);
        }
    }
       
  function handleSearchSavedMovies(request) {
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
  
  React.useEffect(() =>{
    handleShowSavedMovies();
    setIsNoMoviesMessage('');
  }, [foundedSavedCards])
    
    return(
        <>
            <SearchForm             
                 onSearch = {handleSearchSavedMovies}
                 isChecked={isChecked}
                 request={requestSavesMovies}
            />
            <MoviesCardList
                cardsToRender={foundedSavedCards}
                onLike={onLike}
                onDelete={onDelete} 
                onClick={onClick}
                isNoMoviesMessage={isNoMoviesMessage}
                foundedSavedCards={foundedSavedCards}
                setRenderLoading={setRenderLoading}
            />
        </>
    )
}

export default SavedMovies;