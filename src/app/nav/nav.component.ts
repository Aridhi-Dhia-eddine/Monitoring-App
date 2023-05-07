import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  decrypt!:any
  paam!:any
  constructor(public rout:ActivatedRoute) { }
  image:string="assets/images/tt.png";
  ngOnInit(): void {
    this.paam = this.rout.snapshot.paramMap.get('matricule');
    console.log(this.paam)
  }

}
