require("colors");
const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Numero base para la tabla de multiplicar".green,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe de ser un numero".red;
    }
    return true;
  })
  .options("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Numero limite para la tabla de multiplicar".green,
  })
  .options("l", {
    alias: "listado",
    type: "boolean",
    default: false,
    describe:
      "True = ver listado en consola, False = No ver el listado en consola"
        .green,
  }).argv;

module.exports = argv;
