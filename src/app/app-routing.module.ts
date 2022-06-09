import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';

const routes: Routes = [
  {path: '', component: ListPokemonComponent},
  {path: 'create', component: CreatePokemonComponent},
  {path: 'create/:id', component: CreatePokemonComponent},

  {path: '**', component: ListPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
