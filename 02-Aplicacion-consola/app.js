const { crearArchivoTabla } = require("./helper/multiplicar");
console.clear();

const [, , base] = process.argv;
const [, numero] = base.split("=");

//*Funcio creadora de tablas de multiplicar
//const base = 0;
crearArchivoTabla(Number(numero))
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
