import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { UrlSegment } from '@angular/router';

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

    public getByEmail(email:String){
      return this.http.get<Users>("http://192.168.1.2:8787/api/monitoring/findEmail/"+email)
    }

    public sendCode(email:String,code:String){
      return this.http.get("http://localhost:8787/api/monitoring/find/"+email+"/"+code)
    }

    public authent(login:String,password:String){
      return this.http.get<Users>("http://localhost:8787/api/monitoring/Authent/"+login+"/"+password)
    }

    public modifUser(user:Users){
      return this.http.put("http://192.168.1.2:8787/api/monitoring/modif",user)
    }
  }