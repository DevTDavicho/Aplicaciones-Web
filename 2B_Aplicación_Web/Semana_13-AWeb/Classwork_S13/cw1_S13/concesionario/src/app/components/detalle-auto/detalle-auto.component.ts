import { Component } from '@angular/core';
import { Auto } from '../../models/autos';
import { AutoService } from '../../services/auto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-detalle-auto',
  templateUrl: './detalle-auto.component.html',
  styleUrls: ['./detalle-auto.component.css']
})
export class DetalleAutoComponent {
  public url: string;
  public auto: Auto;
  public confirm: boolean;

  constructor(
    private _autoService: AutoService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url = Global.url;
    this.auto = new Auto('', '', '', '', 20, 10, '');
    this.confirm = false;
  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.getAuto(id);
    })
  }

  getAuto(id: String){
    this._autoService.getAuto(id).subscribe(
      response => {
        this.auto = response.auto;
      },
      error => {
        console.log(error);
      }
    )
  }

  setConfirm(confirm: boolean){
    this.confirm = confirm;
  }
  borrarAuto(id: String){
    this._autoService.deleteAuto(id).subscribe(
      response => {
        if(response.auto){
          this._router.navigate(['/autos']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
}
