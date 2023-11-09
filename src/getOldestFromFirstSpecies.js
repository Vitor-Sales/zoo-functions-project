const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  // seu código aqui
  const findPerson = data.employees.find((employee) => employee.id === id);
  const firstSpecies = data.species.find((specie) => specie.id === findPerson.responsibleFor[0]);
  const oldestFromSpecie = firstSpecies.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldestFromSpecie[0]);
};

console.log(getOldestFromFirstSpecies('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = getOldestFromFirstSpecies;
