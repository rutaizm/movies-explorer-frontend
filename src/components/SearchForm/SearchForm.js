import React from 'react';
import { useState } from 'react';
import './SearchForm.css';

function SearchForm({searchValue, setSearchValue, onSearch, isChecked, setRenderLoading}) {  

    
    const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    const isValid = (() => {
        if (searchValue.length > 0) {
            return true
        } else {
            return false
        }
    }) ();

    function handleSearchInput(e) {   
        setSearchValue(e.target.value);
        setErrorMessage('');
    }

    function inputHandler() {
        !isValid ? setErrorMessage("Напишите что-нибудь...") : setErrorMessage('');
    }

   function handleCheckbox() {
     !checkboxIsChecked ? setCheckboxIsChecked(true) : setCheckboxIsChecked(false);
   }

   function handleFormSubmit(e) {
        e.preventDefault();
        setRenderLoading(true);
        if (!checkboxIsChecked) {
            onSearch();
        } else {
            isChecked()
        }        
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
                    placeholder={'Фильм' || errorMessage} 
                    type='text'
                    name='search'
                    onChange={handleSearchInput}
                    value={searchValue}
                    autoComplete='off'
                />
               <p className='search-form__message'>{errorMessage}</p>
                <button 
                    className='search-form__button' 
                    type='submit'
                    onClick={inputHandler}
                    >
                        Найти
                </button>
                <div className='search-form__wrap'>                    
                    <input 
                        className='search-form__checkbox' 
                        type='checkbox' 
                        id='switch'
                        onChange={handleCheckbox}
                        />
                    <label htmlFor='switch' className='search-form__label'>Короткометражки</label>
                </div>               
            </form>
            <hr className='search-form__line'/>
        </section>
    )
}

export default SearchForm;