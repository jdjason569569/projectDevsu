import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(pokemon: string): string {
    if(!pokemon){
      return `assets/no-image.png`;
    }else{
      return pokemon;
    }
  }

}
