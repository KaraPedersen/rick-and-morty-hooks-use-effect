import React from  'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => (
  <ul>
    {characters.map((character) => (
      <li key={character.id}>
        <Character {...character} />
      </li>
    ))}
  </ul>
);

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      character: PropTypes.string,
      location: PropTypes.string,
      episode: PropTypes.string,
    })
  ).isRequired,
};

export default CharacterList;
