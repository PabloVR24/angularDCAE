import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/hero-interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe;

  buscando() {
    this.heroesService.getSugerencias(this.termino.trim()).subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if (event.option.value === '') {
      return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.heroesService
      .getHeroe(heroe.id!)
      .subscribe((heroe) => (this.heroeSeleccionado = heroe));
  }
  //http:localhost:3000/heroes?q=a&_limit=6
  constructor(private heroesService: HeroesService) {}
}
