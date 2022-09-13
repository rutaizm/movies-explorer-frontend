import './AboutMe.css';
import pic from '../../../images/pic.png';
import Portfolio from '../AboutMe/Portfolio/Portfolio';

function AboutMe() {
    return(
        <section className='student'>
            <caption className='student__caption'>Студент</caption>
            <hr/>
            <div className='student__container'>
                <div className='student__wrap'>
                    <h2 className='student__header'>Виталий</h2>
                    <p className='student__brief'>Фронтенд-разработчик, 30 лет</p>
                    <p className='student__bio'>Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                    У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                    С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс 
                    по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <span className='student__git'>Github</span>                
                </div>    
                <img src={pic} alt='портрет' className='student__photo'/>
            </div>
            <Portfolio/>
        </section>
    )
}

export default AboutMe;