const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const employeeObj = data.employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
  return !employeeObj ? {} : employeeObj;
};

// console.log(getEmployeeByName('Nels'));

module.exports = getEmployeeByName;
