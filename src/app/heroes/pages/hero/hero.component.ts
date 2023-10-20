import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/hero-interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
      .flex {
        display: flex;
      }
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  hero!: Heroe;
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroe(id)))
      .subscribe((resp) => {
        this.hero = resp;
        console.log(this.hero);
      });
  }

  regresar() {
    this.router.navigate(['/heroes/list']);
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}
}
