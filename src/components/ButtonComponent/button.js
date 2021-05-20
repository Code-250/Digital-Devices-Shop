import React from 'react';
import './button.style.scss';

const CustomButton = ({ children, isGoogle, ...otherProps }) => {
  return (
    <div className='button-holder'>
      <button
        className={`${isGoogle ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};
export default CustomButton;
