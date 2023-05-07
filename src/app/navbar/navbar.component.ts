import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  paam!:any
  constructor(public rout:ActivatedRoute) { }
  image:string="assets/images/tt.png";
  ngOnInit(): void {
    this.paam = this.rout.snapshot.paramMap.get('matricule');
    console.log(this.paam)
  }

}
