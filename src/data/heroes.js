//archivo utilizado en 08-import-export

const heroes = [
  {
      id: 1,
      name: 'Batman',
      owner: 'DC'
  },
  {
      id: 2,
      name: 'Spiderman',
      owner: 'Marvel'
  },
  {
      id: 3,
      name: 'Superman',
      owner: 'DC'
  },
  {
      id: 4,
      name: 'Flash',
      owner: 'DC'
  },
  {
      id: 5,
      name: 'Wolverine',
      owner: 'Marvel'
  },
];

const owners = ["DC", "Marvel", "Sin dueño"];

// export const owners = ["DC", "Marvel", "Sin dueño"];

// export default heroes;

//exportciones de una sola linea
export {owners, heroes as default};