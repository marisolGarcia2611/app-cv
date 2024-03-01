import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabilitiesComponent } from '../habilities/habilities.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,HabilitiesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() name = '';
  // Recibimos informacion del hijo
  favHabilities ='';//abrimos variable
  favHabilitiesId = 0;//abrimos variable
  getFavorite(habilitieName:string){
    this.favHabilities = habilitieName;//pasamos la infomacion que recibimos a la variable que hicimos
  }

  getFavorite2(habilitieId:number){
    this.favHabilitiesId = habilitieId;//pasamos la infomacion que recibimos a la variable que hicimos
  }
  
  details = [
    {
      id:1,
      description:'Diseñar applicaciones multiplataformas funcionales, que se adapten a ti y las necesidades del entorno',
    },{
      id:2,
      description:'Moverse en con agilidad con las nuevas tecnologías para desarrollo, de forma que se ofrezaca un desarrollo agil para el tipo de aplicación más conveninete',
    },{
      id:3,
      description:'Configuración inicial y mantenimiento de servidores, así como la intalación de paqueteria más nueva, con conecciones inteligentes.',
    },{
      id:4,
      description:'Una buena app contiene el diseño de maquetado bueno, para que esta pueda ser explorada adecudadmente y llegar a la idea original que tiene el cliente.',
    },{
      id:5,
      description:'Un equipo bien formado se adapta a la metodología que más le comviene al proyecto, para que e desarrollo sea más funcional para los trabajadores.',
    }
  ]

 
}
