import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../journal-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  almineurs!:any
  almajeurs!:any
  almoyen!:any
  alwarning!:any
  alarmeMi!:any
  alarmeMoy!:any
  alarmeMaj!:any
  alarmeWar!:any
  constructor(private service:JournalServiceService, public route:Router){}
  ngOnInit(): void {
    this.service.getSize(0).subscribe(data=>this.alwarning=data)
    this.service.getSize(1).subscribe(data=>this.almineurs=data)
    this.service.getSize(2).subscribe(data=>this.almoyen=data)
    this.service.getSize(3).subscribe(data=>this.almajeurs=data)

    this.service.getAlarmeByNiv(0).subscribe(data=>this.alarmeWar=data)
    this.service.getAlarmeByNiv(1).subscribe(data=>this.alarmeMi=data)
    this.service.getAlarmeByNiv(2).subscribe(data=>this.alarmeMoy=data)
    this.service.getAlarmeByNiv(3).subscribe(data=>this.alarmeMaj=data)
  }


  view(alarme:number){
    console.log(alarme)
    this.route.navigate(['/view',alarme])
  }

  maj(){
    document.getElementById("maj")?.scrollIntoView()
  }

  min(){
    document.getElementById("min")?.scrollIntoView()
  }

  moy(){
    document.getElementById("moy")?.scrollIntoView()
  }

  war(){
    document.getElementById("war")?.scrollIntoView()
  }

}
