const data = require('../data/zoo_data');

const parameterAnimal = (scheduleTarget) => data.species
  .find((specie) => specie.name === scheduleTarget).availability;

const noParameter = () => {
  const hoursEntries = Object.entries(data.hours);
  const scheduleObj = {};
  hoursEntries.forEach((entry) => {
    // console.log(entry[0]);
    if (entry[0] === 'Monday') {
      scheduleObj[entry[0]] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      }
    } else {
      scheduleObj[entry[0]] = {
        officeHour: `Open from ${entry[1].open}am until ${entry[1].close}pm`,
        exhibition: data.species
          .filter((specie) => specie.availability.includes(entry[0]))
          .map((animal) => animal.name),
      };
    }
  });
  return scheduleObj;
};

const getSchedule = (scheduleTarget) => {
  // seu código aqui
  const allAnimals = data.species.map((specie) => specie.name);
  if (allAnimals.includes(scheduleTarget)) {
    return parameterAnimal(scheduleTarget);
  }
  if (!scheduleTarget) {
    return noParameter();
  }
};

// console.log(getSchedule('tigers'));
console.log(getSchedule());

module.exports = getSchedule;
