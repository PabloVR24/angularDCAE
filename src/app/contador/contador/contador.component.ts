import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  template: `
    <h1>Hola Mundo</h1>
    <h2>{{ title }}</h2>
    <h2>
      La base es: <strong>{{ base }}</strong>
    </h2>
    <button (click)="acumular(base)">+{{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  title: string = 'ContadorApp';
  numero: number = 0;
  base: number = 10;

  acumular(valor: number) {
    this.numero += valor;
  }
}
