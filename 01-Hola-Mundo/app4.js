const persona = [
  {
    id: 1,
    nombre: "Marco",
  },
  {
    id: 2,
    nombre: "Pablo",
  },
  {
    id: 3,
    nombre: "Dario",
  },
];

const salario = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1300,
  },
];

const getEmpleado = (id) => {
  const salarioo = salario.find((e) => e.id === id)?.salario;
  const empleado = persona.find((e) => e.id === id)?.nombre;

  return new Promise((resolve, reje) => {
    salarioo && empleado
      ? resolve(`El empelado ${empleado} tiene un salario de ${salarioo}`)
      : reje(`El salario con el id ${id} no existe`);
  });
};

getEmpleado(1)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
