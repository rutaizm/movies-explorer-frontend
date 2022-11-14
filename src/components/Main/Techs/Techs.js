import './Techs.css';
import Stack from './Stack/Stack'

function Techs() {
    return(
        <section className='techs'>
            <caption className='techs__caption'>Технологии</caption>
            <hr/>
            <div className='techs__wrap'>
                <h2 className='techs__header'>7 технологий</h2>
                <p className='techs__text'>На курсе веб-разработки мы освоили технологии, 
                которые применили в дипломном проекте.</p>
                <Stack/>
            </div>    
        </section>
    )
}

export default Techs