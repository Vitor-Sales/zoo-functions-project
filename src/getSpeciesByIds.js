const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui

  const returnSpecies = data.species.filter((specie) => ids.includes(specie.id));
  return returnSpecies;
};

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));
// console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46', '0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
