import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = ({ name, species, image }) => (
  <figure>
    <h2>{name}</h2>
    <img src={image}/>
    <figcaption>
      <p>Species: {species}</p>
    </figcaption>
    <Link to="/">Return Home</Link>
  </figure>
);

CharacterDetail.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string,
};

export default CharacterDetail;
