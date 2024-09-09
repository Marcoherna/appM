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
  }

}
