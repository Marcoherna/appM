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
  }

}
