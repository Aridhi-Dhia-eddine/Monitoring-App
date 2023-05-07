import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alarme } from '../alarme';
import { JournalServiceService } from '../journal-service.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id!:any
  alarme!:any
  constructor(public rout:ActivatedRoute, private service:JournalServiceService,private locat:Location) { }

  ngOnInit(): void {
    this.id=this.rout.snapshot.paramMap.get("id")
    this.id=Number(this.id)
    console.log(this.id)
    this.service.getAlarmeById(this.id).subscribe(data=>{this.alarme=data
      console.log(this.alarme)})
    console.log(this.alarme)
  }

  fermer(alarme:any){
    console.log(alarme)
    this.alarme["etat"]=1
    var myDate =new Date().toLocaleDateString()
    this.alarme["resolutionD"]=myDate
    console.log(alarme)
    this.service.putalarme(this.alarme).subscribe(data=>console.log("ok"))
  }

  closef(){
    this.locat.back()
  }
}
