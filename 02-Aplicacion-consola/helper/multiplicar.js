const fs = require("fs");
require("colors");
const crearArchivoTabla = async (base, hasta, listado) => {
  if (base <= 0 || isNaN(base)) {
    throw Error(
      `Algo salio mal la ${
        base !== "string"
          ? `${base} no es un numeor`
          : `${base} es un numero menor a 1`
      } `.red
    );
  }

  try {
    let salida = "";
    for (let i = 1; i < hasta + 1; i++) {
      salida += `${base} ${"x".brightCyan} ${i} ${"=".brightCyan} ${
        base * i
      }\n`;
    }
    if (listado) {
      console.log("========================".rainbow);
      console.log(`        Tabla del`.blue, base);
      console.log("========================".rainbow);
      console.log(salida);
    }
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `
    Tabla del ${base} fue creada`;
  } catch (error) {
    console.log("========================".red);
    console.log(`La tabla del`, base, `No se pudo guardar correctamente`.red);
    console.log("========================".red);
    console.log(error.message);
  }
};

module.exports = {
  crearArchivoTabla,
};
