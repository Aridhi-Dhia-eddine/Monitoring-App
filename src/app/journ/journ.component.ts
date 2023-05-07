import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../journal-service.service';
import { Alarme } from '../alarme';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-journ',
  templateUrl: './journ.component.html',
  styleUrls: ['./journ.component.css']
})
export class JournComponent implements OnInit {

  alarmes: any; 
  alarme!:any
  al!:any
  niv!:any
  id!:any
  constructor(private service:JournalServiceService,public route:Router) { }

  ngOnInit(){
    this.alarmes=this.service.getAlarmes().subscribe(data=>this.alarmes=data)
  }

  view(alarme:number){
    console.log(alarme)
    this.route.navigate(['/view',alarme])
  }

}
