import './AboutProject.css';
import Chart from './Chart/Chart';

function AboutProject() {
    return(
        <section className='about'>
            <h2 className='about__header'>О проекте</h2>
            <hr/>
            <div className='about__wrap'>
                <article className='about__article'>
                    <h3 className='about__article-header'>Дипломный проект включал 5 этапов</h3>
                    <p className='about__article-text'>Составление плана, работу над бэкендом, 
                        вёрстку, добавление функциональности и финальные доработки.</p>
                </article>
                <article className='about__article'>
                    <h3 className='about__article-header'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about__article-text'>У каждого этапа был мягкий и жёсткий дедлайн, 
                        которые нужно было соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <Chart/>
        </section>

    )
}

export default AboutProject;