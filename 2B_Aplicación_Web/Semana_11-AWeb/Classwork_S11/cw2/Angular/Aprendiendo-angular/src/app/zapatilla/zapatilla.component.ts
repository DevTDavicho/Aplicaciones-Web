import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatilla.component.html',
    providers: [ZapatillaService]
})
export class ZapatillaComponent implements OnInit{
    public titulo: string="Componente zapatilla";
    public zapatillas: Array<Zapatilla>;
    public color:string;

    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        // this.zapatilla = ["Adidas", "Verde", "80"];
        // this.zapatillas = [
        //     new Zapatilla("Adidas", "Verde", 80, true),
        //     new Zapatilla("Nike", "Verde", 90, true),
        //     new Zapatilla("Rebook", "Verde", 100, true),
        //     new Zapatilla("Puma", "Verde", 120, false),
        // ];
        this.zapatillas = [];
        this.color = 'blue';
    }

    // Metodo  que se ejecuta cada vez que cargo un componente
    ngOnInit() {
        this.zapatillas = this._zapatillaService.getZapatillas();
        // console.log("Componente Zapatilla cargado");
    }
    ngDoCheck() {

    }
    ngOnDestroy() {

    }
}