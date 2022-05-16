const name = "Felipe";
const lastname = "Guerra";

const fullname = `${name} ${lastname} ${5 + 2}`;

function getHigh(fullname) {
  return fullname;
}

const saludar = `Hola ${getHigh("Felipe Guerra")}`;

console.log(saludar);
