import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serveur } from './serveur';
import { Observable } from 'rxjs';
import { Si } from './si';
@Injectable({
  providedIn: 'root'
})
export class ServeurServiceService {

  constructor(private http:HttpClient) { }
  getAllServeur(){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/serv")
  }
  getAllSi():Observable<Si[]>{
    return this.http.get<Si[]>("http://192.168.1.2:8787/api/monitoring/all_Si")
  }

  getServeurById(id_serveur:BigInteger){
    return this.http.get<Serveur>("http://192.168.1.2:8787/api/monitoring/serv/"+id_serveur)
  }

  getSiById(idSi:BigInteger){
    return this.http.get<Si>("http://192.168.1.2:8787/api/monitoring/Si/"+idSi)
  }

  postServeur(s:Serveur):Observable<Object>{
    return this.http.post("http://192.168.1.2:8787/api/monitoring/serv/", s)
  }
}
