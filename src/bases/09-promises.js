import { getHeroesById } from "./08-import-export";

const promesa = new Promise((resolve, reject) => console.log(resolve));
const promesa2 = new Promise((resolve, reject) => console.log(reject));
const promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
  const heroe = getHeroesById(1)
  if(heroe) resolve(heroe)
  else reject('No se encontro el heroe')
  }, 2000);
})

promesa3.then((hero) => {
  console.log(hero)
}).catch((err) => {
  console.warn(err)
}
)

const getHeroesByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroesById(id)
      if(heroe) resolve(heroe)
      else reject('No se encontro el heroe')
    }, 2000);
  })
}

getHeroesByIdAsync(1).then((hero) => console.log).catch((err) => {
  console.warn(err)
})  