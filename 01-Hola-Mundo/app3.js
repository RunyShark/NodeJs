console.log("Inicio de programa"); //*primero

setTimeout(() => {
  console.log("Primer TimeOut"); //*quinto
}, 3000);

setTimeout(() => {
  console.log("Segundo TimeOut"); //*tercero
}, 0);

setTimeout(() => {
  console.log("Tercero TimeOut"); //*cuarto
}, 0);
console.log("Fin de progra"); //*segundo
