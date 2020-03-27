import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section className='carrousel'>
    <div className='carrousel__container'>
      {children}
    </div>
  </section>
);

export default Carousel;
