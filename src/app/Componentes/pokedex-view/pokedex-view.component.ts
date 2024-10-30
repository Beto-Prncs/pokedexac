import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { GraficoComponent } from '../grafico/grafico.component';
import { PokemonSearchComponent } from '../pokemon-search/pokemon-search.component';

import { FavoritesComponent } from '../favorites/favorites.component';

import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';

@NgModule({

  declarations: [

    PokemonSearchComponent,

    PokemonDetailsComponent

  ],

  imports: [

    CommonModule

  ],

  exports: [

    PokemonSearchComponent,


    PokemonDetailsComponent

  ]

})
export class PokedexViewComponent {
  pokemonImagen: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'; // Comenzar desde el primer Pokémon
  pokemonId: number = 1; // ID inicial
  pokemonNm: string | undefined;

  handleSearch(pokemonName: string) {

    this.pokemonNm = pokemonName; // Asignar el ID o nombre para buscar
  
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonNm}.png`;
  
  }

  handlePokemon(event: number): void {
    this.pokemonId += event; // Ajustar el ID según la dirección del evento

    // Asegúrate de que el ID esté dentro de los límites válidos
    if (this.pokemonId < 1) {
      this.pokemonId = 1; // No permitir ir a Pokémon anterior
    }

    // Cambiar la imagen del Pokémon
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;
  
  
  
  }


}