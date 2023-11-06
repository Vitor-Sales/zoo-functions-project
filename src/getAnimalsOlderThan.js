const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  const findAnimal = data.species.find((specie) => specie.name === animal);
  const checkAge = findAnimal.residents.every((spec) => spec.age >= age);
  return checkAge;
};

console.log(getAnimalsOlderThan('lions', 4));

module.exports = getAnimalsOlderThan;
