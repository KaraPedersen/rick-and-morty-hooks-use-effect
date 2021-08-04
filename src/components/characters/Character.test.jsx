import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  const character = {
    name: 'Pickle Rick',
    image: 'http://image.com'
  };

  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(<Character name={character.name} image={character.image}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
