import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/hero-interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroService: HeroesService) {}
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}
