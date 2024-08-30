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

  userText: string = "";
  passText: string = "";

  usuario = {
    nombre:"",
    contrasenia:""
  }

  mewtwo = {
    nombre:"Mewtwo",
    descripcion:"Mewtwo es un Pokémon artificial creado por científicos (entre los que destaca el doctor Fuji) a partir del ADN de Mew. Este Pokémon bípedo posee un cuerpo blanquecino. De sus sienes sobresalen un par de protuberancias rectangulares, y tiene un tubo que se extiende desde el hueso occipital de su cráneo hasta su espina dorsal. Posee el vientre de una tonalidad púrpura, la misma que se extiende hasta su larga cola. Mewtwo tiene tres dedos en cada mano y en cada pata, con una especie de almohadillas. Sus ojos, de color púrpura, son fríos y brillantes, y llenan de temor a sus oponentes.Tras años de unos horribles experimentos de ingeniería genética en la Mansión Pokémon de Isla Canela, este poderoso Pokémon fue creado expresamente para combatir. Parece que olvidaron dotarle de un corazón compasivo. Debido a esto, solo piensa en eliminar a sus enemigos cuando combate. A pesar de que está basado en el ADN de Mew, este fue recombinado y manipulado tantas veces que su tamaño y forma son muy diferentes, y más aún su carácter, ya que Mewtwo es conocido como 'el más salvaje de los Pokémon'.Este Pokémon fue creado un 6 de febrero, pero el 1 de septiembre, debido a su gran poder, los científicos no pudieron contenerlo más, escapando hacia la Cueva Celeste, donde descansa tranquilamente estando inmóvil para conservar su energía y así poder liberarla en su totalidad durante los combates.",

    imagen:"https://images.wikidexcdn.net/mwuploads/wikidex/d/d3/latest/20190408034831/Mewtwo.png",

  }

  private animation?:Animation;

  constructor(private navController:NavController, private aController:AnimationController) {}
  goPag1(){
    let navigationExtras:NavigationExtras ={
      queryParams:{
        data1: this.mewtwo.nombre,
        data2: this.mewtwo.descripcion,
        data3: this.mewtwo.imagen
      }
    };
    this.navController.navigateForward(['/pag1'],navigationExtras);
  }

  goPag2(){
    let navigationExtras:NavigationExtras ={
      queryParams:{
        data1: this.mewtwo.nombre,
        data2: this.mewtwo.descripcion,
        data3: this.mewtwo.imagen
      }
    };
    this.navController.navigateForward(['/pag2'],navigationExtras);
  }

  refresh(){
    this.usuario.nombre = this.userText
    this.usuario.contrasenia = this.passText
  }

  ngOnInit(){}

  ngAfterViewInit(){
    this.animation = this.aController.create()
    .addElement(document.querySelector('.square') as HTMLElement)
    .duration(1500)
    .iterations(2)
    .fromTo('','','')
  }

  ngOnDestroy(){}

  cyq(){
    if(this.animation){
    this.animation.play();
  }else{
    alert("Error, ups, no se que ocurre")
  }
  }

}
