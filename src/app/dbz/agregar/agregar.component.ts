import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  constructor(private dbzService: DbzService) {}
  // @Input() personajes: Personaje[] = [];
  @Input() nuevo: Personaje = { nombre: '', poder: 0 };
  // @Output() onNuevoPersonake: EventEmitter<Personaje> = new EventEmitter();
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    console.log(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    //this.onNuevoPersonake.emit(this.nuevo);
    // this.personajes.push(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
    // console.log(this.personajes);
  }
}
