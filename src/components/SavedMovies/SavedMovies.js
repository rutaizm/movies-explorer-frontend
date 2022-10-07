import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({savedMovies, onLike,isChecked, onDelete, onClick, onSearch}) {

    const [isNoMoviesMessage, setIsNoMoviesMessage] = React.useState('');
  

    function handleError(arr) {
        arr.length === 0 ? setIsNoMoviesMessage('Ничего не найдено') : setIsNoMoviesMessage('');
    }  
    return(
        <>
            <SearchForm             
                 onSearch = {onSearch}
                 isChecked={isChecked}
            />
            <MoviesCardList
                cardsToRender={savedMovies}
                onLike={onLike}
                onDelete={onDelete} 
                onClick={onClick}
            />
        </>
    )
}

export default SavedMovies;