import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterList component', () => {
  const character = [
    {
      name: 'Pickle Rick',
      image: 'http://image.com'
    }
  ];
  
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    // eslint-disable-next-line max-len
    const { asFragment } = render(<MemoryRouter><CharacterList characters={character}/></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
