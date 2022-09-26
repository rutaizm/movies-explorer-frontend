import './Portfolio.css';
import arrow from '../../../../images/arrow.svg';

function Portfolio() {
    return(
        <>  
            <p className='portfolio__title'>Портфолио</p>
                    <ul className='portfolio'>
                        <li className='portfolio__item'>   
                            <a href="https://github.com/rutaizm" target='_blank' rel="noreferrer" className='portfolio__link'>Статичный сайт</a>
                            <a href="https://github.com/rutaizm" target='_blank' rel="noreferrer"><img className='portfolio__img' alt='стрелка вверх' src={arrow}/></a>
                        </li> 
                        <li className='portfolio__item'> 
                            <a href="https://github.com/rutaizm" target='_blank' rel="noreferrer" className='portfolio__link'>Адаптивный сайт</a>
                            <a href="https://github.com/rutaizm" target='_blank' rel="noreferrer"><img className='portfolio__img' alt='стрелка вверх' src={arrow}/></a>
                        </li>
                        <li className='portfolio__item'> 
                            <a href="https://github.com/rutaizm" target='_blank' rel="noreferrer" className='portfolio__link'>Одностраничное приложение</a>
                            <a href="https://github.com/rutaizm" target='_blank' rel="noreferrer"><img className='portfolio__img' alt='стрелка вверх' src={arrow}/></a>
                        </li>
                    </ul>
        </> 
    )
}

export default Portfolio;