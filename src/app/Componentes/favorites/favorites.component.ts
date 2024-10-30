// En favorites.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favorites: number[] = [];

  toggleFavorite(pokemonId: number) {
    const index = this.favorites.indexOf(pokemonId);
    if (index > -1) {
      this.favorites.splice(index, 1); // Eliminar de favoritos
    } else {
      this.favorites.push(pokemonId); // Agregar a favoritos
    }
  }
}