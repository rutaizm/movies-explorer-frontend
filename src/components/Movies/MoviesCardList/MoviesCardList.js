
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { type } from '@testing-library/user-event/dist/type';
// import SearchForm from '../SearchForm/SearchForm.js';
// import {searchValue} from '../SearchForm/SearchForm.js'

function MoviesCardList({displayedCard, onSearch}) {

    

    // function handle() {
    //       console.log(filteredMovies);
          

    //     // console.log(filteredMovies);
    // }       
 
    return(
        <section className='moviescard'>
            <div className='moviescard__list'>
                {displayedCard.map((film) =>
                   (<MoviesCard
                        key={film.id}
                        movie={film}
                    />)   
                )}
            </div>
            <button 
                type='button' 
                className='moviescard__more-button'
                // onClick={handle}
            >
                Ещё</button>
        </section>      
    )
}

export default MoviesCardList;