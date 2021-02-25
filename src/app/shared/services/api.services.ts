import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';




import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
   private dominio: string;

   constructor(private http: HttpClient ) {
      this.dominio = environment.apiURL;
   }

   public getMethod(puerto, endpoint):Observable<any[]>{
    let urlOperation = this.dominio+puerto+endpoint;
    return this.http.get<any>(urlOperation);
  }

  public postMethod(puerto, endpoint,data):Observable<any[]>{
    let urlOperation = this.dominio+puerto+endpoint;
    return this.http.post<any>(urlOperation,data);
  }

  public patchMethod(puerto, endpoint,data):Observable<any[]>{
    let urlOperation = this.dominio+puerto+endpoint;
    return this.http.patch<any>(urlOperation,data);
  }

  public deleteMethod(puerto, endpoint):Observable<any[]>{
    let urlOperation = this.dominio+puerto+endpoint;
    return this.http.delete<any>(urlOperation);
  }

  


//    public getMethod(puerto, endpoint) {
      
//     let urlOperation = this.dominio+puerto+endpoint;
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');    

//     let options = new RequestOptions();
//     options.headers = headers;
//     return this._http.get(urlOperation, options).map(res => res.json());

//   }


}
