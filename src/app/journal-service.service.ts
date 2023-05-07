import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alarme } from './alarme';

@Injectable({
  providedIn: 'root'
})
export class JournalServiceService {

  constructor(private http:HttpClient) { }
  getAlarmes(){
    return this.http.get("http://localhost:8787/api/monitoring/alarme/")
  }
  getAlarmeById(id:BigInteger){
    return this.http.get<Alarme>("http://192.168.1.2:8787/api/monitoring/alarm/"+id)
  }
  putalarme(alarme:any){
    return this.http.put("http://192.168.1.2:8787/api/monitoring/alarme",alarme)
  }
  getSize(niv:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/niveauSize/"+niv)
  }
  getAlarmeByNiv(niv:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/niveau/"+niv)
  }

  //By Serv
  getAlarmeWarBySer(id:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/warSer/"+id)
  }

  getAlarmeMinBySer(id:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/minSer/"+id)
  }
  getAlarmeMoyBySer(id:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/moySer/"+id)
  }
  getAlarmeMajBySer(id:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/majSer/"+id)
  }

  //By Logs
  getAlarmeWarByLog(id:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/warlog/"+id)
  }

  getAlarmeMinByLog(id:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/minlog/"+id)
  }

  getAlarmeMoyByLog(id:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/moylog/"+id)
  }

  getAlarmeMajByLog(id:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/majlog/"+id)
  }

  //By Si
  getAlarmeWarBySi(id:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/siWarn/"+id)
  }

  getAlarmeMinBySi(id:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/siMin/"+id)
  }

  getAlarmeMoyBySi(id:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/siMoy/"+id)
  }

  getAlarmeMajBySi(id:number){
    return this.http.get("http://192.168.1.2:8787/api/monitoring/siMaj/"+id)
  }
}
