const data = require('../data/zoo_data');

const hoursEntries = Object.entries(data.hours);
const allDays = hoursEntries.map((entry) => entry[0]);

const parameterAnimal = (scheduleTarget) => data.species
  .find((specie) => specie.name === scheduleTarget).availability;

const noParameter = () => {
  const scheduleObj = {};
  hoursEntries.forEach((entry) => {
    // console.log(entry[0]);
    if (entry[0] === 'Monday') {
      scheduleObj[entry[0]] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
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

const dayParameter = (scheduleTarget) => {
  if (scheduleTarget === 'Monday') {
    return {
      Monday: { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' },
    };
  }
  if (allDays.includes(scheduleTarget)) {
    const findDay = hoursEntries.find((day) => day[0] === scheduleTarget);
    return {
      [scheduleTarget]: {
        officeHour: `Open from ${findDay[1].open}am until ${findDay[1].close}pm`,
        exhibition: data.species.filter((specie) => specie.availability.includes(findDay[0]))
          .map((animal) => animal.name) },
    };
  }
};

const getSchedule = (scheduleTarget) => {
  // seu código aqui
  const allAnimals = data.species.map((specie) => specie.name);
  if (allAnimals.includes(scheduleTarget)) {
    return parameterAnimal(scheduleTarget);
  }
  if (allDays.includes(scheduleTarget)) {
    return dayParameter(scheduleTarget);
  }
  return noParameter();
};

// console.log(getSchedule());
// console.log(getSchedule('tigers'));
// console.log(dayParameter('Tuesday'));
// console.log(dayParameter('Monday'));
// console.log(dayParameter('xablau'));

module.exports = getSchedule;
