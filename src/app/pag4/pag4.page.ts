import { Component, OnInit } from '@angular/core';
import { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-pag4',
  templateUrl: './pag4.page.html',
  styleUrls: ['./pag4.page.scss'],
})
export class Pag4Page implements OnInit {private animation3?:Animation;

  private animation4?:Animation;
  private animationf4?:Animation;
  registrarRuta(){
    alert("Ruta registrada")
  }

  constructor(private aController:AnimationController) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.animation4 = this.aController.create()
    .addElement(document.querySelector('.logo4') as HTMLElement)
    .duration(1500)
    .iterations(Infinity)
    .fromTo('transform','rotateY(0deg)','rotateY(360deg)')
    if(this.animation4){
      this.animation4.play();
    }else{
      alert("Error, ups, no se que ocurre")
    }

    this.animationf4 = this.aController.create()
      .addElement(document.querySelector('.flecha4') as HTMLElement)
      .duration(1500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'rotate(0)' },
        { offset: 0.5, transform: 'rotate(15deg)' },
        { offset: 1, transform: 'rotate(0)' },
      ]);
      if(this.animationf4){
        this.animationf4.play();
      }else{
        alert("Error, ups, no se que ocurre")
      }
  }

}
