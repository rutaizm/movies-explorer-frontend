import './MoviesCard.css';
import photo from '../../../images/photo.jpg'

function MoviesCard() {
    return(
        <li className='card'>
            <img className='card__image' src={photo} alt='кадр из фильма'/>
            <div className='card__wrap'>
                <p className='card__title'>33 слова о дизайне</p>
                <button type='button' className='card__button card__button_type_save'/>
            </div>   
            <time className='card__time'>1ч42м</time>            
        </li>
    )
}

export default MoviesCard;