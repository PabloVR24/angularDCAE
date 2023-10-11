import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = '';
  hasError: boolean = false;
  paises: Country[] = [];

  buscar(termino: string) {
    this.termino = termino;
    this.hasError = false;

    this.paisService.buscarCapital(termino).subscribe(
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
    //TODO: SUGERENCIAS
  }
  constructor(private paisService: PaisService) {}
}
