import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {
    public zapatillas:Array<Zapatilla>;
    constructor() {
        this.zapatillas = [
            new Zapatilla("Adidas", "Verde", 80, true),
            new Zapatilla("Nike", "Verde", 90, true),
            new Zapatilla("Rebook", "Verde", 100, true),
            new Zapatilla("Puma", "Verde", 120, false),
        ];
    }
    getZapatillas():Array<Zapatilla> {
        return this.zapatillas;
    }
}