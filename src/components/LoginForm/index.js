import React from 'react';

class LoginForm extends React.Component {
  state = {

  };

  render() {
    return (
      <form className='login-form' onSubmit={()=>{}}>
        <label className='login-form__input-label' htmlFor="email">
          <span className='login-form__error'>ошибка</span>
          <span className='login-form__placeholder'>Ваш e-mail</span>
          <input className='login-form__input' id='email' type="email" value='' onChange={()=>{}} />
        </label>
        <label className='login-form__input-label' htmlFor="password">
          <span className='login-form__error'>ошибка</span>
          <span className='login-form__placeholder'>Придумайте пароль</span>
          <input className='login-form__input' id='password' type="password" value='' onChange={()=>{}} />
        </label>
        <div className='login-form__radio-block'>
          <span className='login-form__title'>Валюта для ввода и вывода средств</span>
          <label className='login-form__checkbox-label' htmlFor="checkbox--P">
            <span className='login-form__checkbox'>P</span>
            <input className='login-form__input' name='checkbox-group' id='checkbox--P' type="password" value='' onChange={()=>{}} />
          </label>
          <label className='login-form__checkbox-label' htmlFor="checkbox--S">
            <span className='login-form__checkbox'>S</span>
            <input className='login-form__input' name='checkbox-group' id='checkbox--S' type="password" value='' onChange={()=>{}} />
          </label>
          <label className='login-form__checkbox-label' htmlFor="checkbox--E">
            <span className='login-form__checkbox'>E</span>
            <input className='login-form__input' name='checkbox-group' id='checkbox--E' type="password" value='' onChange={()=>{}} />
          </label>
        </div>
        <label className='login-form__checkbox-label' htmlFor="password">
          <span className='login-form__title'>Я совершеннолетний, ознакомился и принимаю соглашение об оказании услуг.</span>
          <input className='login-form__input' id='checkbox' type="password" value='' onChange={()=>{}} />
        </label>
        <button className='login-form__checkbox-label' type='submit'>Зарегистрироваться</button>
      </form>
    );
  }
}

export default LoginForm;
