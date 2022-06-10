import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`${this.url}?idAuthor=1`);
  }

  createPokemon(pokemon: Pokemon){
     return this.http.post(`${this.url}?idAuthor=1`, pokemon);
  }

  updatePokemon(pokemon: Pokemon, id: number){
    return this.http.put(`${this.url}${id}`, pokemon);
  }

  getPokemonById(id:number): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.url}?id=${id}`)
    .pipe(map((element:any) => element[0]));
  }

  deletePokemon(id: number){
    return this.http.delete(`${this.url}${id}`);
  }
  



}
