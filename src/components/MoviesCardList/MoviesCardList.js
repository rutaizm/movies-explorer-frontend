import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({foundedCards, isNoMoviesMessage, onLike, onDelete, onClick, savedMovies}) {   
    
    const infoMessage = isNoMoviesMessage ? 'moviescard__message moviescard__message_type_active' : 'moviescard__message'
 
    return(
        <section className='moviescard'>           
            <ul className='moviescard__list'>
            {
                <p className={infoMessage}>{isNoMoviesMessage}</p>
            }
                {foundedCards.map((film) =>
                   (<MoviesCard
                        key={film.id}
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