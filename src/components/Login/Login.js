import './Login.css';
import React from 'react';
import SignIn from '../SignIn/SignIn';
import { Link } from 'react-router-dom';
import useValidation from '../../hooks/useValidation';
import { useEffect } from 'react';

function Login({onLogin}) {

    const { values, errors, isValid, handleChange, resetForms } =  useValidation('.signin__form');
    
    useEffect(() => { resetForms() }, [resetForms]);

    function handleSubmit(event) {
        event.preventDefault();
        onLogin(values);
    }

    return(
        <section className='login'>
            <SignIn
                hello='Рады видеть!'
                buttonTitle='Войти'
                onSubmit={handleSubmit}
                isValid={isValid}
                disabled={!isValid}
            >
                <label className='signin__label' htmlFor='name'>E-mail</label>
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
                <p className='signin__text'>Ещё не зарегистрированы?</p>
                <Link to='/signup' className='signin__login'>Регистрация</Link>
            </div> 
        </section>
    )
}

export default Login;