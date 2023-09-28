import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroComponent, ListadoComponent],
  exports:[ListadoComponent],
  imports:[CommonModule]
})

export class HeroesModule {}
