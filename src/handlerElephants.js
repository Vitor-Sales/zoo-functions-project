const { species } = require('../data/zoo_data');

const getElephants = () =>
  species.find((currentSpecies) => currentSpecies.name === 'elephants');

const averageAge = ({ residents }) =>
  residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;

const computeData = (param, elephants) => {
  switch (param) {
  case 'count':
    return elephants.residents.length;
  case 'names':
    return elephants.residents.map((elephant) => elephant.name);
  case 'averageAge':
    return averageAge(elephants);
  default:
    return null;
  }
};

const handlerElephants = (param) => {
  if (param === undefined) {
    return undefined;
  }
  if (typeof param !== 'string') {
    return 'Parâmetro inválido, é necessário uma string';
  }
  const elephants = getElephants();
  if (Object.keys(elephants).includes(param)) {
    return elephants[param];
  }
  return computeData(param, elephants);
};

// console.log(handlerElephants('averageAge'));
// console.log(handlerElephants('count'));
// console.log(handlerElephants('names'));
console.log(handlerElephants(5));

module.exports = handlerElephants;
