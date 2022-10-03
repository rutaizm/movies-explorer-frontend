import React from 'react';
import './SearchForm.css';

function SearchForm({searchValue, setSearchValue, onSearch}) {  

    function handleSearchInput(e) {      
        setSearchValue(e.target.value); 
    }

    const isValid = (() => {
        if (searchValue.length > 1) {
            return true
        } else {
            return false
        }
    }) ();

    function handleFormSubmit(e) {
        e.preventDefault();
        onSearch();
    }

    return(
        <section className='search-form'>
            <form 
                className='search-form__whole' 
                method='get' 
                required
                disabled={!isValid}
                onSubmit={handleFormSubmit}
                >
                <input 
                    className='search-form__field' 
                    placeholder='Фильм' 
                    type='text'
                    name='search'
                    onChange={handleSearchInput}
                    value={searchValue}
                />
                <button 
                    className='search-form__button' 
                    type='submit'
                    disabled={!isValid}
                    >
                        Найти
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