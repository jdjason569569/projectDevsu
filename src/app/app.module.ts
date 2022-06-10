import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { CreatePokemonComponent } from './create-pokemon/create-pokemon.component';
import { ImagePipe } from './pipes/image.pipe';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { FormsModule } from '@angular/forms';
import { SearchPokemonPipe } from './pipes/search-pokemon.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    CreatePokemonComponent,
    ImagePipe,
    SearchPokemonComponent,
    SearchPokemonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
