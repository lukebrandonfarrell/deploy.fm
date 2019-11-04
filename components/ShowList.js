import React from 'react';
import PropTypes from 'prop-types';
import Show from './Show';

const ShowList = ({
  shows,
  currentPlaying,
  setCurrentPlaying,
}) => (
  <div className="showList">
    {shows.map(show => (
      <Show
        setCurrentPlaying={setCurrentPlaying}
        currentPlaying={currentPlaying}
        key={show.number}
        show={show}
      />
    ))}
    <div className="show show--dummy" />
  </div>
);

ShowList.propTypes = {
  shows: PropTypes.array.isRequired,
  currentPlaying: PropTypes.string.isRequired,
  setCurrentPlaying: PropTypes.func.isRequired,
};

export default ShowList;
