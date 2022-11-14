import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';
import { useScreenSize } from '../../hooks/useScreenSize';

function Movies({foundedCards,isNoMoviesMessage, onSearch, onLike, onDelete, isChecked, renderLoading, savedMovies, request}) {

    const screenSize = useScreenSize();

    const [ moviesCardsList, setMoviesCardsList] = React.useState([]);
    const [showMore, setShowMore] = React.useState(undefined);
    const [showOnClick, setShowOnClick] = React.useState(null);
    const [showOnStart, setShowOnStart]= React.useState(null);
    
React.useEffect(() => {
        if (screenSize > 1280) {
            setShowOnClick(3);
            setShowOnStart(3);
        } else if (screenSize > 1024) {
            setShowOnClick(3);
            setShowOnStart(3);
        } else if (screenSize > 768) {
            setShowOnClick(2);
            setShowOnStart(8);
        } else if (screenSize > 320) {
            setShowOnClick(2);
            setShowOnStart(5);
        }
      }, [screenSize]);

    function handleShowMorePosts() {        
        setMoviesCardsList(foundedCards.slice(0, moviesCardsList.length + showOnClick));
        if (moviesCardsList.length >= foundedCards.length - showOnClick) {
            setShowMore(false);
        }
    }

    React.useEffect(() =>{
        if (foundedCards.length <= showOnStart) {
            setShowMore(false);                        
        } if (foundedCards.length > showOnStart) {
            setMoviesCardsList(foundedCards.slice(0, showOnStart));
            setShowMore(true);
        } else {
            setMoviesCardsList(foundedCards);
            setShowMore(false);
        }         
    }, [foundedCards, showOnStart])

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
                savedMovies={savedMovies}
                handleShowMorePosts={handleShowMorePosts}
                showMore={showMore}
            /> }
        </>
    )
}

export default Movies;

  