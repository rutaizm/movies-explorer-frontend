import React from 'react';
import {  useLocation } from 'react-router';
import { BASE_URL } from '../../utils/constant';
import './MoviesCard.css';

function MoviesCard({movie, onLike, onDelete, savedMovies, onChange}) {
    
    const location = useLocation();
    const savedCard = savedMovies?.some((m) => m.movieId === movie.id)
    const cardClassName = savedCard ? 'card__button card__button_type_active' : 'card__button card__button_type_save '

    function convertMovieDuration(mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return `${hours}ч ${minutes}мин`;
    };    
    const duration = convertMovieDuration(movie.duration);

    function handleDelete() {
        onDelete(movie);
         console.log(movie)
    }
    function handleClick() {
        // const filmInDataBase = savedMovies.some((film) => film.movieId === movie.id);
        if(savedCard){       
            onDelete(movie);
        } 
        if (!savedCard) {
            onLike(movie);
        }
    }

    return(
        <li className='card'>

            <a className='card__trailer-link' href={movie.trailerLink} target='blank'>
                {location.pathname === '/saved-movies' &&                 
                    <img className='card__image' src={movie.image} alt={movie.nameRU}/>
                }               
               {location.pathname === '/movies' &&                 
                    <img className='card__image' src={BASE_URL + movie.image.url} alt={movie.nameRU}/>
                }
            </a>    
            <div className='card__wrap'>
                <p className='card__title'>{movie.nameRU}</p>           
                    {location.pathname === '/saved-movies' &&                 
                        <button type='button' onClick={handleDelete} className ='card__button card__button_type_delete'/>
                    }
                
                {location.pathname === '/movies' &&                 
                    <button type='button' onClick={handleClick} className ={cardClassName}/>
                    }
              </div>   
            <time className='card__time'>{duration}</time>            
        </li>
    )
}

export default MoviesCard;