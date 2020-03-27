import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/resources/logo-platzi-video-BW2.png';
import logoUser from '../assets/resources/user.png';

const Header = () => (
  <header className='header-main'>
    <img className='header__img' src={logo} alt='Platzi video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={logoUser} alt='user' />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href='/'>Cuenta</a>
        </li>
        <li>
          <a href='./iniciar-sesion.html'>Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>

);

export default Header;
