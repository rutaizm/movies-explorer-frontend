import React from "react";
import './SignIn.css';
import { ReactComponent as Logo} from '../../images/logo.svg'

function SignIn({children, hello, buttonTitle, disabled}) {
    return(
        <section className="signin">
            <div className='signin__container'>
            <Logo className='signin__logo'/>
            <h2 className='signin__hello'>{hello}</h2>
            <form className='signin__form'>
                <fieldset className='signin__wrap'>
                    {children}
                </fieldset>
                <button type='submit' className={disabled ? 
                    'signin__button signin__button_type_disabled' : 'signin__button signin__button_type_active'}>{buttonTitle}
                </button>                
            </form>
            </div>
        </section>
    )
}

export default SignIn;