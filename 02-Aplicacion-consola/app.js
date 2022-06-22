const { crearArchivoTabla } = require("./helper/multiplicar");
const base = 0;
console.clear();
crearArchivoTabla(base)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
