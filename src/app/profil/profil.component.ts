import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { usersServiceService } from '../users-service.service';
import {Location} from '@angular/common';
import { Users } from '../users';
import { error } from 'console';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  paam!:any
  decrypt!:any
  user!:any
  confpass!:String
  pass!:String
  alert=false
  constructor(public rout:ActivatedRoute,private service:usersServiceService,private locat:Location) { }

  ngOnInit(): void {
    this.paam = this.rout.snapshot.paramMap.get('matricule');
    console.log(this.paam)
    this.decrypt=CryptoJS.AES.decrypt(this.paam.trim(), "PFEValue").toString(CryptoJS.enc.Utf8)
    console.log(this.decrypt)
    console.log(typeof this.decrypt)
    this.decrypt=Number(this.decrypt)
    this.service.getUserById(this.decrypt).subscribe(data=>{
      this.user=data
      console.log(this.user)
    })

  }

  changer(){
    console.log(this.pass)
    console.log(this.confpass)
    if(this.pass==this.confpass){
      this.user['password']=this.pass
      this.user.password=CryptoJS.SHA256(this.pass.toString()).toString(CryptoJS.enc.Hex); 
      console.log(this.user)
      console.log(this.user.password.length)
      this.service.modifUser(this.user).subscribe()
      this.alert=true
      setTimeout(() => {
        
      }, 2000);
      location.reload()
    }
  }

  close(){
    this.alert=false
  }

  closef(){
    this.locat.back()
  }
}
