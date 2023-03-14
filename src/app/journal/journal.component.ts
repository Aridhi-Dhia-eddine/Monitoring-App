import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../journal-service.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  alarmes: any; 
  constructor(private service:JournalServiceService) { }

  ngOnInit(){
    this.alarmes=this.service.getAlarmes().subscribe(data=>this.alarmes=data)
  }

}
