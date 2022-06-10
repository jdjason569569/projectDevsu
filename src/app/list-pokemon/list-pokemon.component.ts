import { DoCheck, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit{

  listPokemon: Pokemon[] = [];
  isNewPokemon: boolean = false;
  idPokemon: number = 0;



  constructor(private pokemosService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemosService.getPokemons().subscribe((pokemons: Pokemon[])=>{
        this.listPokemon = pokemons;
    });
  }

  renderCreatePokemon(){
    this.idPokemon = 0;
    this.isNewPokemon = true;
  }

  changeState(value: boolean){
    this.isNewPokemon = value;
  }

  updatePokemon(id: any){
    this.renderCreatePokemon();
    this.idPokemon = id;
  }

  deletePokemon(id: any){
    this.pokemosService.deletePokemon(id).subscribe(()=>{
      this.getPokemons();
    }, (error)=>{
       console.log(error);
    });
  }



}
