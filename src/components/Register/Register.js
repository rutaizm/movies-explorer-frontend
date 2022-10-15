import React from 'react';
import SignIn from '../SignIn/SignIn';
import './Register.css';
import { Link } from 'react-router-dom';
import useValidation from '../../hooks/useValidation';
import { useEffect } from 'react';
import { errorText} from '../../utils/constant';

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
                    pattern='^(?=.{8,40}$)[A-Za-zа-яА-ЯёЁ/\s/-]*$'          
                />
                <span className={errors.name ? 
                    'signin__error signin__error_type_active' : 'signin__error'}>{errorText.name}                
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
                    pattern='^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$'
                    required                  
                />
                <span className={errors.email ? 
                    'signin__error signin__error_type_active' : 'signin__error'}>{errorText.email}
                </span>
                
                <label className='signin__label' htmlFor='password'>Пароль</label>
                <input 
                    name='password'
                    type='password'
                    secureTextEntry={true}
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
                <Link to='/signin' className='signin__login'>Войти</Link>
            </div> 
        </section>
    )
}

export default Register;