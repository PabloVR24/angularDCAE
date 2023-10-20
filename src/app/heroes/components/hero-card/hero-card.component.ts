import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/hero-interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [],
})
export class HeroCardComponent {
  @Input() heroe!: Heroe;
  
}
