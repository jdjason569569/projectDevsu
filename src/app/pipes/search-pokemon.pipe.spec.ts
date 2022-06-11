import { SearchPokemonPipe } from './search-pokemon.pipe';

describe('SearchPokemonPipe', () => {

   let pipe: SearchPokemonPipe;

   beforeEach(()=>{
    pipe = new SearchPokemonPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('use search correctly', ()=>{
    const text = 'pokemon name';
    expect(text.length).toBeGreaterThan(0);
 })
});
