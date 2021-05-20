import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import './header.style.scss';
import { auth } from '../firebase/firebase.config';

const Header = ({ currentUser }) => (
  <div className='header-container'>
    <Link className='logo-container' to='/'>
      <Logo />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contactUs'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          Logout
        </div>
      ) : (
        <Link className='option' to='/signin'>
          LogIn
        </Link>
      )}
    </div>
  </div>
);
export default Header;
