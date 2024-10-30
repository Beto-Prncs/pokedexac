import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule], // Asegúrate de importar CommonModule aquí
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  corazonesArray = new Array(5); // Ejemplo para mostrar 5 corazones
  ataquesArray = new Array(3); // Ejemplo para mostrar 3 ataques
  defensasArray = new Array(2); // Ejemplo para mostrar 2 defensas
}