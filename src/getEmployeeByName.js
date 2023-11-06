const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => data.employees
  .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);

console.log(getEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
