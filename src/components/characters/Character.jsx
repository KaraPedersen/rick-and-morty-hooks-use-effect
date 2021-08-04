import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, text, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <h2>{name}</h2>
      <p>&quot;{text}&quot;</p>
    </figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
};

export default Character;
