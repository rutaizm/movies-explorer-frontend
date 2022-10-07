import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({cardsToRender, isNoMoviesMessage, onLike, onDelete, onClick, savedMovies}) {   
    
    const infoMessage = isNoMoviesMessage ? 'moviescard__message moviescard__message_type_active' : 'moviescard__message'
 
    // const CardKey = film._id ? film._id : film.id;

    return(
        <section className='moviescard'>           
            <ul className='moviescard__list'>
            {
                <p className={infoMessage}>{isNoMoviesMessage}</p>
            }
                {cardsToRender.map((film) =>
                   (<MoviesCard
                        key={film.id || film._id}
                        movie={film}
                        onDelete={onDelete}
                        onLike={onLike}
                        onClick={onClick}
                        savedMovies={savedMovies}
                    />)  
                )}
            </ul>
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