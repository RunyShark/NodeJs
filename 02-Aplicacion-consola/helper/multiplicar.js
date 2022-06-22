const fs = require("fs");

const crearArchivoTabla = async (base, listado) => {
  if (base <= 0 || isNaN(base)) {
    throw Error(
      `Algo salio mal la ${
        base !== "string"
          ? `${base} no es un numeor`
          : `${base} es un numero menor a 1`
      } `
    );
  }

  try {
    let salida = "";
    for (let i = 1; i < 11; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listado) {
      console.log("========================");
      console.log(`        Tabla del`, base);
      console.log("========================");
      console.log(salida);
    }
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `
    Tabla del ${base} fue creada`;
  } catch (error) {
    console.log("========================");
    console.log(`La tabla del`, base, `No se pudo guardar correctamente`);
    console.log("========================");
    console.log(error.message);
  }
};

module.exports = {
  crearArchivoTabla,
};
