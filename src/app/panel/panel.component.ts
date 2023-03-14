import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
