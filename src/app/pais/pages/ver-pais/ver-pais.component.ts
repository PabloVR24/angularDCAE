import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  name: string = 'lol';

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id);
    //   this.paisService.getPaisAlpha(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.getPaisAlpha(id)))
      .subscribe((resp) => {
        this.pais = resp[0];
        console.log(this.pais);
      });
  }
}
