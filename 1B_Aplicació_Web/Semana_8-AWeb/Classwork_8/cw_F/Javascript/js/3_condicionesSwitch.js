/*
    ! Operadores relacionales
    <> <= >= == === !=
*/

var anio = 2024;
if (anio > 2022) {
    console.log("Superamos la pandemia");
} else {
    console.log("Estamos en pandemia")
}


/*
    ! Operadores logicos
    && (and) 
    || (or) 
    ! (not)
*/

if (anio >= 2020 && anio <= 2022) {
    console.log("Estamos en pandemia");
}


//! Switch
var edad = 18;
switch (edad) {
    case 12:
        console.log("Eres un niño");
        break;

    case 18:
        console.log("Eres un joven");
        break;

    case 65:
        console.log("Eres un adulto mayor");
        break;

    default:
        console.log("No se encuentra en la lista");
        break;
}