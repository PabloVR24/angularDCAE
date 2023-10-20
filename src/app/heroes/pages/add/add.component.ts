import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/hero-interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AddComponent implements OnInit {
  publishers = [
    {
      id: 'Dc Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    publisher: Publisher.DCComics,
    first_appearance: '',
    alt_img: '',
  };

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      this.heroesService
        .editHero(this.heroe)
        .subscribe((resp) => this.showSnackbar('Registro Actualizado'));
    } else {
      this.heroesService.addHero(this.heroe).subscribe((resp) => {
        this.showSnackbar('Registro Creado');
        this.router.navigate(['/heroes/edit', resp.id]);
      });
    }
  }

  showSnackbar(mensaje: string) {
    this.snackbar.open(mensaje, 'Cerrar', { duration: 3000 });
  }

  borrarHeroe() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '70%',
      data: this.heroe,
    });
    dialog.afterClosed().subscribe((resp) => {
      {
        if (resp) {
          this.heroesService.deleteHero(this.heroe.id!).subscribe((resp) => {
            this.showSnackbar('Registro Eliminado');
            this.router.navigate(['/heroes']);
          });
        }
      }
    });
  }

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroe(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }
}
