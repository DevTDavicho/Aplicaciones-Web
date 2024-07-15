import { Component } from '@angular/core';
import { AutoService } from 'src/app/services/auto.service';
import { Auto } from "../../models/autos";
import { Global } from '../../services/global';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css'],
  providers: [AutoService]
})
export class AutosComponent {
  public autos: Auto[];
  public url: string;
  constructor (
    private _autoService: AutoService
  ){
    this.url = Global.url;
    this.autos = [];
  }

  ngOnInit(): void {
    this.getAutos();
  }

  getAutos (){
    this._autoService.getAutos().subscribe(
      response => {
        if (response.autos) {
          this.autos = response.autos;
          console.log("aqui" + response)
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
