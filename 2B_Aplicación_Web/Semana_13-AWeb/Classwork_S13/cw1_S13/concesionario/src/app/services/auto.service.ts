import { Injectable } from "@angular/core";
import { Global } from "./global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Auto } from '../models/autos';

@Injectable()
export class AutoService {
  public url: string;
  constructor (
    private _http: HttpClient
  ){
    this.url = Global.url;
  }

  // Ver autos
  // http://localhost:3700/autos
  getAutos ():Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'autos', {headers: headers});
  }

  //! Friday
  // Guardar auto
  // http://localhost:3700/guardar-auto
  guardarAuto(auto: Auto): Observable<any>{
    let params = JSON.stringify(auto);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url + 'guardar-auto', params, {headers:headers});
  }

  //editar auto
  //http://localhost:3600/auto/:id
  updateAuto(auto: Auto): Observable<any>{
    let params = JSON.stringify(auto);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url + 'auto/' + auto._id, params, {headers:headers});
  }

  //ver un auto
  //http://localhost:3600/auto/:id
  getAuto(id: String):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url + 'auto/' + id, {headers:headers});
  }
  
  //eliminar un auto
  //http://localhost:3600/auto/:id
  deleteAuto(id: String):Observable<any>{
      let headers = new HttpHeaders().set('Content-Type','application/json');
      return this._http.delete(this.url+'auto/' + id, {headers:headers});
  }
}
