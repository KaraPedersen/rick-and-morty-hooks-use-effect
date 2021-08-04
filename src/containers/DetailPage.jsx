  
import React, { useState, useEffect } from 'react';
import { fetchCharacter } from '../services/rickAndMortyApi';
import { useParams } from 'react-router';
import CharacterDetail from '../components/characters/CharacterDetail';

const DetailPage = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    const character = await fetchCharacter(id);
    setCharacter(character);
    setLoading(false);
  }, [id]);

  if(loading) return <h1>Loading...</h1>;
  return <CharacterDetail
    name={character.name}
    status={character.status}
    species={character.species}
    type={character.type}
    gender={character.gender}
    origin={character.origin.name}
    location={character.location.name}
    image={character.image}/>;
};

export default DetailPage; 
