const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
  .find((specie) => specie.name === animal)
  .residents.every((spec) => spec.age >= age);

// console.log(getAnimalsOlderThan('lions', 4));

module.exports = getAnimalsOlderThan;
