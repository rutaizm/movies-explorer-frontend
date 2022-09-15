import './Register.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

function Register() {
    return(
        <section className='register'>
            <div className='register__container'>
            <Logo className='register__logo'/>
            <h2 className='register__hello'>Добро пожаловать!</h2>
            <form className='signin__form'>
                <fieldset className='signin__wrap'>
                    <label className='signin__label' for='name'>Имя</label>
                    <input className='signin__input' type='text' id='name'/>
                    <span className='signin__error'></span>
                    <label className='signin__label' for='Email'>E-mail</label>
                    <input className='signin__input' type='email' id='Email'/>
                    <span className='signin__error'></span>
                    <label className='signin__label' for='password'>Пароль</label>
                    <input className='signin__input' type='text' id='password'/>
                    <span className='signin__error'></span>
                </fieldset>
                <button type='submit' className='signin__button'>Зарегистрироваться</button>
                <div className='signin__container'>
                    <p className='signin__text'>Уже зарегистрированы?</p>
                    <p className='signin__login'>Войти</p>
                </div>
            </form>
            </div>
        </section>
    )
}

export default Register;