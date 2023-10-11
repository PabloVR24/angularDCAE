import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hasError: boolean = false;
  mostrarSugerencias: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];

  buscar(termino: string) {
    this.termino = termino;
    this.mostrarSugerencias = false;
    this.hasError = false;

    this.paisService.buscarPais(termino).subscribe(
      (resp) => {
        console.log(resp);
        this.paises = resp;
      },
      (err) => {
        this.hasError = true;
        this.paises = [];
      }
    );
  }
  sugerencias(termino: string) {
    this.hasError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => {
        this.paisesSugeridos = paises.slice(0, 3);
      },
      (err) => (this.paisesSugeridos = [])
    );
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }

  constructor(private paisService: PaisService) {}
}
