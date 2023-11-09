const data = require('../data/zoo_data');

const entrantss = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const countEntrants = (entrants) => {
  let childCount = 0;
  let adultCount = 0;
  let seniorCount = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      childCount += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      adultCount += 1;
    }
    if (entrant.age >= 50) {
      seniorCount += 1;
    }
  });
  return { child: childCount, adult: adultCount, senior: seniorCount };
};

const calculateEntry = (entrants) => {
  // seu código aqui
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  if (entrants) {
    const entrantsObj = countEntrants(entrants);
    const price = data.prices;
    let sum = (entrantsObj.child * price.child);
    sum += (entrantsObj.adult * price.adult) + (entrantsObj.senior * price.senior);
    return sum;
  }

};

console.log(countEntrants(entrantss));
console.log(calculateEntry([]));
console.log(calculateEntry(entrantss));

module.exports = { calculateEntry, countEntrants };
