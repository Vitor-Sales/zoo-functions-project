const data = require('../data/zoo_data');

const findEmployee = (object) => {
  if (object.name) {
    const foundEmployee = data.employees
      .find((employee) => employee.firstName === object.name || employee.lastName === object.name);
    return foundEmployee;
  }
};

const getEmployeesCoverage = (object) => {
  // seu código aqui
  findEmployee(object);
};

console.log(findEmployee({ nam: 'Nelson' }));

module.exports = getEmployeesCoverage;
