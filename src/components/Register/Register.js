import React from 'react';
import SignIn from '../SignIn/SignIn';
import './Register.css';
import { NavLink } from 'react-router-dom';

function Register() {
    return(
        <section className='register'>
           <SignIn
                hello='Добро пожаловать!'
                buttonTitle='Зарегистрироваться'
           >
                <label className='signin__label' htmlFor='name'>Имя</label>
                <input className='signin__input' type='text' id='name'/>
                <span className='signin__error'></span>
                <label className='signin__label' htmlFor='Email'>E-mail</label>
                <input className='signin__input' type='email' id='Email'/>
                <span className='signin__error'></span>
                <label className='signin__label' htmlFor='password'>Пароль</label>
                <input className='signin__input' type='text' id='password'/>
                <span className='signin__error'></span>
            </SignIn>  
            <div className='signin__caption'>
                    <p className='signin__text'>Уже зарегистрированы?</p>
                    <NavLink to='/signin' className='signin__login'>Войти</NavLink>
            </div> 
        </section>
    )
}

export default Register;