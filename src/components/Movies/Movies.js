import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';

function Movies({foundedCards,isNoMoviesMessage,onSearch, onLike, onDelete, isChecked, renderLoading, onClick, savedMovies, request}) {

    const [ moviesCardsList, setMoviesCardsList] = React.useState([]);
    const [showMore, setShowMore] = React.useState(false);
    
    function handleShowMorePosts() {        
        setMoviesCardsList(foundedCards.slice(0, moviesCardsList.length + 2))
    }

    React.useEffect(() =>{
        setMoviesCardsList(foundedCards.slice(0, 2)
        );
    }, [foundedCards])

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
                cardsToRender={moviesCardsList}
                isNoMoviesMessage={isNoMoviesMessage}
                onLike={onLike}
                onDelete={onDelete}
                onClick={onClick}
                savedMovies={savedMovies}
                handleShowMorePosts={handleShowMorePosts}
                showMore={showMore}
            /> }
        </>
    )
}

export default Movies;

