import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../journal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  alarmes: any; 
  constructor(private service:JournalServiceService, public route:Router) { }

  ngOnInit(){
    this.alarmes=this.service.getAlarmes().subscribe(data=>this.alarmes=data)
  }

  view(alarme:number){
    console.log(alarme)
    this.route.navigate(['/view',alarme])
  }
}
