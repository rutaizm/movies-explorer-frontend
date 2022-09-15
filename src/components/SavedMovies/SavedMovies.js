import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies() {
    return(
        <>
            <SearchForm/>
            <MoviesCardList/>
        </>
    )
}

export default SavedMovies;