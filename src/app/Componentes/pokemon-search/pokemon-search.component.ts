import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {
  searchTerm: string = '';

  @Output() searchPokemon = new EventEmitter<string>();

  onSearch() {
    this.searchPokemon.emit(this.searchTerm.toLowerCase());
  }
}