import React from 'react';
import {  useLocation } from 'react-router';
import { BASE_URL } from '../../utils/constant';
import './MoviesCard.css';

function MoviesCard({movie, onLike, onDelete}) {

    const location = useLocation();
    const savedCard =  movie._id !== null 
    // const imageSrc = savedCard ? movie.image : BASE_URL + movie.image.url
    const cardClassName = savedCard ? 'card__button card__button_type_active' : 'card__button card__button_type_save '
    function convertMovieDuration(mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return `${hours}ч ${minutes}мин`;
    };    
    const duration = convertMovieDuration(movie.duration);

     function handleLike() {
        onLike(movie);
    }

    function handleDelete() {
        onDelete(movie);
    }

    function handleClick() {
        if (savedCard) {
            handleDelete(movie);   
            console.log(movie.nameEN) 
        } else {
            handleLike(movie)
            console.log(movie.nameRU) 
        }
    }    

    return(
        <li className='card'>
            {/* <img className='card__image' src={imageSrc} alt={movie.nameRU}/> */}
            {location.pathname === '/saved-movies' &&                 
                <img className='card__image' src={movie.image} alt={movie.nameRU}/>
                }               
               {location.pathname === '/movies' &&                 
                <img className='card__image' src={BASE_URL + movie.image.url} alt={movie.nameRU}/>
                }
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