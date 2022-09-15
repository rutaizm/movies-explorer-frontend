import './Profile.css';

function Profile() {
    return(
        <section className='profile'>
           <h2 className='profile__hello'>Привет, Виталий!</h2>
           <form className='profile__form'>
                <fieldset className='profile__form-wrap'>
                    <div className='profile__input-wrap'>
                        <label className='profile__label' for='name' type="text">Имя</label>
                        <input className='profile__input' id='name' placeholder='Виталий'/>
                    </div>
                    <div className='profile__input-wrap'>
                        <label className='profile__label' for='email' type="Email">E-mail</label>
                        <input className='profile__input' id='email' placeholder='pochta@yandex.ru'/>
                    </div>                    
                </fieldset>  
           </form>
           <div className='profile__link'>
                <button className='profile__edit'>Редактировать</button>
                <button className='profile__sign-out'>Выйти из аккаунта</button>
           </div>
        </section>
    )
}

export default Profile;