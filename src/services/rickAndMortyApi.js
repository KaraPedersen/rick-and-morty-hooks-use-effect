// eslint-disable-next-line max-len
const randomArray = (length = 10, max = 671) => [...new Array(length)].map(() => Math.round(Math.random() * max));

export const fetchCharacters = async () => {

  const arr = randomArray();
  const results = await Promise.all(arr.map(async characterId => {
    const res = await fetchCharacter(characterId);
    return res;
  }));

  return results;
};

export const fetchCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();

  return json;
};
