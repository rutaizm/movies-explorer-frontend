import React from 'react';
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';

function Movies({movies}) {

    const [searchValue, setSearchValue] = React.useState({});  
    const filteredMovies = movies.filter(item => item.nameRU.includes(searchValue));    

    function onSearch() {
        console.log(filteredMovies)
    }

    return(
        <>
            <SearchForm
                setSearchValue={setSearchValue}
                onSearch = {onSearch}
            />
            <MoviesCardList
                searchValue={searchValue}
                movies={movies}
                filteredMovies={filteredMovies}
            /> 
        </>
    )
}

export default Movies;