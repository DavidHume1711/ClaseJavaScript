const persona = {
  nombre: "Felipe",
  apellido: "Guerra",
  direccion: {
    calle: 40,
    cr: 20,
    barrio: "ciudad modelo",
  },
};
console.log(persona);
console.log(persona.direccion.barrio);
console.log(persona["direccion"]["barrio"]);

const { direccion } = persona;

console.log(direccion);
