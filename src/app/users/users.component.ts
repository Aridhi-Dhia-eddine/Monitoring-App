import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { usersServiceService } from '../users-service.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit{

  ajoutUserr=new FormGroup({
    matricule:new FormControl(''),
    nom:new FormControl(''),
    prenom:new FormControl(''),
    mail:new FormControl(''),
    tel:new FormControl(''),
    login:new FormControl(''),
    password:new FormControl(''),
    type:new FormControl(''),
  })

users:any
user:Users=new Users()
userResp:any
msg:any
dropdown!:string
pass!:string
alert:boolean=false
alertt:boolean=false
  constructor( private userService:usersServiceService){}

ngOnInit():void{
  this.users=this.userService.getusers().subscribe(data=>this.users=data)
}
ajoutUser(){

  if (this.dropdown=="Administrateur"){
    this.user.type=0
  }else{
    this.user.type=1
    
  }
  
  this.userService.getUserById(this.user.matricule).subscribe((data)=>{this.userResp=data
    this.ajoutUserr.reset({})
  })
  

/*  if (this.userResp==null){
    console.log("existe déja")
    this.alertt=true
    
  }else{*/
    console.log("not exist")
    this.userService.postUsers(this.user).subscribe((data)=>{console.log("inseted")})
    this.alert=true
 // }

  
  
  

}

onSubmit(){
  console.log(this.user);
  this.ajoutUser();

}

}
