import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JournalServiceService {

  constructor(private http:HttpClient) { }
  getAlarmes(){
    return this.http.get("http://localhost:8787/api/monitoring/alarme/")
  }
}
