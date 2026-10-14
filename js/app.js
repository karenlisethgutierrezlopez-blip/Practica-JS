const nombre = "Karen Liseth";
const edad = 17;
const ciudad = "Armenia";

console.log(`Me llamo ${nombre} tengo ${edad} años y vivo en ${ciudad}`);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof ciudad);

const AñoActual = 2026;
const AñoNacimiento = AñoActual - edad;

console.log("Mi año de nacimiento aproximado es", AñoNacimiento);

const Edad = "17";

console.log(Edad + 1);
console.log(Number(Edad) +1);

/*
Al momento de sumar el 17 con el 1, el 17 al ser un String JS concatena ambos numeros y
da como resultado 171 en cambio al convertir el 17 a numero, JS hará la suma correctamente 
dandonos un resultado de 18.
*/