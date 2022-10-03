import React from 'react';
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';

function Movies({movies}) {

    const [searchValue, setSearchValue] = React.useState(''); 
    const [displayedCard, setDisplayedCard] = React.useState([]);

    function onSearch() {
        if (searchValue.length === 0) {
            return
        } else {
            const filteredMovies = movies.filter(item => item.nameRU.includes(searchValue)); 
            setDisplayedCard(filteredMovies);
        }
    }

    return(
        <>
            <SearchForm
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                onSearch = {onSearch}
            />
            <MoviesCardList
                displayedCard={displayedCard}
                onSearch={onSearch}
            /> 
        </>
    )
}

export default Movies;