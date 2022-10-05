import React from 'react';
import { useHistory } from "react-router-dom";
import { BASE_URL } from '../../utils/constant';

import './MoviesCard.css';

function MoviesCard({movie}) {

    const path = useHistory().location.pathname === '/saved-movies';
    const savedCard =  movie._id ? 'card__button card__button_type_active ' : 'card__button card__button_type_save'
    
       function show () {
        console.log(path)
    }

    const imageSrc = movie._id ? movie.image : BASE_URL + movie.image.url;

    function convertMovieDuration(mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return `${hours}ч ${minutes}мин`;
    };    
    const duration = convertMovieDuration(movie.duration);

    return(
        <li className='card'>
            <img className='card__image' src={imageSrc} alt={movie.nameRU}/>
            <div className='card__wrap'>
                <p className='card__title'>{movie.nameRU}</p>
                {/* { path ? (
                    <button type='button' className='card__button card__button_type_delete' onClick={show}/>
                    ) : (<button type='button' className = {savedCard}/>)} 
                 */}
                {/* savedCard && 
               ( <button type='button' 'card__button card__button_type_save'className ='card__button card__button_type_active'/>)
               ?  */}
               <button type='button' className = {savedCard}/>
            </div>   
            <time className='card__time'>{duration}</time>            
        </li>
    )
}

export default MoviesCard;