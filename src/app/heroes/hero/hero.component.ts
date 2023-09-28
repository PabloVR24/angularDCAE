import { Component } from '@angular/core';
@Component({ selector: 'app-hero', templateUrl: 'hero.component.html' })
export class HeroComponent {
  nombre: string = 'Ironman';
  edad: number = 45;

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  public get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 30;
  }
}
