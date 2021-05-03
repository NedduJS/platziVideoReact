import React from 'react';

import '../assets/styles/components/Carousel.css';

const Carousel = ({ children }) => {
  return (
    <div className='carousel'>
      <div className='carousel__container'>{children}</div>
    </div>
  );
};

export default Carousel;
