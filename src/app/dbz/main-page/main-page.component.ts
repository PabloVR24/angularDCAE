import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // personajes: Personaje[] = [];

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }



  nuevo: Personaje = { nombre: 'Maestro Roshi', poder: 10000 };
  
  constructor() {
    // this.personajes = this.dbzService.personajes;
  }
}
