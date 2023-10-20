import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/hero-interface';

@Pipe({
  name: 'heroImage',
  pure: false,
})
export class HeroImagePipe implements PipeTransform {
  transform(heroe: Heroe): string {
    //console.log('process');
    if (!heroe.id && !heroe.alt_img) {
      return `assets/no-image.png`;
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    }
    return `assets/heroes/${heroe.id}.jpg`;
  }
}
