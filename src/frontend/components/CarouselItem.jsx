import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import removeIcon from '../assets/resources/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite(
      {
        id, cover, title, year, contentRating, duration,
      },
    );
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='carrousel-item'>
      <img className='carrousel-item__img' src={cover} alt={title} />
      <div className='carrousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carrousel-item__details--img'
              src='src/assets/resources/play-icon.webp'
              alt='Play'
            />
          </Link>
          {isList ?
            <img className='carrousel-item__details--img' src={ removeIcon } onClick={() => handleDeleteFavorite(id)} />
            :
            <img  className='carrousel-item__details--img' src='src/assets/resources/plus-icon.webp' onClick={handleSetFavorite} />
          }
        </div>
      </div>
      <p className='carrousel-item__details--title'>
        {title}
      </p>
      <p className='carrousel-item__details--subtitle'>
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
