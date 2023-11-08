const data = require('../data/zoo_data');

const animalNotUsed = () => {
  const countBySpecies = {};
  data.species.forEach((specie) => {
    countBySpecies[specie.name] = specie.residents.length;
  });
  return countBySpecies;
};

const countAnimals = (animal) => {
  // seu código aqui
  let quantityOfSpecie = 0;
  if (!animal) {
    return animalNotUsed();
  }
  if (animal) {
    const findSpecie = data.species.find((specie) => specie.name === animal.species);
    if (animal.sex) {
      const sexCountBySpecie = findSpecie.residents
        .filter((resident) => resident.sex === animal.sex);
      quantityOfSpecie = sexCountBySpecie.length;
      return quantityOfSpecie;
    }
    quantityOfSpecie = findSpecie.residents.length;
    return quantityOfSpecie;
  }
};

// console.log(animalNotUsed());
console.log(countAnimals());
console.log(countAnimals({ species: 'giraffes', sex: 'female' }));
console.log(countAnimals({ species: 'giraffes' }));

module.exports = countAnimals;
