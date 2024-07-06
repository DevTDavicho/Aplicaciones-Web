interface AutoBase {
    setColor(color);
    getColor();
}

class Auto implements AutoBase{
    public marca: string;
    public color: string;
    public precio: number;
    public anio: number;
    public modelo: number;

    constructor(marca, color, precio, anio) {
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.anio = anio;
    };

    public setColor(color) {
        return this.color = color;
    }

    public getColor() {
        return this.color;
    }
}

// var auto = new Auto();
// auto.marca = "Mazda";
// auto.color = "azul";
// auto.precio = 15000;
// auto.anio = 2010;
// console.log(auto);

var auto = new Auto("Ford", "Negro", 25300, 2018);
console.log("Auto: " + auto);
console.log(auto);

var camioneta = new Auto("Mazda", "Rojo", 2300, 1994);
console.log("Camioneta: " + camioneta);
console.log(camioneta);


class Deportivo extends Auto {
    public techoCorredizo:boolean;
    public setTechoCorredizo(techo) {
        return this.techoCorredizo = techo;
    }
    public getTechoCorredizo() {
        return this.techoCorredizo;
    }
}
var auto2 = new Deportivo("Mercedes", "Plateado", 50000, 2011);
auto2.setTechoCorredizo(true);
console.log("Auto 2: " + auto2);
console.log(auto2);