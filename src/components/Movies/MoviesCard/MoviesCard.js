import './MoviesCard.css';

function MoviesCard({movie}) {

    const BASE_URL = 'https://api.nomoreparties.co/';

    return(
        <li className='card'>
            <img className='card__image' src={BASE_URL + movie.image.url} alt={movie.nameRU}/>
            <div className='card__wrap'>
                <p className='card__title'>{movie.nameRU}</p>
                <button type='button' className='card__button card__button_type_save'/>
            </div>   
            <time className='card__time'>{movie.duration}</time>            
        </li>
    )
}

export default MoviesCard;