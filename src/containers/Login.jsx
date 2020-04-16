/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';

const Login = (props) => {

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2 tabIndex='0'> Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            aria-label='Correo'
            type='email'
            className='input'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            aria-label='Contraseña'
            type='password'
            className='input'
            placeholder='Contraseña'
            onChange={handleInput}

          />
          <button className='button'> Iniciar sesión  </button>
          <div className='login__container--remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='checkbox' />
              Recuérdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>

        <section className='login__container--social-media'>
          <div>
            {/* <img src='file://D:\PLATZI\Frontend Developer\Platzi-Video\src\assets\resources\google-icon.webp' alt='Google' />*/}
            <img src='file://D:\PLATZI\Frontend Developer\Platzi-Video\src\assets\resources\google-icon.webp' alt='Google' />
            Inicia sesión con Google
          </div>
          <div>
            <img src='file://D:\PLATZI\Frontend Developer\Platzi-Video\src\assets\resources\twitter-icon.webp' alt='Twitter' />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          ¿No tienes ninguna cuenta?
          <Link to='/register'>
            Regístrate!
          </Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);

