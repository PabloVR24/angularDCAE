import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'IronMan',
    'Hulk',
    'Thor',
    'Capitan America',
  ];
  deleted: string = '';

  borrarHeroe() {
    this.deleted = this.heroes.shift() ?? '';
  }
}
