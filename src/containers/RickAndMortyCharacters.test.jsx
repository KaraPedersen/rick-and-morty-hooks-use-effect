import React from 'react';
import { render, screen  } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import RickAndMortyCharacters from './RickAndMortyCharacters';

const server = setupServer(
  rest.get(

    'https://rickandmortyapi.com/api/character',
    (req, res, ctx) => {
      return res(
        ctx.json(

          [...Array(+req.params.count)].map((_, i) => ({
            character: 'Rick',
            quote: `This is quote #${i}`,
            image: 'http://image.com',
          }))
        )
      );
    }
  )
);

describe('RickAndMortyCharacters container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of characters', async () => {

    render(<RickAndMortyCharacters />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');

    expect(ul.children.length).toEqual(5);
  });
});
