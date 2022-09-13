import './Portfolio.css';
import arrow from '../../../../images/arrow.svg';

function Portfolio() {
    return(
        <>  
            <p className='portfolio__title'>Портфолио</p>
                    <nav className='portfolio'>
                        <div className='portfolio__item'>   
                            <a href="https://github.com/rutaizm" target='_blank' rel="noreferrer" className='portfolio__link'>Статичный сайт</a>
                            <img className='portfolio__img' alt='' src={arrow}/>
                        </div> 
                        <div className='portfolio__item'> 
                            <a href="https://github.com/rutaizm" target='_blank' rel="noreferrer" className='portfolio__link'>Адаптивный сайт</a>
                            <img className='portfolio__img' alt='' src={arrow}/>
                        </div>
                        <div className='portfolio__item'> 
                            <a href="https://github.com/rutaizm" target='_blank' rel="noreferrer" className='portfolio__link'>Одностраничное приложение</a>
                            <img className='portfolio__img' alt='' src={arrow}/>
                        </div>
                    </nav>
        </> 
    )
}

export default Portfolio;