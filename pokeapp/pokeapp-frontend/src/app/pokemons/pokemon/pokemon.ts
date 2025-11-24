import { Component, input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})

export class PokemonComponent {

  readonly pokemon = input.required<Pokemon>()

}
