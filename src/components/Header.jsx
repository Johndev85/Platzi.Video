import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/resources/logo-platzi-video-BW2.png';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import logoUser from '../assets/resources/user.png';

const Header = (props) => {
  const { user = {} } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header-main'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            (
              <img
                src={logoUser}
                alt='user'
              />
            )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href='/'>{user.name}</a>
            </li>
          ) : null}

          {hasUser ? (
            <li>
              <a
                href='#logout'
                onClick={handleLogout}
              >
                Cerrar Sesión
              </a>
            </li>
          ) :
            (
              <li>
                <Link to='/login'>
                  Iniciar sesión
                </Link>
              </li>
            )}

        </ul>
      </div>
    </header>

  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
