export const fetchCharacters = async () => {
  const res = await
  fetch('https://rickandmortyapi.com/api/character');

  const json = await res.json();

  return json.map(({ character, location, episode }) => ({
    id: `${character} - ${location}`,
    name: character,
    text: location,
    episode,
  }));
};
