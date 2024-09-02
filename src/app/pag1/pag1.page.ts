import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.page.html',
  styleUrls: ['./pag1.page.scss'],
})
export class Pag1Page implements OnInit {

  parametros = {usuario:"",contrasenia:""}

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let usuario = params['data1'];
      let contrasenia = params['data2'];
      
      this.parametros.usuario = usuario
      this.parametros.contrasenia = contrasenia
      
    })
  }

  

}
