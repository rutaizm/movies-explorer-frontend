import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';

function Movies({foundedCards,onSearch, onLike, onDelete, isChecked, renderLoading, onClick, savedMovies}) {


  const [isNoMoviesMessage, setIsNoMoviesMessage] = React.useState('');
  

    function handleError(arr) {
        arr.length === 0 ? setIsNoMoviesMessage('Ничего не найдено') : setIsNoMoviesMessage('');
    }  

      
    // function isChecked() {
    //     if (request.length === 0) {
    //         setRenderLoading(false);
    //         return
    //     } else {        
    //         getShortMovies();
    //         const filteredShortMovies = shortMovies.filter(item => item.nameRU.toLowerCase().includes(request.toLowerCase()));
    //         handleError(filteredShortMovies);
    //         setRenderLoading(false);
    //         setFoundedCards(filteredShortMovies);
    //     }
    // }
   
    return(
        <>
            <SearchForm
                onSearch = {onSearch}
                isChecked={isChecked}
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
                onClick={onClick}
                savedMovies={savedMovies}
            /> }
        </>
    )
}

export default Movies;