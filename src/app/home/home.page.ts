import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  mensaje(){
    alert("Hola")
  }


  usuario = {
    nombre:"",
    contrasenia:""
  }

  
  

  private animation?:Animation;

  constructor(private navController:NavController, private aController:AnimationController) {}
  

  
  

  refresh(){
    
    let navigationExtras:NavigationExtras ={
    queryParams:{
      data1: this.usuario.nombre,
      data2: this.usuario.contrasenia
    }
  };
  this.navController.navigateForward(['/pag1'],navigationExtras);
    
  }

  ngOnInit(){}

  ngAfterViewInit(){
    this.animation = this.aController.create()
    .addElement(document.querySelector('.square') as HTMLElement)
    .duration(1500)
    .iterations(Infinity)
    .fromTo('opacity','1','0.1')
    if(this.animation){
      this.animation.play();
    }else{
      alert("Error, ups, no se que ocurre")
    }
  }

  ngOnDestroy(){}

  iniciarAnimacion(){
    if(this.animation){
    this.animation.play();
  }else{
    alert("Error, ups, no se que ocurre")
  }
  }

  

}
