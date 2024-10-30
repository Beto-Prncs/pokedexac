import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'] // Corregido a 'styleUrls'
})
export class PokemonComponent {
  @Input({ required: true }) solicitarImagen: string = "";
  @Output() clickPokemon = new EventEmitter<number>();

  anteriorPokemon() {
    this.clickPokemon.emit(-1); // Emitir -1 para indicar "anterior"
  }

  siguientePokemon() {
    this.clickPokemon.emit(1); // Emitir 1 para indicar "siguiente"
  }
}