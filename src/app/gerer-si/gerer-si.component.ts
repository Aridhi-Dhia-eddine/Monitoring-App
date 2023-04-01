import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SiServiceService } from '../si-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Si } from '../si';
import { Responsable } from '../responsable';
import { type } from 'os';
import { map } from 'rxjs';
@Component({
  selector: 'app-gerer-si',
  templateUrl: './gerer-si.component.html',
  styleUrls: ['./gerer-si.component.css']
})
export class GererSIComponent implements OnInit {
  si:any
  responsables!:any
  ssi=new Si()
  matricule!:any
  shape!:Array<Responsable>
  //resp!:Responsable
  resp!:Responsable
  r!:any
  rr!:Responsable[]
  constructor(private service:SiServiceService ) { }

  ngOnInit(): void {
    this.si=this.service.getAllSi().subscribe(data=>this.si=data)
    this.responsables=this.service.getAllResponsable().subscribe((data)=>{this.responsables=data
      this.responsables=Object.values(this.responsables)
      this.shape=Array.of(this.responsables)
    console.log((this.responsables).length)
    console.log( typeof this.responsables)
    })

  }
  ajoutSi(){
    this.ssi.resp=this.resp
    console.log(this.ssi)
    this.service.postSi(this.ssi).subscribe(data=>{
      console.log("inserted") 
    })
  }

  onSubmit(){
    this.ajoutSi()
  }
  onSelect(){
    this.matricule=Number(this.matricule)
    console.log(this.matricule)
    console.log(typeof this.matricule)
    this.service.getRespnsableById(this.matricule).subscribe((data)=>{
      this.resp=data
      console.log(this.resp)
    })
    //console.log(this.resp)
    console.log(this.matricule)
  }
}
