const data = require('../data/zoo_data');

const findEmployee = (object) => {
  if (object.name || object.id) {
    const foundEmployee = data.employees
      .find((employee) => [employee.firstName, employee.lastName].includes(object.name)
      || employee.id === object.id);
    return foundEmployee;
  }
};
// Estava construindo arrayEmployees
const allEmployees = () => {
  const arrayEmployees = [];
  return arrayEmployees;
};

const getEmployeesCoverage = (object) => {
  // seu código aqui
  if (!object) {
    return allEmployees();
  }
  findEmployee(object);
};

console.log(findEmployee({ name: 'Nelson' }));
console.log(findEmployee({ id:'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' }));

module.exports = getEmployeesCoverage;
