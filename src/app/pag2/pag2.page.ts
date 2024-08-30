import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page implements OnInit {

  constructor() { }

  usertext: string = "";
  user: string = "";
  passtext: string = "";
  pass: string = "";

  refresh(){
    this.user = this.usertext
    this.pass = this.passtext
  }

  ngOnInit() {
  }

}
