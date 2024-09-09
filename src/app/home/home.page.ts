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


  usuario = {
    nombre:"",
    contrasenia:""
  }

  
  

  private animation?:Animation;
  private animation0?:Animation;

  constructor(private navController:NavController, private aController:AnimationController) {}
  
  ingresar(){
    
    let navigationExtras:NavigationExtras ={
    queryParams:{
      data1: this.usuario.nombre,
      data2: this.usuario.contrasenia
    }
  };
  this.navController.navigateForward(['/pag1'],navigationExtras);
    
  }

  recuperar(){
    
    let navigationExtras:NavigationExtras ={
    queryParams:{
      data1: this.usuario.nombre
    }
  };
  this.navController.navigateForward(['/pag2'],navigationExtras);
    
  }

  ngOnInit(){}

  ngAfterViewInit(){
    this.animation = this.aController.create()
    .addElement(document.querySelector('.logo') as HTMLElement)
    .duration(1500)
    .iterations(Infinity)
    .fromTo('transform','rotateY(0deg)','rotateY(360deg)')
    if(this.animation){
      this.animation.play();
    }else{
      alert("Error, ups, no se que ocurre")
    }

    this.animation0 = this.aController.create()
    .addElement(document.querySelector('.siguenos') as HTMLElement)
    .duration(1500)
    .iterations(Infinity)
    .fromTo('transform','scale(1)','scale(1.5)')
    if(this.animation0){
      this.animation0.play();
    }else{
      alert("Error animacion siguenos")
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
