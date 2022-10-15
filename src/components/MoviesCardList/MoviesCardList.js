import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import {useLocation} from  'react-router';


function MoviesCardList({showMore, foundedSavedCards, handleShowMorePosts, cardsToRender, isNoMoviesMessage, onLike, onDelete, savedMovies}) {   
    
    const location = useLocation();
   
    const infoMessage = isNoMoviesMessage ? 'moviescard__message moviescard__message_type_active' : 'moviescard__message'
 
    const showMoreClassname = showMore? 'moviescard__more-button moviescard__more-button_type_active' : 'moviescard__more-button';
       

    return(
        <section className='moviescard'>    
            {
                <p className={infoMessage}>{isNoMoviesMessage}</p>
            }       
            <ul className='moviescard__list'>

                {location.pathname === '/movies' &&
                    (cardsToRender.map((film) =>
                    (<MoviesCard
                            key={film.id || film._id}
                            movie={film}
                            onDelete={onDelete}
                            onLike={onLike}
                            savedMovies={savedMovies}
                        />)  
                    ))
                }
                {location.pathname === '/saved-movies' && 
                    (cardsToRender.map((film) =>
                    (<MoviesCard
                            key={film.id || film._id}
                            movie={film}
                            onDelete={onDelete}
                            onLike={onLike}
                            savedMovies={savedMovies}
                        />)
                    ))
                }



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