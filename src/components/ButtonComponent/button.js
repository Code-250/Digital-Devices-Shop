import React from 'react';
import './button.style.scss';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div className='button-holder'>
      <button className='custom-button' {...otherProps}>
        {children}
      </button>
    </div>
  );
};
export default CustomButton;
