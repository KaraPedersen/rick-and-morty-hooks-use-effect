import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character, location, episode }) => (
  <figure>
    <img src={episode} alt={character} />
    <figcaption>
      <h2>{character}</h2>
      <p>&quot;{location}&quot;</p>
    </figcaption>
  </figure>
);

Character.propTypes = {
  character: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
};

export default Character;
