import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class usersServiceService {


  constructor( private http:HttpClient){}
     getusers (){
  
      return this.http.get("http://192.168.1.2:8787/api/monitoring/all_users");
    }

    public postUsers(user:Users){
      return this.http.post("http://192.168.1.2:8787/api/monitoring/add",user)
    }

    public getUserById(matricule:BigInteger){
     return this.http.get("http://192.168.1.2:8787/api/monitoring/"+matricule)
    }
  }