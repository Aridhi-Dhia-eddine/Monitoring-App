import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usersServiceService } from '../users-service.service';
import { Users } from '../users';
import { HttpResponse } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-modifier-mdp',
  templateUrl: './modifier-mdp.component.html',
  styleUrls: ['./modifier-mdp.component.css']
})
export class ModifierMDPComponent implements OnInit {
  user=new Users()
  mail!:any
  passCofirm!:String
  pass!:any
  noConf=false
  inf8=false
  constructor(public route:Router,public rout:ActivatedRoute,private service:usersServiceService) { }

  ngOnInit(): void {
    this.mail=this.rout.snapshot.paramMap.get("mail")
    console.log(this.mail)
  }
  
  ok(){
    if((this.pass!=this.passCofirm)||(this.pass.length<8)||(this.pass!=this.passCofirm)){
      console.log("no")
      this.inf8=true
      this.noConf=true
      setTimeout(() => {
        this.closeAlert()
        this.closeNoConf()
      }, 2000);
    }else{
      console.log("ok")
      this.service.getByEmail(this.mail).subscribe(data=>{
        this.user.login=data.login
        this.user.mail_user=data.mail_user
        this.user.matricule=data.matricule
        this.user.nom_user=data.nom_user
        this.user.num_tel=data.num_tel
        this.user.password=data.password
        this.user.prenom_user=data.prenom_user
        this.user.type=data.type
        console.log(this.user)
        this.user.password=String(this.pass)
        
        console.log(this.user)
        this.user.password=CryptoJS.SHA256(this.user.password.toString()+"serviceSalt").toString(CryptoJS.enc.Hex);
        this.service.postUsers(this.user).subscribe(data=>console.log(HttpResponse))
        this.route.navigate(['/login'])
      })
      
    }
  }

  closeAlert(){
    this.inf8=false
  }
  closeNoConf(){
    this.noConf=false
  }
}
