import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useScreenSize } from '../../hooks/useScreenSize';

function MoviesCardList({cardsToRender, isNoMoviesMessage, onLike, onDelete, onClick, savedMovies}) {   
    
    const screenSize = useScreenSize();
    const infoMessage = isNoMoviesMessage ? 'moviescard__message moviescard__message_type_active' : 'moviescard__message'
 
    React.useEffect(() => {
        if (screenSize > 1280) {
          console.log('big')
        } else if (screenSize > 1024) {
            console.log('middle')
        } else if (screenSize > 768) {
            console.log('small')
        } else if (screenSize > 320) {
            console.log('xtrasmall')
        }
      }, [screenSize]);
      

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
                className='moviescard__more-button'
                // onClick={handleShowMorePosts}
            >
                Ещё</button>
        </section>      
    )
}

export default MoviesCardList;