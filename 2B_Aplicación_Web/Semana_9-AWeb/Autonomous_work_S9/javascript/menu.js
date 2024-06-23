function mostrarMenu() {
    const options = prompt("Menu Principal"
        + "\n1. Comparar dos numeros" 
        + "\n2. Sumar y calcular el promedio de numeros" 
        + "\n3. Mostrar los numeros entre dos numeros"
        + "\n4. Mostrar todos los numeros impares entre dos numeros"
        + "\n5. Mostrar los divisores de un numero"
        + "\n6. Determinar si un numero es par o impar"
        + "\n7. Tabla de multiplicar"
        + "\n8. Calculadora"
        + "\n0. Salir"
        + "\nSelecciona una opcion:"
    );
    return options;
}

function validarNumero(num) {
    return !isNaN(num) && num !== null && num !== "";
}

//! Primera opcion
function compararNumeros() {
    let numero1, numero2;

    do {
        numero1 = parseFloat(prompt("Ingresar el primer número (mayor que 0):"));
        if (!validarNumero(numero1)) {
            alert("Número inválido. Por favor, ingresar un número mayor que 0.");
        }
    } while (!validarNumero(numero1));

    do {
        numero2 = parseFloat(prompt("Ingresar el segundo número (mayor que 0):"));
        if (!validarNumero(numero2)) {
            alert("Número inválido. Por favor, ingresar un número mayor que 0.");
        }
    } while (!validarNumero(numero2));

    let resultado;
    if (numero1 > numero2) {
        resultado = "El primer numero (" + numero1 + ") es mayor que el segundo numero (" + numero2 + ")\n" + "-> " + numero1 + " > " + numero2;
    } else if (numero1 < numero2) {
        resultado = "El primer numero (" + numero1 + ") es menor que el segundo numero (" + numero2 + ")\n" + "-> " + numero1 + " < " + numero2;
    } else {
        resultado = "Ambos numeros son iguales (" + numero1 + ")\n" + "-> " + numero1 + " == " + numero2;
    }

    alert(resultado);
    console.log(resultado);
    document.getElementById('resultado').innerText = `Resultado de la operación seleccionada: ${resultado}`;
}

//! Segunda opcion
function calcularSumaMedia() {
    let suma = 0, i = 0, numero;
    
    do {
        numero = parseFloat(prompt("Ingresar un número (negativo para terminar):"));
        if (validarNumero(numero) && numero >= 0) {
            suma += numero;
            i++;
        } else if (numero < 0) {
            break;
        } else {
            alert("Por favor, ingresar un número válido.");
        }
    } while (true);

    if (i > 0) {
        let media = suma / i;
        alert("Suma de los números ingresados: " + suma);
        alert("Media de los números ingresados: " + media);
        console.log("Suma de los números ingresados: " + suma);
        console.log("Media de los números ingresados: " + media);
        document.getElementById('resultado').innerText = `Suma de los números ingresados: ${suma}\nMedia de los números ingresados: ${media}`;
    } else {
        alert("No se han ingresado números válidos.");
    }
}

//! Tercera opcion
function mostrarNumeros() {
    let numero1, numero2;
    do {
        numero1 = parseFloat(prompt("Ingresar el primer número:"));
        if (!validarNumero(numero1)) {
            alert("Número inválido. Por favor, ingresar un número válido.");
        }
    } while (!validarNumero(numero1));

    do {
        numero2 = parseFloat(prompt("Ingresar el segundo número:"));
        if (!validarNumero(numero2)) {
            alert("Número inválido. Por favor, ingresar un número válido.");
        }
    } while (!validarNumero(numero2));

    if (numero1 > numero2) {
        [numero1, numero2] = [numero2, numero1];
    }

    let numerosEntre = "";
    for (let i = numero1 + 1; i < numero2; i++) {
        numerosEntre += i + " ";
    }

    alert("Numeros entre " + numero1 + " y " + numero2 + ": " + numerosEntre);
    console.log("Numeros entre " + numero1 + " y " + numero2 + ": " + numerosEntre);
    document.getElementById('resultado').innerText = `Numeros entre ${numero1} y ${numero2}: ${numerosEntre}`;
}

//! Cuarta opcion
function mostrarImparesEntre() {
    let numero1, numero2;

    do {
        numero1 = parseFloat(prompt("Ingresar el primer número:"));
        if (!validarNumero(numero1)) {
            alert("Número inválido. Por favor, ingresar un número válido.");
        }
    } while (!validarNumero(numero1));

    do {
        numero2 = parseFloat(prompt("Ingresar el segundo número:"));
        if (!validarNumero(numero2)) {
            alert("Número inválido. Por favor, ingresar un número válido.");
        }
    } while (!validarNumero(numero2));

    if (numero1 > numero2) {
        [numero1, numero2] = [numero2, numero1];
    }

    let numerosImparesEntre = "";
    for (let i = numero1 + 1; i < numero2; i++) {
        if (i % 2 !== 0) {
            numerosImparesEntre += i + " ";
        }
    }

    alert("Números impares entre " + numero1 + " y " + numero2 + ": " + numerosImparesEntre);
    console.log("Números impares entre " + numero1 + " y " + numero2 + ": " + numerosImparesEntre);
    document.getElementById('resultado').innerText = `Números impares entre ${numero1} y ${numero2}: ${numerosImparesEntre}`;
}

//! Quinta opcion
function mostrarDivisores() {
    let numero;
    do {
        numero = parseFloat(prompt("Ingresar un número:"));
        if (!validarNumero(numero) || numero <= 0) {
            alert("Número inválido. Por favor, ingresar un número válido.");
        }
    } while (!validarNumero(numero) || numero <= 0);

    let divisores = "";
    for (let i = 1; i <= numero; i++) { // Cambiamos '<' a '<=' para incluir el número mismo
        if (numero % i === 0) {
            divisores += i + " ";
        }
    }

    alert("Divisores de " + numero + ": " + divisores);
    console.log("Divisores de " + numero + ": " + divisores);
    document.getElementById('resultado').innerText = `Divisores de ${numero}: ${divisores}`;
}

//! Sexta opcion
function compararParyImpar() {
    let numero;
    do {
        numero = parseFloat(prompt("Ingresar un número:"));
        if (!validarNumero(numero)) {
            alert("Número inválido. Por favor, ingresar un número válido.");
        }
    } while (!validarNumero(numero));

    const resultado = (numero % 2 === 0) ? "par" : "impar";
    alert("El número " + numero + " es " + resultado + ".");
    console.log("El número " + numero + " es " + resultado + ".");
    document.getElementById('resultado').innerText = `El número ${numero} es ${resultado}.`;
}

//! Septima opcion
function mostrarTablaMultiplicar() {
    let numero;
    do {
        numero = parseFloat(prompt("Ingresar un número:"));
        if (!validarNumero(numero)) {
            alert("Número inválido. Por favor, ingresar un número válido.");
        }
    } while (!validarNumero(numero));
    
    let tabla = "Tabla de multiplicar del " + numero + " :\n";
    for (let i = 0; i <= 12; i++) {
        tabla += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    alert(tabla);
    console.log(tabla);
    document.getElementById('resultado').innerText = `Tabla de multiplicar del ${numero}: \n${tabla}`;
}

//! Octava opcion
function calculadora() {
    let numero1, numero2, opcion, resultado;
    do {
        numero1 = parseFloat(prompt("Ingresar el primer número:"));
        if (!validarNumero(numero1)) {
            alert("Número inválido. Por favor, ingresar un número válido.");
        }
    } while (!validarNumero(numero1));

    do {
        numero2 = parseFloat(prompt("Ingresar el segundo número:"));
        if (!validarNumero(numero2)) {
            alert("Número inválido. Por favor, ingresar un número válido.");
        }
    } while (!validarNumero(numero2));

    opcion = parseInt(prompt("Menu \n"+
        "1. Sumar\n"+
        "2. Restar\n"+
        "3. Multiplicar\n"+
        "4. Dividir\n"+
        "Ingrese una opción:"));
    switch (opcion) {
        case 1:
            resultado = numero1 + numero2;
            alert("El resultado de la suma es: " + resultado);
            break;
        case 2:
            resultado = numero1 - numero2;
            alert("El resultado de la resta es: " + resultado);
            break;
        case 3:
            resultado = numero1 * numero2;
            alert("El resultado de la multiplicacion es: " + resultado);
            break;
        case 4:
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
                alert("El resultado de la division es: " + resultado);
            } else {
                alert("No se puede dividir entre cero");
                resultado = "Indefinido";
            }
            break;
        default:
            alert("Operacion no valida");
            break;
    }

    console.log('Resultado de la operacion seleccionada:' + resultado);
    document.getElementById('resultado').innerText = `Resultado de la operación seleccionada: ${resultado}`;
}

function ejecutarPrograma() {
    let option;
    do {
        option = parseInt(mostrarMenu());
        const arrayOpts = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        if (arrayOpts.includes(option)) {
            switch (option) {
                case 1:
                    alert("Has seleccionado la opcion 1: Comparar dos numeros");
                    compararNumeros();
                    break;
                case 2:
                    alert("Has seleccionado la opcion 2: Sumar y calcular el promedio de numeros");
                    calcularSumaMedia();
                    break;
                case 3:
                    alert("Has seleccionado la opcion 3: Mostrar los numeros entre dos numeros");
                    mostrarNumeros();
                    break;
                case 4:
                    alert("Has seleccionado la opcion 4: Mostrar todos los numeros impares entre dos numeros");
                    mostrarImparesEntre();
                    break;
                case 5:
                    alert("Has seleccionado la opcion 5: Mostrar los divisores de un numero");
                    mostrarDivisores();
                    break;
                case 6:
                    alert("Has seleccionado la opcion 6: Determinar si un numero es par o impar");
                    compararParyImpar();
                    break;
                case 7:
                    alert("Has seleccionado la opcion 7: Tabla de multiplicar");
                    mostrarTablaMultiplicar();
                    break;
                case 8:
                    alert("Has seleccionado la opcion 8: Calculadora");
                    calculadora();
                    break;
                case 0:
                    alert("Saliendo del programa");
                    break;
            }
        } else {
            alert("Opcion no valida. Por favor, selecciona una opcion del menu");
        }
    } while (option !== 0);
}