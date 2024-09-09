import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.page.html',
  styleUrls: ['./pag1.page.scss'],
})
export class Pag1Page implements OnInit {

  private animation1?:Animation;

  parametros = {usuario:"",contrasenia:""}

  constructor(private activatedRoute:ActivatedRoute, private aController:AnimationController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let usuario = params['data1'];
      let contrasenia = params['data2'];
      
      this.parametros.usuario = usuario
      this.parametros.contrasenia = contrasenia
      
    })
  }

  ngAfterViewInit(){
    this.animation1 = this.aController.create()
    .addElement(document.querySelector('.logo1') as HTMLElement)
    .duration(1500)
    .iterations(Infinity)
    .fromTo('transform','rotateY(0deg)','rotateY(360deg)')
    if(this.animation1){
      this.animation1.play();
    }else{
      alert("Error, ups, no se que ocurre")
    }
  }
  

}
