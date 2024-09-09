import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page implements OnInit {

  private animation2?:Animation;
  private animationf2?:Animation;

  constructor(private aController:AnimationController) { }

  email: string = "";

  recuperar(){
    
    alert("Se envió un código a su correo")
    
  }

  ngOnInit() {}

  ngAfterViewInit(){
    this.animation2 = this.aController.create()
    .addElement(document.querySelector('.logo2') as HTMLElement)
    .duration(1500)
    .iterations(Infinity)
    .fromTo('transform','rotateY(0deg)','rotateY(360deg)')
    if(this.animation2){
      this.animation2.play();
    }else{
      alert("Error, ups, no se que ocurre")
    }

    
      this.animationf2 = this.aController.create()
      .addElement(document.querySelector('.flecha2') as HTMLElement)
      .duration(1500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'rotate(0)' },
        { offset: 0.5, transform: 'rotate(15deg)' },
        { offset: 1, transform: 'rotate(0)' },
      ]);
      if(this.animationf2){
        this.animationf2.play();
      }else{
        alert("Error, ups, no se que ocurre")
      }
  }


  ngOnDestroy(){}

}
