import React, { useCallback } from 'react';
import ParticlesBg from 'particles-bg';
import { useKeycloak } from '@react-keycloak/web';

export const App = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    console.log('Keycloak no iniciado');
  }

  if (keycloak.authenticated) {
    console.log(keycloak.userInfo);
  }

  const keycloakLogin = useCallback(() => {
    keycloak.login({
      redirectUri: process.env.REACT_APP_BASE_URL,
      //idpHint: 'one-beyond',
    });
  }, [keycloak]);

  const keycloakLogOut = useCallback(() => {
    keycloak.logout({ redirectUri: process.env.REACT_APP_BASE_URL });
  }, [keycloak]);

  return (
    <header id='home'>
      <ParticlesBg type='circle' bg={true} />

      <nav id='nav-wrap'>
        <ul id='nav' className='nav'>
          <li className='current'>
            <a className='smoothscroll' href='#home'>
              Products
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className='row banner'>
        <div className='banner-text'>
          <div>
            <h1 className='responsive-headline'>Ktuin</h1>
          </div>
          <div>
            <h3>Best ecommerce ever</h3>
          </div>
          <hr />

          <div>
            {keycloak.authenticated && (
              <button onClick={keycloakLogOut}>Logout</button>
            )}
            <ul className='social'>
              <button
                onClick={keycloakLogin}
                className='button btn project-btn'
              >
                <i className='fa fa-gear'></i>Login
              </button>
              <a href='' className='button btn github-btn'>
                <i className='fa fa-shopping-cart'></i>Products
              </a>
            </ul>
          </div>
        </div>
      </div>

      <p className='scrolldown'>
        <a className='smoothscroll' href='#about'>
          <i className='icon-down-circle'></i>
        </a>
      </p>
    </header>
  );
};
