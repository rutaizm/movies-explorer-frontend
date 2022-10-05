import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { type } from '@testing-library/user-event/dist/type';

function MoviesCardList({foundedCards, isNoMoviesMessage}) {   
    
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