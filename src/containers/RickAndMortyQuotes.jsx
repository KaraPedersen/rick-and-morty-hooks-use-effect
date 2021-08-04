import React, { useEffect, useState } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import { fetchQuotes } from '../services/rickAndMortyApi';

const RickAndMortyQuotes = () => {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(async () => {
    const quotes = await fetchQuotes();
    setQuotes(quotes);
    setLoading(false);
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return <QuoteList quotes={quotes} />;
};

export default RickAndMortyQuotes;
