const { crearArchivoTabla } = require("./helper/multiplicar");
require("colors");
const argv = require("./config/yargs");
console.clear();
console.log(argv);

//*Funcio creadora de tablas de multiplicar
//const base = 0;
// const [, , base] = process.argv;
// const [, numero] = base.split("=");
crearArchivoTabla(argv.b, argv.h, argv.l)
  .then((res) => console.log(res.green))
  .catch((err) => console.log(err.message.red));
