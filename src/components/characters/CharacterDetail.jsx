import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharacterDetail = ({ name, status, species, type, gender, origin, location, image }) => (
  <figure>
    <h2>{name}</h2>
    <img src={image}/>
    <figcaption>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Type: {type}</p>
      <p>Gender: {gender}</p>
      <p>Origin: {origin}</p>
      <p>Location: {location}</p>
    </figcaption>
    <Link to="/">Return Home</Link>
  </figure>
);

CharacterDetail.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  type: PropTypes.string,
  gender: PropTypes.string,
  origin: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
};

export default CharacterDetail;
