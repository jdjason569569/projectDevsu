import { Output, OnChanges, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service'; 
import { Input } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import {AppMessages} from '../AppMessages';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit, OnChanges {

  title: string = '';
  pokemonForm!: FormGroup;
  @Input() idPokemon!: number;
  @Output() cancel: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder, private pokemonService: PokemonService, private messageService : MessagesService) { }
  

  ngOnInit(): void {
   this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('ngOnChanges');
    this.validateIsEdit(this.idPokemon);
  }

  buildForm(){
    this.pokemonForm = this.fb.group({
      name: ['',  Validators.required],
      image: ['',  Validators.required],
      attack: [0],
      defense: [0],
    });
  }

  validateIsEdit(id: number){
    if(id !== 0){
      this.title = AppMessages.EDIT_POKEMON;
      this.getPokemonById(id);
    }else{
        if(this.pokemonForm !== undefined){
          this.pokemonForm.reset();
        }
        this.title = AppMessages.NEW_POKEMON;
      }
  }

  getPokemonById(id: number){
      this.pokemonService.getPokemonById(id).subscribe((pokemon:Pokemon) =>{
         this.pokemonForm.setValue({
           name : pokemon.name,
           image : pokemon.image,
           defense : pokemon.defense,
           attack : pokemon.attack
         })
      });
  }

  /**
   * Permite agregar o modificar un pokemon
   */
  managePokemon(){
    const pokemon = this.buildPokemon();
    this.idPokemon === 0 ? this.createPokemon(pokemon) :  this.updatePokemon(pokemon , this.idPokemon);
  }

/**
 * 
 * @returns Construye un objeto pokemon a 
 * partir de los valores del formulario reactivo
 */
   buildPokemon = () => {
    let pokemon : Pokemon = {
      'name' : this.pokemonForm.get('name')!.value,
      'image' : this.pokemonForm.get('image')!.value,
      'defense' : this.pokemonForm.get('defense')!.value,
      'attack' : this.pokemonForm.get('attack')!.value,
      'type' : 'normal',
      'idAuthor' : 1,
      'hp' : 10
    }
    return pokemon
  }

  createPokemon(pokemon : Pokemon){
    this.pokemonService.createPokemon(pokemon).subscribe(()=>{
      this.messageService.messageOk(AppMessages.ADD, AppMessages.ADD_SUCCESSFUL);
    this.eventClose();
    }, (error)=>{
      console.log(error);
    });
    this.pokemonForm.reset();
  }

  updatePokemon(pokemon : Pokemon, id: number){
    this.pokemonService.updatePokemon(pokemon, id).subscribe(()=>{
      this.messageService.messageOk(AppMessages.EDIT_POKEMON, AppMessages.EDIT_POKEMON_SUCCESSFUL);
      this.eventClose();
      }, (error)=>{
        console.log(error);
      });
      this.pokemonForm.reset();
    }
  
  /**
   * Permite cerrar el div que corresponde 
   * a la creacion o edicion del pokemon
   */
  eventClose(){
    this.cancel.emit(false);
  }

}
