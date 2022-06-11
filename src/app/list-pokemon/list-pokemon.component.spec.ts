import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListPokemonComponent } from './list-pokemon.component';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon';
import { of } from 'rxjs';

describe('ListPokemonComponent', () => {
  let component: ListPokemonComponent;
  let fixture: ComponentFixture<ListPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ListPokemonComponent ],
      providers: [PokemonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('get listPokemons from subscripcion', ()=>{
    const pokemonService = fixture.debugElement.injector.get(PokemonService);
    const listPokemons: Pokemon[] = [];
    const spy1 = spyOn(pokemonService, 'getPokemons').and.returnValue(of(listPokemons));
    component.getPokemons();
    expect(spy1).toHaveBeenCalled();
  })

});
