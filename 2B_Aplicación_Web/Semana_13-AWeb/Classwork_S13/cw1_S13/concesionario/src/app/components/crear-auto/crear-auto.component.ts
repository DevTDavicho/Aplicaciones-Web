import { Component, ViewChild } from '@angular/core';
import { AutoService } from 'src/app/services/auto.service';
import { CargarService } from 'src/app/services/cargar.service';
import { Auto } from '../../models/autos';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-auto',
  templateUrl: './crear-auto.component.html',
  styleUrls: ['./crear-auto.component.css'],
  providers: [AutoService, CargarService]
})
export class CrearAutoComponent {
  public titulo: string;
  public auto: Auto;
  public autoGuardar: Auto;
  public url: string;
  public status: string;
  public idGuardado: string;
  public archivosParaCargar: Array<File>;
  @ViewChild('archivoImagen') fileInput: any
  constructor(
    private _autoService: AutoService,
    private _cargarService: CargarService
  ){
    this.titulo="/GUARDAR AUTO";
    this.url = Global.url;
    this.auto = new Auto('','','','',20,10,'');
    this.autoGuardar = new Auto('','','','',20,10,'');
    this.status = "";
    this.idGuardado = "";
    this.archivosParaCargar = [];
  }

  guardarAuto(form: NgForm){
    this._autoService.guardarAuto(this.auto).subscribe(
      response => {
        if(response.auto){
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(Global.url + "subir-imagen/" + response.auto._id, [], this.archivosParaCargar, 'imagen')
            .then((result: any)=>{
              this.autoGuardar = result.response;
              this.status = "success";
              console.log(response.auto._id);
              this.idGuardado=response.auto._id;
              form.reset();
              this.fileInput.nativeElement.value = '';
            });
          }else{
            this.status = 'failed';
          }
        }else{
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }
  imagenChangeEvent(archivoSeleccionado: any){
    this.archivosParaCargar = <Array<File>>archivoSeleccionado.target.files;
  }
}
