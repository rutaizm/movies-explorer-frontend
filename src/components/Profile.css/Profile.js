import React from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useValidation from '../../hooks/useValidation';

function Profile({onEditProfile, onLogout}) {

    const currentUser = React.useContext(CurrentUserContext);
    const { values, errors, handleChange, resetForms } =  useValidation('.profile__form');
    const [formChanged, setFormChanged] = React.useState(false)
    const profileEditClass = !formChanged ? 'profile__edit' : 'profile__edit profile__edit_type_active';

    React.useEffect(() => {
        values.name === currentUser.name && values.email === currentUser.email
          ? setFormChanged(false)
          : setFormChanged(true);
    }, [values]);

    React.useEffect(() => {
        currentUser && resetForms(currentUser, {}, true);
    }, [currentUser, resetForms]);

    function handleSubmit(e) {
        e.preventDefault();
        onEditProfile(values);
    }

    return(
        <section className='profile'>
           <h2 className='profile__hello'>Привет, {currentUser.name}!</h2>
           <form className='profile__form'>
                <fieldset className='profile__form-wrap'>
                    <div className='profile__input-wrap'>
                        <label className='profile__label' htmlFor='name' type="text">Имя</label>
                        <input
                            type='text'
                            name='name'
                            className='profile__input' 
                            value={values.name || ''}
                            onChange={handleChange}
                            id='name' 
                            pattern={['^(?=.{8,40}$)[A-Za-zа-яА-ЯёЁ/\s/-]*$']} 
                            placeholder={currentUser.name}
                        />                        
                    </div>
                    <span className={errors.name ? 
                        'signin__error signin__error_type_active' : 'signin__error'}>{errors.name}                
                    </span>
                    <div className='profile__input-wrap'>
                        <label className='profile__label' htmlFor='email' type="Email">E-mail</label>
                        <input 
                            name='email'
                            type='email' 
                            value={values.email || ''}
                            onChange={handleChange}
                            className='profile__input' 
                            id='email' 
                            placeholder={currentUser.email}
                        />                        
                    </div> 
                    <span className={errors.email ? 
                        'signin__error signin__error_type_active' : 'signin__error'}>{errors.email}
                    </span>                  
                </fieldset>  
                <div className='profile__link'>
                <button 
                    className={profileEditClass}
                    type='submit'
                    onClick={handleSubmit}
                    disabled={!formChanged}
                >
                    Редактировать</button>
                <button 
                    className='profile__sign-out' 
                    type='submit'
                    onClick={onLogout}
                >
                    Выйти из аккаунта</button>
           </div>
           </form>
           
        </section>
    )
}

export default Profile;