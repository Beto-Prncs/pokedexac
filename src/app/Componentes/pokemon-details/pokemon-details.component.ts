import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemonId: number = 1;
  pokemonDetails: any = null; // Inicializa como null

  ngOnInit() {
    this.fetchPokemonDetails();
  }

  fetchPokemonDetails() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`)
      .then(response => response.json())
      .then(data => {
        this.pokemonDetails = data;
        console.log(this.pokemonDetails); // Verifica la estructura aquí
      })
      .catch(error => console.error('Error fetching Pokémon details:', error));
  }
}