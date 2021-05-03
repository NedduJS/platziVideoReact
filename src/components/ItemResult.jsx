import React from 'react';
import { connect } from 'react-redux';

import { setFavorite, deleteFavorite } from '../actions';

import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
import '../assets/styles/components/ItemResults.css';

const ItemResult = (props) => {
  const {
    id,
    cover,
    title,
    type,
    year,
    contentRating,
    duration,
    isList,
  } = props;

  const handleRemove = (itemId) => {
    props.deleteFavorite(itemId);
  };

  const handlePlus = () => {
    props.setFavorite({ id, cover, title, year, contentRating, duration });
  };

  return (
    <div className='ItemResult'>
      <img src={cover} alt='' />
      <p className='title'>{title}</p>
      <p className='type'>{type}</p>
      {isList ? (
        <img src={removeIcon} alt='removeIcon' onClick={handleRemove} />
      ) : (
        <img src={plusIcon} alt='plusIcon' onClick={handlePlus} />
      )}
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(ItemResult);
