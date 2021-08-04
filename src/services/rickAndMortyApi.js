export const fetchQuotes = async () => {
  const res = await
  fetch('https://rickandmortyapi.com/api/character');

  const json = await res.json();

  return json.map(({ character, quote, image }) => ({
    id: `${character} - ${quote}`,
    name: character,
    text: quote,
    image,
  }));
};
