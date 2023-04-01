import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Responsable } from './responsable';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceResponsableService {

  constructor(private http:HttpClient) { }

  getResponsbles(){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/resp/")
  }
  public post_responsable(responsable:Responsable):Observable<Object>{
    return this.http.post("http://192.168.1.2:8787/api/monitoring/resp/",responsable)
  }
  public getById(matricule:BigInteger){
    let queryParams = new HttpParams();
    return this.http.get("http://192.168.1.2:8787/api/monitoring/resp/"+matricule)
  }
}
