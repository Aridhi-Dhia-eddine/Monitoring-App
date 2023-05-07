import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usersServiceService } from '../users-service.service';
import { Users } from '../users';
declare var $:any
@Component({
  selector: 'app-reinitialisation-mdpuser-sm',
  templateUrl: './reinitialisation-mdpuser-sm.component.html',
  styleUrls: ['./reinitialisation-mdpuser-sm.component.css']
})
export class ReinitialisationMDPuserSmComponent implements OnInit {
  chiffres = "0123456789";
  randStr = "";
  texte!:number
  alert=false
  alertt=true
  code!:String
  mail!:String
  user=new Users()
  response:any
  maail!:String
  num!:any
  constructor(public route:Router,private service:usersServiceService) { }

  ngOnInit(): void {
}

sendCode(){
  this.gererCode()
  this.decompte(60)  
  console.log(this.mail)
  console.log(typeof this.mail)
  this.service.getByEmail(this.mail).subscribe(data=>{
    this.user=data
    console.log(this.user)
    
  })
  console.log(this.user.matricule)
  this.service.sendCode(this.mail,this.randStr).subscribe(data=>{
    this.response=data
    console.log(this.response)
  })
}

verif(){
  if(this.randStr==this.code){
    console.log("true")
    this.route.navigate(['/modifier',this.mail]).then(()=>{
      location.reload()
    })
    
  }
  else{
    console.log("false")
  }
}

gererCode(){
  var randNum;
  var useList;
  for (var i = 1; i <= 8; i++)
  {
      useList = this.chiffres;
      randNum = Math.floor(Math.random() * useList.length);
      this.randStr = this.randStr + useList.charAt(randNum);
  }
  //console.log(this.randStr)
}
decompte(n:number) {
  console.log(n)
  this.texte=n
  const t=setInterval(()=>{
    this.texte=n
    console.log(n)
    n--
    if(n===-1){
      clearInterval(t)
      this.alert=true
      this.alertt=false
      this.randStr=""
      console.log(this.randStr)
      this.route.navigate(['/renitialiser']).then(()=>{
        location.reload()
      })
    }
  },1000)
}

close(){
  location.reload()
}

}