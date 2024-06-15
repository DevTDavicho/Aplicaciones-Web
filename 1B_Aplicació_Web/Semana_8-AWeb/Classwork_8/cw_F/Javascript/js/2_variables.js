'use strict'
// Comentarios
/* Comentarios
varias lineas*/

let nombre = "David";
console.log(nombre);

var pais = "Ecuador";
var ciudad = "Quito";
var anio = 2024;
var anioPais = anio + pais;
console.log(pais); // Ecuador
console.log(ciudad); // Quito
console.log(anio); // 2024
console.log(typeof anio); // number
console.log(anioPais); // 2024Ecuador

//! Suma
var num1 = 5;
var num2 = "2";
console.log(num1 + (+ num2)); // El maás adicional forza a la cadena 2 a comvertirse en número

// Texto
let texto = "Soy un texto";
console.log(texto); // Soy un texto

//* var se usa para variables globales
//* let se usa para variables locales

var numero = 6;
console.log(numero);
if (true) {
    let numero = 4;
    console.log(numero);
}
console.log(numero); // 6

var pi = 3.1416;
// pi = 3.2;
console.log(pi); // 3.1416 o 3.2

var verdadero_falso = true;
console.log(verdadero_falso); // true
console.log(typeof verdadero_falso); // boolean

// NaN -> Not a number