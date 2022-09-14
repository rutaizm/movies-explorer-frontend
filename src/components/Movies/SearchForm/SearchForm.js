import './SearchForm.css';

function SearchForm() {
    return(
        <section className='search-form'>
            <form className='search-form__whole' method='get'>
                <input className='search-form__field' placeholder='Фильм' type='text'/>
                <button className='search-form__button' type='submit'>Найти</button>
                <div className='search-form__wrap'>                    
                    <input className='search-form__checkbox' type='checkbox' id='switch'/>
                    <label for='switch' className='search-form__label'>Короткометражки</label>
                </div>
               
            </form>
        </section>
    )
}

export default SearchForm;