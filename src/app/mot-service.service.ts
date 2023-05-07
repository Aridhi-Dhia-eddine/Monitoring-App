import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logs_file } from './Logs_file';
import { Mc } from './mc';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MotServiceService {

  constructor(private http:HttpClient) { }

  getAllMots(){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/mc")
  }

  getAllLogs(){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/logs")
  }
  getLogById(idlog:BigInteger){
    return this.http.get<Logs_file>("http://192.168.1.2:8787/api/monitoring/log/"+idlog)
  }

  postMot(mc:Mc):Observable<Object>{
    return this.http.post("http://192.168.1.2:8787/api/monitoring/mc", mc)
  }


}
