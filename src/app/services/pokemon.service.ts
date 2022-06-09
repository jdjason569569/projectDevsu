import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`${this.url}?idAuthor=1`);
  }



}
