import heroes, {owners}  from "../data/heroes";

const getHeroesById = (id) => {
  const heroe = heroes.find(heroe => heroe.id === id);
  return heroe;
}

console.log(getHeroesById(2));

const getHeroesByOwner = (owner) => {
  const heroesByOwner = heroes.filter(heroe => heroe.owner === owner);
  return heroesByOwner;
}

console.log(getHeroesByOwner('DC'));

export {getHeroesByOwner, getHeroesById};