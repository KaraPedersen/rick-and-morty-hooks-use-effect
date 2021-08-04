import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => (
  <ul>
    {characters.map(character => (
      <Link to={`/${character.id}`} key={character.id}>
        <li>
          <Character 
            name={character.name}
            image={character.image}
          />
        </li>
      </Link>
    ))}
  </ul>
);

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.int,
      name: PropTypes.string,
      status: PropTypes.string,
      species: PropTypes.string,
      type: PropTypes.string,
      gender: PropTypes.string,
      origin: PropTypes.object,
      location: PropTypes.object,
      image: PropTypes.string,
      episode: PropTypes.arrayOf(
        PropTypes.string
      ),
    })
  ).isRequired,
};

export default CharacterList;
