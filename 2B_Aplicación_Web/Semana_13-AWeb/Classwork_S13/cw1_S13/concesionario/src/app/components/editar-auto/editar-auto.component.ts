import { Component } from '@angular/core';
import { AutoService } from '../../services/auto.service';
import { CargarService } from '../../services/cargar.service';
import { Auto } from '../../models/autos';
import { Global } from '../../services/global';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrls: ['./editar-auto.component.css']
})
export class EditarAutoComponent {
  public titulo: string;
  public auto: Auto;
  public autoGuardar: Auto;
  public url: string;
  public archivosParaCargar: Array<File>;
  public status: string;
  public idGuardado: string;

  constructor(
    private _autoService: AutoService,
    private _cargarService: CargarService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.titulo = "EDITAR AUTO";
    this.url = Global.url;
    this.auto = new Auto("", "", "", "", 2024, 5000, "");
    this.autoGuardar = new Auto("", "", "", "", 2024, 5000, "");
    this.archivosParaCargar = [];
    this.status = "";
    this.idGuardado = "";
  }
  ngOnInit(): void{
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
        console.log(<any>error);
      }
    );
  }

  guardarAuto(form: NgForm){
    this._autoService.updateAuto(this.auto).subscribe(
      response => {
        if(response.auto){
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(Global.url + "subir-imagen/" + response.auto._id, [], this.archivosParaCargar, 'imagen')
            .then((result:any) => {
              this.autoGuardar = result.response;
              this.status = 'success';
              form.reset();
              //this.fileInput.nativeElement.value='';
            });
          }else{
            this.autoGuardar = response.auto;
            this.status = 'success';
            form.reset();
        }
      }else{
        this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar = <Array<File>>archivoSeleccionado.target.files;
  }
}
