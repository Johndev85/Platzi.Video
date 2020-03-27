import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carrousel-item'>
    <img className='carrousel-item__img' src={cover} alt={title} />
    <div className='carrousel-item__details'>
      <div>
        <img className='carrousel-item__details--img' src='src/assets/resources/play-icon.webp' />
        <img className='carrousel-item__details--img' src='src/assets/resources/plus-icon.webp' />
      </div>
    </div>
    <p className='carrousel-item__details--title'> {title} </p>
    <p className='carrousel-item__details--subtitle'> 
      {`${year} ${contentRating} ${duration}`}
    </p>
  </div>
);

/* Añadiendo propTypes al código */
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
