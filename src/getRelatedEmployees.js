const data = require('../data/zoo_data');

const isManager = (id) => {
  const checkIfManager = data.employees
    .find((employee) => employee.id === id)
    .managers.some((manager) => manager.length > 0);
    return checkIfManager;
}
const getRelatedEmployees = (managerId) => {
  // seu código aqui
};

isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8');
// console.log(data.employees.find((employee) => employee.id === '9e7d4524-363c-416a-8759-8aa7e50c0992').managers.some((manager) => manager.length > 0));
module.exports = { isManager, getRelatedEmployees };
