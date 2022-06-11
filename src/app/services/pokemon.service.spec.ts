import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { of } from 'rxjs';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpCLientSpyGet: {get: jasmine.Spy};
  let httpClientSpyPost: {post: jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule         
     ],
    });
    service = TestBed.inject(PokemonService);
  });

  beforeEach(() => {
    httpCLientSpyGet = jasmine.createSpyObj('HttpClient', ['get']); 
    httpClientSpyPost = jasmine.createSpyObj('HttpClient', ['post']);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('return  getPokemons', () =>{
    service = new PokemonService(httpCLientSpyGet as any);
     const pokemons = [            
       {id: 1, name: 'Charmeleon',image: 'https://alfabetajuega.com/hero/2018/10/161172.alfabetajuega-pokemon-charmeleon-300816.png?width=1200&aspect_ratio=1200:631', attack: 51, defense: 20, type: 'fire',idAuthor: 1, hp: 52},
       {id: 1, name: 'Snorlax',image: 'https://alfabetajuega.com/hero/2018/10/161172.alfabetajuega-pokemon-charmeleon-300816.png', attack: 231, defense: 10, type: 'fire',idAuthor: 1, hp: 54}
     ]
    httpCLientSpyGet.get.and.returnValue(of(pokemons)); 

    service.getPokemons().subscribe(response =>{
      expect(response).toEqual(pokemons);
    });

    expect(httpCLientSpyGet.get.calls.count()).toBe(1, 'one call');
  });

  it('return created pokemon (method post)' , (done: DoneFn) =>{
    service = new PokemonService(httpClientSpyPost as any);

    const bodyPokemon = {
      name: 'Charmeleon',
      image: 'https://alfabetajuega.com/hero/2018/10/161172.alfabetajuega-pokemon-charmeleon-300816.png?width=1200&aspect_ratio=1200:631', 
      attack: 51, 
      defense: 20,
      type: 'fire',
      idAuthor: 1,
      hp: 100,
    }

    const responsePokemon = {
      id: 7820,
      name: "prueba",
      image: null,
      type: "fire",
      hp: 100,
      attack: 52,
      defense: 43,
      idAuthor: 1,
      created_at: "2022-06-11T04:06:04.120Z",
      updated_at: "2022-06-11T04:06:04.120Z"
  }
    
  httpClientSpyPost.post.and.returnValue(of(responsePokemon));

  service.createPokemon(bodyPokemon).subscribe(response =>{
    expect(response).toEqual(responsePokemon);
    done();
    });

  });


});
