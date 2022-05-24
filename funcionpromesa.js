let empleados = require("./basededatos");

//console.log(empleados);

const getEmpleadobaseById = (id) => empleados.find((emp) => emp.id === id);

//console.log(getEmpleadobaseById(79897465));

const getEmpleadoById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pers = getEmpleadobaseById(id);
      if (pers) {
        resolve(pers);
      } else {
        reject("No lo encontro");
      }
    }, 2500);
  });
};

getEmpleadoById(79897465)
  .then((valorper) => console.log(valorper))
  .catch((val) => console.log(val));
