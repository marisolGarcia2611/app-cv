import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilities.component.html',
  styleUrl: './habilities.component.css'
})
export class HabilitiesComponent {
  @Input() name = ''; // para recibir de padre, solo declaramos adecudamente

  @Output() addFavoriteEvent = new EventEmitter<string>();//agregamos a favoritos para pasar a componente padre
  @Output() addFavoriteEvent2 = new EventEmitter<number >();//agregamos a favoritos para pasar a componente padre

  fav(habilitieName: string, habilitieId:number ) { 
    this.addFavoriteEvent.emit(habilitieName);//con este nombre lo mandamos al padre
    this.addFavoriteEvent2.emit(habilitieId);//con este nombre lo mandamos al padre
  }

  habilities = [
    {
      id:1,
      name:'Diseño UX/UI, proyectccion de manejo de flujos y tención del sistema',
    },{
      id:2,
      name:'Manejo de frameworks como: Angular ,Vue.js, Laravel, Adonis',
    },{
      id:3,
      name:'Control de servidores en la Nube',
    },{
      id:4,
      name:'Conocimiento en manejo de herramientas de maquetado y modelado de aplicaciones como: Adobe XD Y Figma',
    },{
      id:5,
      name:'Manejo de metodologías SCRUM Y DevOps',
    }
  ]
}
