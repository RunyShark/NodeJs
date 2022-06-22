const { crearArchivoTabla } = require("./helper/multiplicar");
const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe de ser un numero";
    }
    return true;
  })
  .options("l", {
    alias: "listado",
    type: "boolean",
    demandOption: true,
    default: false,
  }).argv;

console.clear();
console.log(argv);

//*Funcio creadora de tablas de multiplicar
//const base = 0;
// const [, , base] = process.argv;
// const [, numero] = base.split("=");
crearArchivoTabla(argv.b, argv.l)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
