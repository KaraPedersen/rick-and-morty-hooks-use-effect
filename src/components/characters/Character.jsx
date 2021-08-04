import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, species, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <h2>{name}</h2>
      <p>&quot;{species}&quot;</p>
    </figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string,
};

export default Character;
