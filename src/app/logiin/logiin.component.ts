import { Component, OnInit } from '@angular/core';
import { usersServiceService } from '../users-service.service';
import { Users } from '../users';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-logiin',
  templateUrl: './logiin.component.html',
  styleUrls: ['./logiin.component.css']
})
export class LogiinComponent implements OnInit {
  log!:String
  pass!:String
  user=new Users()
  matricule!:String
  decrypt!:String
  constructor(private service:usersServiceService,public route:Router){}
  ngOnInit(): void {
    
  }

  login(){
    console.log(this.log)
    //this.pass=CryptoJS.AES.encrypt(this.pass.toString(),"PFEValue").toString(); 
    console.log(this.pass)
    this.pass=CryptoJS.SHA256(this.pass.toString()+ "serviceSalt").toString(CryptoJS.enc.Hex);
    //this.pass=CryptoJS.AES.encrypt(this.pass.toString(),"PFEValue").toString(); 
    //console.log(this.pass)
    this.service.authent(this.log,this.pass).subscribe(data=>{
      this.user.login=data.login
      this.user.mail_user=data.mail_user
      this.user.matricule=data.matricule
      this.user.nom_user=data.nom_user
      this.user.num_tel=data.num_tel
      this.user.password=data.password
      this.user.prenom_user=data.prenom_user
      this.user.type=data.type

      console.log(this.user)
      console.log(this.user.type)
      if(this.user.type==0){
        this.matricule = CryptoJS.AES.encrypt(this.user.matricule.toString(),"PFEValue").toString();  
        console.log(this.matricule.length)
        this.decrypt=CryptoJS.AES.decrypt(this.matricule.trim(), "PFEValue").toString(CryptoJS.enc.Utf8)
        console.log(this.decrypt)
        this.route.navigate(['/dashboard',this.matricule])
      }
      else if(this.user.type==1){
        this.matricule = CryptoJS.AES.encrypt(this.user.matricule.toString(),"PFEValue").toString();  
        console.log(this.matricule.length)
        this.decrypt=CryptoJS.AES.decrypt(this.matricule.trim(), "PFEValue").toString(CryptoJS.enc.Utf8)
        console.log(this.decrypt)

        
        this.route.navigate(['/journ',this.matricule])
      }
    })
  }
}
