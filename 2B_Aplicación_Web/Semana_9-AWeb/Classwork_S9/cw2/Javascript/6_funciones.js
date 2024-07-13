function mensaje() {
    console.log("Hola 2");
    alert("Bienvenido");
    return "Ok";
}

// idem
var texto = mensaje();
console.log(mensaje());

//! 
function suma(numero1, numero2) {
    console.log("Suma " + numero1 + numero2); // Pasa como cadena de texto
    console.log("Suma " + (numero1 + numero2)); // Retorna el 7 = (4 + 3)
}
suma(4, 3)