import { Component, OnInit } from '@angular/core';
import { ServiceResponsableService} from '../service-responsable.service';
import { HttpClient } from '@angular/common/http';
import { Responsable } from '../responsable';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-gerer-responsable',
  templateUrl: './gerer-responsable.component.html',
  styleUrls: ['./gerer-responsable.component.css']
})
export class GererResponsableComponent implements OnInit {
  ajoutResp=new FormGroup({
    matricule:new FormControl(''),
    nom:new FormControl(''),
    prenom:new FormControl(''),
    mail:new FormControl(''),
    tel:new FormControl('')
  })
  alert:boolean=false
  alertt:boolean=false
  responsables: any;
  respResponse:any
  responsable:Responsable=new Responsable();
  msg:any;
  constructor(private Service:ServiceResponsableService) { }

  ngOnInit(): void {
    this.responsables=this.Service.getResponsbles().subscribe(data=>this.responsables=data)
  }

  ajouterResp(){
    this.Service.getById(this.responsable.matricule).subscribe((data)=>this.respResponse=data)
  /*  if(this.respResponse!=null){
      console.log("existe déja")
      this.alertt=true
      this.Service.getById(this.responsable.matricule).subscribe((data)=>{
      this.ajoutResp.reset({}) }
      )
    }*/
  //  else{
    this.Service.post_responsable(this.responsable).subscribe((data)=>{
    
    this.ajoutResp.reset({})
  })
  this.alert=true
  //  }
    
  }
  onSubmit(){
    console.log(this.responsable);
    this.ajouterResp();

  }
}
