import React from 'react';
import './SearchForm.css';

function SearchForm({setSearchValue, onSearch}) {   

    function handleSearchInput(e) {
        setSearchValue(e.target.value);   }


    function handleSearch(e) {
        e.preventDefault();
        onSearch();        
    } 

    return(
        <section className='search-form'>
            <form className='search-form__whole' method='get' required>
                <input 
                    className='search-form__field' 
                    placeholder='Фильм' 
                    type='text'
                    onChange={handleSearchInput}
                    name='search'
                />
                <button 
                    className='search-form__button' 
                    type='submit'
                    onClick={handleSearch}>Найти
                </button>
                <div className='search-form__wrap'>                    
                    <input className='search-form__checkbox' type='checkbox' id='switch'/>
                    <label htmlFor='switch' className='search-form__label'>Короткометражки</label>
                </div>               
            </form>
            <hr className='search-form__line'/>
        </section>
    )
}

export default SearchForm;