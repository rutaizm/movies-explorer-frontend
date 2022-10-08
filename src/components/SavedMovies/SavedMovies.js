import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({savedMovies, onLike,isChecked, onDelete, onClick, onSearch, isNoMoviesMessage}) {

    
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
                isNoMoviesMessage={isNoMoviesMessage}
            />
        </>
    )
}

export default SavedMovies;