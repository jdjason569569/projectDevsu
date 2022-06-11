import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CreatePokemonComponent } from './create-pokemon.component';

describe('CreatePokemonComponent', () => {
  let component: CreatePokemonComponent;
  let fixture: ComponentFixture<CreatePokemonComponent>;
  let h5: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePokemonComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h5 = fixture.nativeElement.querySelector('h5');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Output cancel', () =>{
    component.cancel.subscribe(response =>{
      expect(response).toBe(false)
    });
    component.eventClose();
  });

  it('check title with detectChange', () => {
    fixture.detectChanges();
    expect(h5.textContent).toEqual(component.title);
  });

  it('return form valid', () =>{
    const app = fixture.componentInstance;
    fixture.detectChanges();

    let name = app.pokemonForm.controls['name'];  
    let image = app.pokemonForm.controls['image'];

    name.setValue('pokemon');
    image.setValue('image');

    expect(app.pokemonForm.invalid).toBeFalse();
  });

  it('formPokemon creation', ()=>{
    expect(component.pokemonForm.contains('name')).toBeTruthy();
    expect(component.pokemonForm.contains('image')).toBeTruthy();
    expect(component.pokemonForm.contains('attack')).toBeTruthy();
    expect(component.pokemonForm.contains('defense')).toBeTruthy();
  });






});
