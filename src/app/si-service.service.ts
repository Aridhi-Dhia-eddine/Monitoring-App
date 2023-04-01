import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Si } from './si';
import { Observable } from 'rxjs';
import { Responsable } from './responsable';
@Injectable({
  providedIn: 'root'
})
export class SiServiceService {
  rees!:Responsable
  constructor(private http:HttpClient) { }
  getAllSi(){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/all_Si")
  }
  getAllResponsable(){
    return this.http.get<Array<Responsable>>("http://192.168.1.2:8787/api/monitoring/resp")
  }

   postSi(si:Si):Observable<object>{
    return this.http.post("http://192.168.1.2:8787/api/monitoring/Si/",si)
  }

  getRespnsableById(matricule:BigInteger){
    return this.http.get<Responsable>("http://192.168.1.2:8787/api/monitoring/resp/"+matricule)
  }
}
