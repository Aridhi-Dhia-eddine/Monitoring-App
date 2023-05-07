import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  gu:string="assets/images/users.png";
  gsi:string="assets/images/si.png";
  gs:string="assets/images/serveurs.png";
  glf:string="assets/images/logfile.png";
  gmc:string="assets/images/mot clé.png"
  paam!:any
  constructor(public rout:ActivatedRoute) { }

  ngOnInit(): void {
    this.paam = this.rout.snapshot.paramMap.get('matricule');
    console.log(this.paam)
  }

}
