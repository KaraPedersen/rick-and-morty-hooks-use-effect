import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterDetail component', () => {
  const character = 
    {
      name: 'test',
      status: 'test',
      species: 'test',
      type: 'test',
      gender: 'test',
      origin: {
        name: 'test'
      },
      location: {
        name: 'test'
      },
      image:'test',
    }
  ;

  afterEach(() => cleanup());
  it('renders CharacterDetail', () => {
    const { asFragment } = render(<MemoryRouter><CharacterDetail 
      name={character.name}
      status={character.status}
      species={character.species}
      type={character.type}
      gender={character.gender}
      origin={character.origin.name}
      location={character.location.name}
      image={character.image}
    /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
