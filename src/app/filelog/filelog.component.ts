import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogServiceService } from '../log-service.service';
import { Logs_file } from '../Logs_file';
import { Serveur } from '../serveur';
@Component({
  selector: 'app-filelog',
  templateUrl: './filelog.component.html',
  styleUrls: ['./filelog.component.css']
})
export class FilelogComponent implements OnInit  {
  logs:any
  serveurs:any
  id!:number
  lf=new Logs_file()
  serv=new Serveur()
  constructor(private service:LogServiceService ){}

  ngOnInit(): void{
    this.logs=this.service.getFileLogs().subscribe(data=>this.logs=data)
    this.serveurs=this.service.getAllServeurs().subscribe(data=>this.serveurs=data)
  }

  onSel(){
    this.lf.type=Number(this.lf.type)
    console.log(typeof this.lf.type)
  }

  onSe(){
    this.lf.os=Number(this.lf.os)
    console.log(typeof this.lf.os)
  }

  onS(){
    this.id=Number(this.id)
    console.log(typeof this.id)
    this.service.getAllServeurById(this.id).subscribe(data=>{
      this.serv.idServeur=data.idServeur
      this.serv.nomHost=data.nomHost
      this.serv.ip=data.ip
      this.serv.si=data.si
    })

    console.log(this.serv)
  }

  ajoutLogs(){
    this.service.postLogs(this.lf).subscribe(data=>console.log("inserted"));
  }

  onSubmit(){
    this.lf.serv=this.serv
    console.log(this.lf)
    console.log(this.lf.lastFile)
    this.ajoutLogs()
  }
}
