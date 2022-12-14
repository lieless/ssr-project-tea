/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Header({ authState, setAuthState }) {
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/auth/logout');
    if (response.ok) {
      setAuthState(null);
      navigate('/');
    }
  };

  return (
    <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
      <div className="max-w-700 center wrap-float">
        <nav className="clearfix mar-b-1">
          <ul className="no-bullets no-margin no-padding right">
            {!authState
              ? (
                <div className="nav_container">
                  <div className="nav-title">
                    <li className="pipe-separate t-light-green left"><NavLink to="/">Tea Blog</NavLink></li>
                  </div>
                  <div className="nav-links">
                    <li className="pipe-separate t-light-green left navv"><NavLink to="/registration">Регистрация</NavLink></li>
                    <li className="pipe-separate t-light-green left navv"><NavLink to="/login">Вход</NavLink></li>
                    <li className="pipe-separate t-light-green left navv"><NavLink to="/">Главная</NavLink></li>
                  </div>
                </div>
              )
              : (
                <div className="nav_container">
                  <div className="nav-title">
                    <li className="pipe-separate t-light-green left navv"><NavLink to="/">Tea Blog</NavLink></li>
                  </div>
                  <div className="nav-links">
                    <li className="pipe-separate t-light-green left navv"><NavLink to={`/lk/${authState.id}`}>{authState.name || 'nickname'}</NavLink></li>
                    <li className="pipe-separate t-light-green left navv"><NavLink to="/">Главная</NavLink></li>
                    <li className="pipe-separate t-light-green left navv"><a id="exit" onClick={logoutHandler} href="">Выход </a></li>
                  </div>
                </div>
              )}
          </ul>
        </nav>

        <div className="logo-container">
          <img src="/images/testLogo.png" alt="tea" className="center block logo" />
          {/* <h1>Tea Blog</h1> */}

        </div>
      </div>
    </header>
  );
}

export default Header;
