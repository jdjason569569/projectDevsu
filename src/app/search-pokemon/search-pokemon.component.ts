import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  wordSearch = new FormControl('');
  @Output() searchEmit: EventEmitter<string> = new EventEmitter();

  constructor() { }
  

  ngOnInit(): void {
    this.searchEmitMethod();
    console.log('component search');
  }

  searchEmitMethod(){
    this.wordSearch.valueChanges.pipe(debounceTime(300))
    .subscribe(value =>{
      this.searchEmit.emit(value);
    });
  }

}
