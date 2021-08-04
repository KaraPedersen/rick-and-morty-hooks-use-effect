import React from  'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => (
  <ul>
    {characters.map((character, i) => (
      <li key={character.id + i}>
        <Character {...character} />
      </li>
    ))}
  </ul>
);

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default CharacterList;
