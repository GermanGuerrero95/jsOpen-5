//Tarea 5
const heigth = 181;
const heigthTwo = 1.81;
const weigth = 80.5;
const heigthRounded = Math.ceil(heigthTwo);
const weigthRounded = Math.floor(weigth);
const max = Number.MAX_VALUE;
const verificar = max + 1;

console.log(heigth);
console.log(heigthTwo);
console.log(weigth);
console.log(heigthRounded);
console.log(weigthRounded);
console.log(max);
if (max === verificar) {
  console.log(true);
} else {
  console.log(false);
}
