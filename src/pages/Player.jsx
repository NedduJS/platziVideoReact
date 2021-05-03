import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getVideoSource } from '../actions';

import '../assets/styles/components/Player.css';

const Player = (props) => {
  const {
    match: {
      params: { id },
    },
    playing,
  } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }, []);

  const hasPlaying = Object.keys(playing).length > 0;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <Redirect to='/404' />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
