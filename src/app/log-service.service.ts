import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Serveur } from './serveur';
import { Logs_file } from './Logs_file';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LogServiceService {
   Headers=new HttpHeaders();
  constructor(private http:HttpClient) {
    this.Headers.append('content-type','application/json')
   }

  getFileLogs(){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/logs")
  }

  getAllServeurs(){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/serv")
  }

  getAllServeurById(idServ:number){
    return this.http.get<Serveur>("http://192.168.1.2:8787/api/monitoring/serve/"+idServ)
  }

  postLogs(lf:Logs_file):Observable<Object>{
    return this.http.post<Object>("http://192.168.1.2:8787/api/monitoring/logs", lf,{headers:this.Headers})
  }
}
