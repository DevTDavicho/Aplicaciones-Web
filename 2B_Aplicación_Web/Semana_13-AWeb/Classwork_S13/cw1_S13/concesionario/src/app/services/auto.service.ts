import { Injectable } from "@angular/core";
import { Global } from "./global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

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
}
