import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({showMore, handleShowMorePosts, cardsToRender, isNoMoviesMessage, onLike, onDelete, onClick, savedMovies}) {   
    
   
    const infoMessage = isNoMoviesMessage ? 'moviescard__message moviescard__message_type_active' : 'moviescard__message'
 
    const showMoreClassname = showMore? 'moviescard__more-button moviescard__more-button_type_active' : 'moviescard__more-button';
       

    return(
        <section className='moviescard'>    
            {
                <p className={infoMessage}>{isNoMoviesMessage}</p>
            }       
            <ul className='moviescard__list'>
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
                className={showMoreClassname}
                onClick={handleShowMorePosts}
            >
                Ещё</button>
        </section>      
    )
}

export default MoviesCardList;