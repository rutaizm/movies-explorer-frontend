import './Promo.css';
import World from '../../../images/world.svg';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__wrap'>
                <h1 className='promo__header'>Учебный&nbsp;проект студента&nbsp;факультета Веб-&nbsp;разработки.</h1>
                <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button className='promo__button'>Узнать больше</button>
            </div>
            <img className='promo__image' src={World} alt="земной шар"/>
        </section>
    )
}

export default Promo;