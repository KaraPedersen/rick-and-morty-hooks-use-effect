import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import RickAndMortyCharacters from './RickAndMortyCharacters';

const server = setupServer(
  rest.get(
    'https://rickandmortyapi.com/api/character/1', 
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            'id': 1,
            'name': 'Rick Sanchez',
            'status': 'Alive',
            'species': 'Human',
            'type': '',
            'gender': 'Male',
            'origin': {
              'name': 'Earth (C-137)',
            },
            'location': {
              'name': 'Earth (Replacement Dimension)',
            },
            'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          }
        ])
      );
    }
  )
);

describe('RickyAndMortyCharacters container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  // eslint-disable-next-line max-len
  test('renders RickAndMortyCharacters container with a list characters', async () => {
    render(<MemoryRouter><RickAndMortyCharacters/></MemoryRouter>); 
    
    screen.getByText('Loading...');

    // return waitFor(async () => {
    const ul = await screen.findByRole('list');
    expect(ul.children.length).toEqual(10);
    // }, 5000);
  });
});
