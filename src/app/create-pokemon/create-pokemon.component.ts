import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../models/pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.css']
})
export class CreatePokemonComponent implements OnInit {

  title = 'Nuevo Pokemon';
  pokemonForm!: FormGroup;
  id!: any;
  @Output() cancel: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder, private router: Router, 
    private activateRoute: ActivatedRoute, private pokemonService: PokemonService) { 

    this.pokemonForm = this.fb.group({
      name: ['',  Validators.required],
      image: ['',  Validators.required],
      attack: [''],
      defense: [''],
    });
   }
  

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.validateIsEdit(this.id);
  }

  validateIsEdit(id: any){
    if(id){
      this.title = 'Editar pokemon';
      //this.obtenerPokemon(id);
      }
  }

  /**
   * Permite agregar o modificar un pokemon
   */
  managePokemon(){
    const pokemon = this.buildPokemon();
    if(!this.id){
       this.createPokemon(pokemon);
    }else{

    }

  }



/**
 * 
 * @returns Construye un objeto pokemon a partir de los valores del formulario reactivo
 */
   buildPokemon = () => {
    let pokemon : Pokemon = {
      'name' : this.pokemonForm.get('name')!.value,
      'image' : this.pokemonForm.get('image')!.value,
      'defense' : this.pokemonForm.get('defense')!.value,
      'attack' : this.pokemonForm.get('attack')!.value,
      'type' : 'other',
      'idAuthor' : 1,
      'hp' : 10
    }
    return pokemon
  }

  createPokemon(pokemon : Pokemon){
    this.pokemonService.createPokemon(pokemon).subscribe(()=>{
    this.eventClose();
    }, (error)=>{
      console.log(error);
    });
    this.pokemonForm.reset();
  }

  /**
   * Permite cerrar el div que corresponde a la creacion o edicion del pokemon
   */
  eventClose(){
    this.cancel.emit(false);
  }

}
