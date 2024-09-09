import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-pag3',
  templateUrl: './pag3.page.html',
  styleUrls: ['./pag3.page.scss'],
})
export class Pag3Page implements OnInit {

  private animation3?:Animation;
  parametro =""

  constructor(private activatedRoute:ActivatedRoute, private aController:AnimationController) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let email = params['data1'];
      
      this.parametro = email
  })
}

  ngAfterViewInit(){
    this.animation3 = this.aController.create()
    .addElement(document.querySelector('.logo2') as HTMLElement)
    .duration(1500)
    .iterations(Infinity)
    .fromTo('transform','rotateY(0deg)','rotateY(360deg)')
    if(this.animation3){
      this.animation3.play();
    }else{
      alert("Error, ups, no se que ocurre")
    }
  }

}
