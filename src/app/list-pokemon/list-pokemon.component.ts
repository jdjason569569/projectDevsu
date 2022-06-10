import { DoCheck, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { MessagesService } from '../services/messages.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit{

  listPokemon: Pokemon[] = [];
  isNewPokemon: boolean = false;
  idPokemon: number = 0;
  valueFilter!: string;
  pageSize: number = 5;
  fromPage: number = 0;
  toPage: number = 3;



  constructor(private pokemosService: PokemonService, private messageService : MessagesService) { }

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
    this.getPokemons();
  }

  updatePokemon(id: any){
    this.renderCreatePokemon();
    this.idPokemon = id;
  }

  deletePokemon(id: any){
    this.pokemosService.deletePokemon(id).subscribe(()=>{
      this.messageService.messageOk('Eliminar', 'Se elminó correctamente');
      this.getPokemons();
    }, (error)=>{
       console.log(error);
    });
  }

  searchWord(value: string){
    this.valueFilter = value;
  }

  changePage(e: PageEvent){
    this.fromPage = e.pageIndex * e.pageSize;
    this.toPage = this.fromPage + e.pageSize;
  }



}
