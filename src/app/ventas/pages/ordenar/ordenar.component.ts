import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  mayusculas: boolean = false;
  orderBy: string = 'nombre';
  heroes: Heroe[] = [
    { nombre: 'Superman', vuela: true, color: Color.azul },
    { nombre: 'Batman', vuela: false, color: Color.negro },
    { nombre: 'Robin', vuela: false, color: Color.verde },
    { nombre: 'Daredevil', vuela: false, color: Color.rojo },
    { nombre: 'Green Lantern', vuela: true, color: Color.verde },
  ];

  cambiarMayusculas() {
    this.mayusculas = !this.mayusculas;
  }

  cambiarOrden(valor: string) {
    this.orderBy = valor;
  }
}
