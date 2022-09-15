import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return(
        <section className='moviescard'>
            <div className='moviescard__list'>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </div>
            <button type='button' className='moviescard__more-button'>Ещё</button>
        </section>
    )
}

export default MoviesCardList;