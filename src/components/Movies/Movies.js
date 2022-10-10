import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';

function Movies({foundedCards,isNoMoviesMessage,onSearch, onLike, onDelete, isChecked, renderLoading, onClick, savedMovies, request}) {

   
    
    return(
        <>
            <SearchForm
                onSearch = {onSearch}
                isChecked={isChecked}
                request={request}
            />
            { renderLoading && 
                <div className='preloader__wrap'>
                    <Preloader/>
                </div>}
            {<MoviesCardList
                cardsToRender={foundedCards}
                isNoMoviesMessage={isNoMoviesMessage}
                onLike={onLike}
                onDelete={onDelete}
                onClick={onClick}
                savedMovies={savedMovies}
                // handleShowMorePosts={handleShowMorePosts}
            /> }
        </>
    )
}

export default Movies;

 // const [ moviesCardsList, setMoviesCardsList] = React.useState([]);
   
    
    // function handleShowMorePosts() {        
    // setMoviesCardsList(foundedCards.slice(0, moviesCardsList.length + 2))
    // }