export const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');

  const json = await res.json();

  // const character = json.characterText;
  // console.log(character, 'hello world');
  // return character;
  // };
  
  return json.results.map(({ character, name, image, species }) => ({
    id: `${character} - ${name}`,
    name,
    species,
    image,
  }));
};
