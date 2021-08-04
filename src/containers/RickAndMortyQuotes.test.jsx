import React from 'react';
import { render, screen  } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import RickAndMortyQuotes from './RickAndMortyQuotes';

const server = setupServer(
  rest.get(

    'https://rickandmortyapi.com/api/quotes/:count',
    (req, res, ctx) => {
      return res(
        ctx.json(

          [...Array(+req.params.count)].map((_, i) => ({
            character: '',
            location: `This is location #${i}`,
            episode: 'http://image.com',
          }))
        )
      );
    }
  )
);

describe('RickAndMortyQuotes container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of characters', async () => {

    render(<RickAndMortyQuotes />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');

    expect(ul.children.length).toEqual(5);
  });
});
