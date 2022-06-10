import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  listPokemon: Pokemon[] = [];
  isNewPokemon: boolean = false;

  constructor(private pokemosService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemosService.getPokemons().subscribe((pokemons: Pokemon[])=>{
        this.listPokemon = pokemons;
        console.log(this.listPokemon);
    });
  }

  renderCreatePokemon(){
    this.isNewPokemon = true;
  }

  changeState(value: boolean){
    this.isNewPokemon = value;
  }



}
