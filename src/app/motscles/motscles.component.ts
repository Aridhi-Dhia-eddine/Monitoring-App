import { Component,OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MotServiceService } from '../mot-service.service';
import { Mc } from '../mc';
import { Logs_file } from '../Logs_file';
import { type } from 'os';
@Component({
  selector: 'app-motscles',
  templateUrl: './motscles.component.html',
  styleUrls: ['./motscles.component.css']
})
export class MotsclesComponent implements OnInit {
  mots!:any
  mc=new Mc()
  lf !:any
  l!:Logs_file
  id !:any
  constructor(private service:MotServiceService){}
  ngOnInit(): void {
    this.mots=this.service.getAllMots().subscribe(data=>this.mots=data)
    this.lf=this.service.getAllLogs().subscribe((data)=>{this.lf=data
      this.lf=Object.values(this.lf)
      console.log(this.lf)
    })
    
  }


  onSeli(){
    console.log(this.id)
    this.id=Number(this.id)
    console.log(this.id)
    this.service.getLogById(this.id).subscribe((data)=>{

      this.l=data
      console.log(this.l)
    })
    
    console.log(typeof this.id)
  }

  onSe(){
    this.mc.niveau=Number(this.mc.niveau)
    console.log(typeof this.mc.niveau)
  }

  onSubmit(){
    this.mc.niveau=Number(this.mc.niveau)
    console.log(typeof this.mc.niveau)
    this.mc.lf=this.l
    console.log(this.mc)
    this.service.postMot(this.mc).subscribe()
  }

}
