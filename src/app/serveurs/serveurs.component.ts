import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServeurServiceService } from '../serveur-service.service';
import { Si } from '../si';
import { Serveur } from '../serveur';
import { type } from 'os';
@Component({
  selector: 'app-serveurs',
  templateUrl: './serveurs.component.html',
  styleUrls: ['./serveurs.component.css']
})
export class ServeursComponent implements OnInit {
  serveurs:any
  sis:any
  id!:any
  s=new Serveur()
  si!:Si
  constructor(private service:ServeurServiceService){}

  ngOnInit(): void {
    this.serveurs=this.service.getAllServeur().subscribe(data=>this.serveurs=data)
    this.sis=this.service.getAllSi().subscribe(data=>{this.sis=data
     this.sis=Object.values(this.sis) 
     console.log(this.sis)
    })
  }

  onSelect(){
    console.log(this.id)
    console.log(typeof this.id)
    this.id=Number(this.id)
    this.service.getSiById(this.id).subscribe((data)=>{
      this.si=data
    })
    console.log(this.si)
  }

  ajoutSi(){
    this.s.si=this.si
    this.s=<Serveur>this.s
    this.service.postServeur(this.s).subscribe((data)=>console.log("added"))
  }

  onSubmit(){
    console.log(this.s)
    this.ajoutSi()
    console.log(this.s)
  }
}
