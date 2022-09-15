import './Login.css';
import React from 'react';
import SignIn from '../SignIn/SignIn';
import { NavLink } from 'react-router-dom';

function Login() {
    return(
        <section className='login'>
            <SignIn
                hello='Рады видеть!'
                buttonTitle='Войти'
            >
                <label className='signin__label' htmlFor='name'>Имя</label>
                <input className='signin__input' type='text' id='name'/>
                <span className='signin__error'></span>
                <label className='signin__label' htmlFor='Email'>E-mail</label>
                <input className='signin__input' type='email' id='Email'/>
                <span className='signin__error'></span>
            </SignIn>
            <div className='signin__caption'>
                    <p className='signin__text'>Ещё не зарегистрированы?</p>
                    <NavLink to='/signin' className='signin__login'>Регистрация</NavLink>
            </div> 
        </section>
    )
}

export default Login;