import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Pipe({
  name: 'searchPokemon'
})
export class SearchPokemonPipe implements PipeTransform {

  transform(listPokemon: Pokemon[], value: string): Pokemon[] {
    console.log('pipe search');
    
    if(!value){
      return listPokemon;
    }
    return listPokemon.filter(pokemon =>pokemon.name.toLowerCase().includes(value.toLowerCase()));
  }
}
