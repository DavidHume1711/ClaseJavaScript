const miarreglo = [0];

miarreglo.push(3);
miarreglo.push(4);
miarreglo.push(5);
miarreglo.push(6);

const otroarreglo = [...miarreglo];

otroarreglo.push(7);

console.log(miarreglo);
console.log(otroarreglo);

const persona = {
  nombre: "Felipe",
  apellido: "Guerra",
  direccion: {
    calle: 40,
    cr: 20,
    barrio: "ciudad modelo",
  },
};

const otroarreglo2 = [15, ...miarreglo, 8, "Felipe", persona];

const arreglo3 = otroarreglo.map((x) => x * 2);
console.log(arreglo3);

let arreglo = [15, "casa"];

let [num1] = arreglo;

console.log(num1);

let [, vivienda] = arreglo;

console.log(vivienda);

const miPrimeraFuncion = (valor) => `Hola ${valor}`;

console.log(miPrimeraFuncion("Felipe"));

const arreglo4 = [4, miPrimeraFuncion];

let [, saludo] = arreglo4;

console.log(saludo("bien?"));

const miSegundaFuncion = (valor) => {
  return [
    valor,
    () => {
      console.log(valor);
    },
  ];
};

const arreglofinal = miSegundaFuncion("hola");

let [, valor2] = arreglofinal;
valor2();
