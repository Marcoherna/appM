import { Component, OnInit } from '@angular/core';
import { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-pag5',
  templateUrl: './pag5.page.html',
  styleUrls: ['./pag5.page.scss'],
})
export class Pag5Page implements OnInit {

  private animation5?:Animation;
  private animationf5?:Animation;
  select(){
    alert("Ruta seleccionada")
  }

  constructor(private aController:AnimationController) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.animation5 = this.aController.create()
    .addElement(document.querySelector('.logo2') as HTMLElement)
    .duration(1500)
    .iterations(Infinity)
    .fromTo('transform','rotateY(0deg)','rotateY(360deg)')
    if(this.animation5){
      this.animation5.play();
    }else{
      alert("Error, ups, no se que ocurre")
    }

    this.animationf5 = this.aController.create()
      .addElement(document.querySelector('.flecha5') as HTMLElement)
      .duration(1500)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, transform: 'rotate(0)' },
        { offset: 0.5, transform: 'rotate(15deg)' },
        { offset: 1, transform: 'rotate(0)' },
      ]);
      if(this.animationf5){
        this.animationf5.play();
      }else{
        alert("Error, ups, no se que ocurre")
      }
  }

}
