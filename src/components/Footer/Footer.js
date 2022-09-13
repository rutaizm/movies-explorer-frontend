import './Footer.css';

function Footer() {

    const year = new Date().getFullYear();

    return(
        <section className='footer'>
            <p className='footer__info'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__wrap'>
                <time className='footer__year'>&copy;{year}</time>
                <ul className='footer__list'>
                    <li className='footer__list-item'>Яндекс.Практикум</li>
                    <li className='footer__list-item'>Github</li>
                </ul>
            </div>
        </section>        
    )
}

export default Footer;