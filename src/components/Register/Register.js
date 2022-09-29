import React from 'react';
import SignIn from '../SignIn/SignIn';
import './Register.css';
import { NavLink } from 'react-router-dom';
import useValidation from '../../utils/useValidation';
import { useEffect } from 'react';

function Register({onRegistration}) {

    const { values, errors, isValid, handleChange, resetForms } =  useValidation('.signin__form');
    
    useEffect(() => { resetForms() }, [resetForms]);

    function handleSubmit(event) {
        event.preventDefault();
        onRegistration(values);
    }

    return(
        <section className='register'>
           <SignIn
                hello='Добро пожаловать!'
                buttonTitle='Зарегистрироваться'
                onSubmit={handleSubmit}
                isValid={isValid}
                disabled={!isValid}
           >
                <label className='signin__label' htmlFor='name'>Имя</label>
                <input 
                    name='name'
                    type='text'
                    value={values.name || ''}
                    onChange={handleChange}
                    className = {errors.name ? 
                        'signin__input signin__input_type_error' : 'signin__input'}                     
                    id='name'
                    required
                    pattern={['^(?=.{2,40}$)[A-Za-zа-яА-ЯёЁ/\s/-]*$']}           
                />
                <span className={errors.name ? 
                    'signin__error signin__error_type_active' : 'signin__error'}>{errors.name}                
                </span>

                <label className='signin__label' htmlFor='Email'>E-mail</label>
                <input 
                    name='email'
                    type='email' 
                    value={values.email || ''}
                    onChange={handleChange}
                    className={errors.email ? 
                        'signin__input signin__input_type_error' : 'signin__input'}                     
                    id='Email'
                    required                  
                />
                <span className={errors.email ? 
                    'signin__error signin__error_type_active' : 'signin__error'}>{errors.email}
                </span>
                
                <label className='signin__label' htmlFor='password'>Пароль</label>
                <input 
                    name='password'
                    type='text'
                    value={values.password || ''}
                    onChange={handleChange}
                    className={errors.password ? 
                        'signin__input signin__input_type_error' : 'signin__input'}                    
                    id='password'
                    required                    
                />
                <span className={errors.password ? 
                    'signin__error signin__error_type_active' : 'signin__error'}>{errors.password}
                </span>
            </SignIn>  

            <div className='signin__caption'>
                <p className='signin__text'>Уже зарегистрированы?</p>
                <NavLink to='/signin' className='signin__login'>Войти</NavLink>
            </div> 
        </section>
    )
}

export default Register;