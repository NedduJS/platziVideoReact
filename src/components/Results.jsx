import React from 'react';
import { connect } from 'react-redux';

import ItemResult from './ItemResult';

import '../assets/styles/components/Results.css';

const Results = (props) => {
  const { resultsList } = props;
  return (
    <div className='results'>
      <ul>
        {resultsList.map((item) => {
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <ItemResult key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    resultsList: state.resultsList,
  };
};

export default connect(mapStateToProps, null)(Results);
