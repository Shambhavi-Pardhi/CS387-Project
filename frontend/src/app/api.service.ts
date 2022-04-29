import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  // see the params mentioned in the backend question file. write in format shown below.
  // func_name(param1: type1, param2: type2, ...) {
  //   return this.http.{{query type}}<any>("http://localhost:{{port number here}}/api/{{api name here}}", {params: {param1: param1, param2: param2, ...}})}});
  // }
  addQuestion(){

  }

  getUserType(auth_token:string){
    return this.httpClient.get<any>("http://localhost:8080/api/getUserType", {params: {auth_token: auth_token}});
  }
}
