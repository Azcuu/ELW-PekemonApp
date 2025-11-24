import { Component, signal, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeappService } from '../pokeapp-service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  imports: [],
  templateUrl: './pokemon-details.html',
  styleUrl: './pokemon-details.css',
})

export class PokemonDetails {

  private route: ActivatedRoute = inject(ActivatedRoute);
  private pokeappService = inject(PokeappService)

  private pokemonId: string;

  pokemon = signal<Pokemon | null>(null);

  constructor() {

    this.pokemonId = this.route.snapshot.params['pokemonId'];

    this.pokeappService.getPokemonById(this.pokemonId).subscribe(pokemon => {
      this.pokemon.set(pokemon);
    });
  }
}
