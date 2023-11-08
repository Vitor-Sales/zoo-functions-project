const data = require('../data/zoo_data');

const isManager = (id) => {
  const checkIfManager = data.employees
    .map((employee) => employee.managers.includes(id));
  if (checkIfManager.includes(true)) {
    return true;
  }
  return false;
};

// console.log(isManager());

const getRelatedEmployees = (managerId) => {
  // seu código aqui
  const arrayNames = [];
  if (isManager(managerId)) {
    data.employees.forEach((employee) => {
      if (employee.managers.includes(managerId)) {
        arrayNames.push(`${employee.firstName} ${employee.lastName}`);
      }
    });
    return arrayNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

// console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
// console.log(getRelatedEmployees('fdb2543b-5662-46a7-8'));
// console.log(getRelatedEmployees(''));

// console.log(data.employees.find((employee) => employee.id === 'fdb2543b-5662-46a7-badc-93d960fdc0a8'));
// console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
