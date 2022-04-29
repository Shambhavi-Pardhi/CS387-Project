import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private httpClient:HttpClient) { }

  log(message: string) {
    console.log(message);
  }
  sendlog(message: string){
    this.httpClient.post<any>("http://localhost:8080/api/log", {message: message}).subscribe( 
      (data) => {
        console.log(data);
      }
    );
  }

}
