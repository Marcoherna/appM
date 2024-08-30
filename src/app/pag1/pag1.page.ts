import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.page.html',
  styleUrls: ['./pag1.page.scss'],
})
export class Pag1Page implements OnInit {

  parametros = {nombre:"",descripcion:"", imagen:""}

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let nombre = params['data1'];
      let descripcion = params['data2'];
      let imagen = params['data3'];
      this.parametros.nombre = nombre
      this.parametros.descripcion = descripcion
      this.parametros.imagen = imagen
    })
  }

  

}
