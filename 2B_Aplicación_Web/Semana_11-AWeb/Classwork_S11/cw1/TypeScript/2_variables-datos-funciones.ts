// var auto = ["Mazda", "Ford", "BMW", "Toyota"];
var auto:Array<String> = ["Mazda", "Ford", "BMW", "Toyota"];
// var precio = 150;
var precio:number|string = 150;
precio = "Valor";
// var numero = 5;
var numero:any[] = [5, "asdsad", 2, "asdasd"];
console.log(auto, precio, numero);

function getNumero(numero) {
    return "El numero es " + numero;
}
console.log(getNumero(3));