import React, { useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { Clear } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import '../assets/styles/components/Search.css';

import { search } from '../actions';
import Results from './Results';

const Search = ({ isHome, isSearching, search }) => {
  const [input, setInput] = useState('');
  const inputStyle = classNames('input', {
    isHome,
  });

  const handleChange = (e) => {
    setInput(e.target.value);
    search(e.target.value);
  };

  const handleClear = () => {
    search('');
    setInput('');
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <div className='searchSection'>
        <input
          type='text'
          className={inputStyle}
          placeholder='Buscar...'
          onChange={handleChange}
          value={input}
        />
        <IconButton className='removebtn' onClick={handleClear}>
          <Clear />
        </IconButton>
      </div>
      {isSearching && <Results />}
    </section>
  );
};

const mapDispatchToProps = {
  search,
};

const mapStateToProps = (state) => {
  return {
    isSearching: state.isSearching,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
