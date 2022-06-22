const fs = require("fs");

const crearArchivoTabla = async (base) => {
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
    console.log("========================");
    console.log(`        Tabla del`, base);
    console.log("========================");
    let salida = "";
    for (let i = 1; i < 11; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `${salida}
    Tabla del ${base} creada`;
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
